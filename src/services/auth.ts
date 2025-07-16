import axiosRequest from "@/config/axios";
import axios from "axios";

export const login = (data: { username: string; password: string }) => {
  return axiosRequest.post("/auth/sign-in", data);
};

export const register = (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return axiosRequest.post("auth/sign-up", data);
};

export const getProfile = async () => {
  try {
    const res = await axiosRequest.get("/auth/profile");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const verifyOtp = async (registration_token: string, otp: string) => {
  try {
    const res = await axiosRequest.post("/auth/sign-up/verify", {
      registration_token,
      otp,
    });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const setTokenServer = async (data: object) => {
  try {
    const res = await axios.post("/api/auth", { data });
    return res;
  } catch (error) {
    console.log("errors", error);
  }
};

export const getRefreshToken = (refreshToken: string) => {
  return axiosRequest.post("/auth/refresh-token", { refreshToken });
};

export const deleteTokenServer = async () => {
  try {
    const res = await axios.delete("/api/auth");
    return res;
  } catch (error) {
    console.log("errors", error);
  }
};

export const forgotPassword = (email: string) => {
  return axiosRequest.post("/auth/forgot-password", { email });
};

export const resetPassword = (data: {
  newPassword: string;
  registration_token: string;
}) => {
  return axiosRequest.post("/auth/forgot-password/reset-password", data);
};

const authAPI = {
  login,
  register,
  getProfile,
  resetPassword,
  forgotPassword,
  setTokenServer,
  getRefreshToken,
  deleteTokenServer,
  verifyOtp,
};

export default authAPI;

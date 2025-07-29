import { logOut, login } from "./../apis/auth";
import { useAppStore } from "@/stores/useAppStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { verifyOtp } from "./../apis/auth";

export const logOutUser = async () => {
  try {
    const res = await logOut();
    useAppStore.getState().clearProfile();
    useAuthStore.getState().logoutUser();
    return res;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const res = await login(data);
    useAppStore.getState().setProfile(res.data.data.user.profile);
    return res;
  } catch (error) {
    throw error;
  }
};

export const verifyAndRegisterUser = async (
  registration_token: string,
  otp: string
) => {
  try {
    const res = await verifyOtp(registration_token, otp);
    useAppStore.getState().setProfile(res.data.data.user.profile);
    return res;
  } catch (error) {
    throw error;
  }
};

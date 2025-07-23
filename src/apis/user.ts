import { UpdateMeasurementData, UpdateProfileData } from "./../types/user";
import axiosRequest from "@/config/axios";

export const getProfile = async (profileId: string) => {
  try {
    return await axiosRequest.get(`/users/profile/${profileId}`);
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (
  profileId: string,
  data: UpdateProfileData
) => {
  try {
    return await axiosRequest.patch(`/users/profiles/${profileId}`, data);
  } catch (error) {
    throw error;
  }
};

export const getMeasurements = async () => {
  try {
    return await axiosRequest.get(`/users/me/measurements`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateMeasurement = async (
  measurementId: string,
  data: UpdateMeasurementData
) => {
  try {
    return await axiosRequest.patch(
      `/users/measurements/${measurementId}`,
      data
    );
  } catch (error) {
    throw error;
  }
};

const userAPI = { getProfile, updateProfile };

export default userAPI;

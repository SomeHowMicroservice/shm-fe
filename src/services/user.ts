import { useMeasurementStore } from "./../stores/useMeasurementStore";
import { getMe } from "@/apis/auth";
import { getMeasurements } from "@/apis/user";
import { updateProfile, updateMeasurement } from "@/apis/user";
import { useAppStore } from "@/stores/useAppStore";
import { UpdateProfileData, UpdateMeasurementData } from "@/types/user";

export const fetchProfile = async () => {
  const res = await getMe();
  if (res && res.data) {
    useAppStore.getState().setProfile(res.data.data.user.profile);
    return res.data.data.user.profile;
  }
  return null;
};

export const updateUserProfile = async (
  profileId: string,
  data: UpdateProfileData
) => {
  const res = await updateProfile(profileId, data);
  useAppStore.getState().setProfile(res.data.data.user.profile);
  return res.data.data.user.profile;
};

export const fetchUserMeasurements = async () => {
  const res = await getMeasurements();
  if (res && res.data) {
    useMeasurementStore.getState().setMeasurements(res.data.data.measurement);
    return res.data.data.measurement;
  }
  return null;
};

export const updateUserMeasurements = async (
  measurementId: string,
  data: UpdateMeasurementData
) => {
  const res = await updateMeasurement(measurementId, data);
  useMeasurementStore.getState().setMeasurements(res.data.data.measurement);
  return res.data;
};

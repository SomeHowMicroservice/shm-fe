export type ProfileFormValues = {
  last_name: string;
  first_name: string;
  gender: string;
  dob: string;
  height: number;
  weight: number;
  chest: number;
  waist: number;
  butt: number;
};

export type UpdateProfileData = Omit<
  ProfileFormValues,
  "height" | "weight" | "chest" | "waist" | "butt"
>;

export type UpdateMeasurementData = Omit<
  ProfileFormValues,
  "last_name" | "first_name" | "gender" | "dob"
>;

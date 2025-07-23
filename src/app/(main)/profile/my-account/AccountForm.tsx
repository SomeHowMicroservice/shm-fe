"use client";

import Input from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { useAppStore } from "@/stores/useAppStore";
import { useMeasurementStore } from "@/stores/useMeasurementStore";
import { useEffect, useState } from "react";
import { updateUserProfile, updateUserMeasurements } from "@/services/user";
import {
  ProfileFormValues,
  UpdateProfileData,
  UpdateMeasurementData,
} from "@/types/user";
import { toast } from "react-toastify";
import Spin from "@/components/ui/Spin";

export default function AccountForm() {
  const { profile } = useAppStore();
  const { measurements } = useMeasurementStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      last_name: "",
      first_name: "",
      gender: "",
      dob: "",
      height: 0,
      weight: 0,
      chest: 0,
      waist: 0,
      butt: 0,
    },
  });

  useEffect(() => {
    if (profile) {
      setValue("last_name", profile.last_name);
      setValue("first_name", profile.first_name);
      setValue("gender", profile.gender);
      setValue("dob", profile.dob);
    }
    if (measurements) {
      setValue("height", measurements.height);
      setValue("weight", measurements.weight);
      setValue("chest", measurements.chest);
      setValue("waist", measurements.waist);
      setValue("butt", measurements.butt);
    }
  }, [measurements, profile, setValue]);

  const onSubmit = async (data: ProfileFormValues) => {
    setIsLoading(true);
    try {
      const profileData: UpdateProfileData = {
        last_name: data.last_name,
        first_name: data.first_name,
        gender: data.gender,
        dob: new Date(data.dob).toISOString(),
      };

      const measurementData: UpdateMeasurementData = {
        height: data.height,
        weight: data.weight,
        chest: data.chest,
        waist: data.waist,
        butt: data.butt,
      };

      try {
        await updateUserProfile(profile.id, profileData);
      } catch (error) {
        toast.error(
          typeof error === "object" && error !== null && "message" in error
            ? `Cập nhật hồ sơ thất bại: ${
                (error as { message: string }).message
              }`
            : "Cập nhật hồ sơ thất bại."
        );
        return;
      }

      try {
        await updateUserMeasurements(measurements.id, measurementData);
      } catch (error) {
        toast.error(
          typeof error === "object" && error !== null && "message" in error
            ? `Cập nhật số đo thất bại: ${
                (error as { message: string }).message
              }`
            : "Cập nhật số đo thất bại."
        );
        return;
      }

      toast.success("Cập nhật thông tin thành công!");
    } catch (error) {
      toast.error(
        typeof error === "object" && error !== null && "message" in error
          ? (error as { message?: string }).message ||
              "Đã xảy ra lỗi khi cập nhật thông tin."
          : "Đã xảy ra lỗi khi cập nhật thông tin."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-xl text-black text-lg"
    >
      <div className="flex items-center gap-2 justify-between">
        <div className="w-1/2">
          <label className="block text-sm mb-1">Họ</label>
          <Input
            {...register("last_name", { required: "Bắt buộc nhập họ" })}
            className="w-full border-none bg-gray-100 px-4 py-2 rounded"
          />
          {errors.last_name && (
            <p className="text-red-500 text-sm">{errors.last_name.message}</p>
          )}
        </div>

        <div className="w-1/2">
          <label className="block text-sm mb-1">Tên</label>
          <Input
            {...register("first_name", { required: "Bắt buộc nhập tên" })}
            className="w-full border-none bg-gray-100 px-4 py-2 rounded"
          />
          {errors.first_name && (
            <p className="text-red-500 text-sm">{errors.first_name.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Giới tính</label>
        <Input
          {...register("gender")}
          className="w-full border-none bg-gray-100 px-4 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Ngày sinh</label>
        <Input
          type="date"
          {...register("dob", { required: "Chọn ngày sinh" })}
          className="w-full border-none bg-gray-100 px-4 py-2 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Chiều cao</label>
          <div className="flex items-center border rounded px-2 border-none bg-gray-100">
            <Input
              type="number"
              {...register("height", { valueAsNumber: true })}
              className="w-full px-2 py-2 outline-none border-none"
            />
            <span className="text-sm text-gray-500 ml-2">cm</span>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Cân nặng</label>
          <div className="flex items-center border rounded px-2 border-none bg-gray-100">
            <Input
              type="number"
              {...register("weight", { valueAsNumber: true })}
              className="w-full px-2 py-2 outline-none border-none"
            />
            <span className="text-sm text-gray-500 ml-2">kg</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Số đo ba vòng</label>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center border rounded px-2 border-none bg-gray-100">
            <span className="text-xs mr-2 bg-gray-400 text-white px-2 py-1 rounded">
              V1
            </span>
            <input
              type="number"
              {...register("chest", { valueAsNumber: true })}
              className="w-full px-2 py-2 outline-none"
            />
            <span className="text-sm text-gray-500 ml-2">cm</span>
          </div>
          <div className="flex items-center border rounded px-2 border-none bg-gray-100">
            <span className="text-xs mr-2 bg-gray-400 text-white px-2 py-1 rounded">
              V2
            </span>
            <input
              type="number"
              {...register("waist", { valueAsNumber: true })}
              className="w-full px-2 py-2 outline-none"
            />
            <span className="text-sm text-gray-500 ml-2">cm</span>
          </div>
          <div className="flex items-center border rounded px-2 border-none bg-gray-100">
            <span className="text-xs mr-2 bg-gray-400 text-white px-2 py-1 rounded">
              V3
            </span>
            <input
              type="number"
              {...register("butt", { valueAsNumber: true })}
              className="w-full px-2 py-2 outline-none"
            />
            <span className="text-sm text-gray-500 ml-2">cm</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading && <Spin size={20} color="#fff" />}
        {isLoading ? "Đang cập nhật..." : "CẬP NHẬT"}
      </button>
    </form>
  );
}

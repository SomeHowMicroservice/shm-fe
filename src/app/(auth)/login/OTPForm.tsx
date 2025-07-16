"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import { verifyOtp } from "@/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type OTPFormProps = {
  email: string;
  token: string;
  onSuccess?: () => void;
};

type OtpFormValues = {
  otp: string;
};

const OTPForm = ({ email, token, onSuccess }: OTPFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtpFormValues>();

  const router = useRouter();

  const onSubmitOtp = async (data: OtpFormValues) => {
    try {
      const res = await verifyOtp(token, data.otp);
      toast.success(res.data.message);
      router.push("/");
      onSuccess?.();
    } catch (err) {
      const errorMessage =
        typeof err === "object" && err !== null && "message" in err
          ? (err as { message?: string }).message
          : "Đã xảy ra lỗi khi xác minh OTP";
      toast.error(errorMessage || "Đã xảy ra lỗi khi xác minh OTP");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitOtp)}
      className="space-y-4 text-center"
    >
      <h2 className="text-lg font-semibold">NHẬP MÃ OTP</h2>
      <p className="text-sm text-[#757575]">
        Vui lòng kiểm tra email <b>{email}</b> và nhập OTP chúng tôi vừa gửi
      </p>

      <Input
        type="text"
        placeholder="Mã OTP"
        className="mt-4"
        {...register("otp", {
          required: "OTP không được để trống",
          pattern: {
            value: /^[0-9]{4,6}$/,
            message: "OTP không hợp lệ",
          },
        })}
      />
      {errors.otp && (
        <p className="text-red-500 text-xs">{errors.otp.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 mt-4 hover:bg-gray-800 cursor-pointer transition-colors duration-200 disabled:opacity-50"
      >
        {isSubmitting ? "Đang xác thực..." : "XÁC NHẬN"}
      </button>
    </form>
  );
};

export default OTPForm;

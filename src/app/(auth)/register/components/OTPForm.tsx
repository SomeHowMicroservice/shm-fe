"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { verifyAndRegisterUser } from "@/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import Spin from "@/components/ui/Spin";

const OTP_LENGTH = 6;

const OTPForm = () => {
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(OTP_LENGTH).fill("")
  );
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const router = useRouter();
  const { registration_token, email } = useAuthStore();

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmitOtp = async () => {
    const otp = otpValues.join("");
    if (otp.length < OTP_LENGTH) {
      toast.error("Vui lòng nhập đầy đủ mã OTP");
      return;
    }

    try {
      const res = await verifyAndRegisterUser(registration_token, otp);
      toast.success(res.data.message);
      setTimeout(() => {
        router.push("/");
      }, 1000);
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
      className="text-center lg:w-1/2 w-full lg:max-w-md space-y-4"
    >
      <h2 className="text-xl text-black font-bold mb-2">NHẬP MÃ OTP</h2>
      <p className="text-sm text-[#757575]">
        Vui lòng kiểm tra email <b>{email}</b> và nhập OTP chúng tôi vừa gửi
      </p>

      <div className="flex justify-center gap-2 mt-4">
        {otpValues.map((value, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 text-center text-black text-lg border-b-2 border-gray-300 focus:border-b-black focus:outline-none"
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting && <Spin size={20} color="#fff" />}
        {isSubmitting ? "Đang xác thực..." : "XÁC THỰC OTP"}
      </button>
    </form>
  );
};

export default OTPForm;

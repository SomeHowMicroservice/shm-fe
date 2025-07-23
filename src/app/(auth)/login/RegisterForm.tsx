"use client";

import React, { useState } from "react";
import { CiLock, CiUser, CiMail } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { register as registerApi } from "@/apis/auth";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import OTPForm from "./OTPForm";
import LoginForm from "./LoginForm";
import Link from "next/link";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

  const [sentToEmail, setSentToEmail] = useState("");
  const [verifyToken, setVerifyToken] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await registerApi({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      toast.success("Mã OTP đã được gửi về mail của bạn");

      setSentToEmail(data.email);
      setVerifyToken(res.data.registration_token);
      setShowOtpForm(true);
    } catch (error: unknown) {
      toast.error(
        typeof error === "object" && error !== null && "message" in error
          ? (error as { message: string }).message
          : "Đã xảy ra lỗi, vui lòng thử lại."
      );
    }
  };

  if (showOtpForm) {
    return (
      <OTPForm
        token={verifyToken}
        email={sentToEmail}
        onSuccess={() => setShowLoginForm(true)}
      />
    );
  }

  if (showLoginForm) {
    return <LoginForm />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex items-center border-b">
        <CiUser className="mr-2 text-[#757575]" size={20} />
        <Input
          type="text"
          placeholder="Tên đăng nhập"
          className="flex-1 outline-none py-2 text-[#757575] placeholder:text-[#757575] placeholder:text-sm border-none"
          {...register("username", {
            required: "Tên đăng nhập không được để trống",
            pattern: {
              value: /^(?![_.])[a-zA-Z0-9._]{3,20}(?<![_.])$/,
              message: "Tên đăng nhập không hợp lệ",
            },
          })}
        />
      </div>
      {errors.username && (
        <p className="text-red-500 text-xs px-2">{errors.username.message}</p>
      )}

      <div className="flex items-center border-b">
        <CiMail className="text-[#757575] mr-2" size={20} />
        <Input
          type="email"
          placeholder="Email"
          className="flex-1 outline-none py-2 text-[#757575] placeholder:text-[#757575] placeholder:text-sm border-none"
          {...register("email", {
            required: "Email không được để trống",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Email không hợp lệ",
            },
          })}
        />
      </div>
      {errors.email && (
        <p className="text-red-500 text-xs px-2">{errors.email.message}</p>
      )}

      <div className="flex items-center border-b">
        <CiLock className="text-[#757575] mr-2" size={20} />
        <Input
          type="password"
          placeholder="Mật khẩu"
          className="flex-1 outline-none py-2 text-[#757575] placeholder:text-[#757575] placeholder:text-sm border-none"
          {...register("password", {
            required: "Mật khẩu không được để trống",
            minLength: {
              value: 6,
              message: "Mật khẩu phải ít nhất 6 ký tự",
            },
          })}
        />
      </div>
      {errors.password && (
        <p className="text-red-500 text-xs px-2">{errors.password.message}</p>
      )}

      <div className="flex items-center border-b">
        <CiLock className="text-[#757575] mr-2" size={20} />
        <Input
          type="password"
          placeholder="Xác nhận mật khẩu"
          className="flex-1 outline-none py-2 text-[#757575] placeholder:text-[#757575] placeholder:text-sm border-none focus:none"
          {...register("confirmPassword", {
            required: "Xác nhận mật khẩu không được để trống",
            validate: (value) =>
              value === watch("password") || "Mật khẩu không khớp",
          })}
        />
      </div>
      {errors.confirmPassword && (
        <p className="text-red-500 text-xs px-2">
          {errors.confirmPassword.message}
        </p>
      )}

      <div className="text-[#757575] text-xs px-2 text-center">
        Bằng cách nhấp vào “Đăng ký”, bạn đã đồng ý với{" "}
        <Link
          className="underline hover:font-medium hover:text-black"
          href={"/security-policy"}
        >
          Chính sách bảo mật
        </Link>{" "}
        và{" "}
        <Link
          className="underline hover:font-medium hover:text-black"
          href={"/using-policy"}
        >
          điều khoản sử dụng của chúng tôi
        </Link>
        .
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 mt-4 hover:bg-gray-800 cursor-pointer transition-colors duration-200 disabled:opacity-50"
      >
        {isSubmitting ? "Đang xử lý..." : "ĐĂNG KÝ"}
      </button>
    </form>
  );
};

export default RegisterForm;

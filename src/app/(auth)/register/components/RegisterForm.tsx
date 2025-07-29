"use client";

import React from "react";
import { CiLock, CiUser, CiMail } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { register as registerApi } from "@/apis/auth";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import Link from "next/link";
import { useAuthStore } from "@/stores/useAuthStore";
import Spin from "@/components/ui/Spin";
import OTPForm from "./OTPForm";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const authActions = useAuthStore();

  const [showOtpForm, setShowOtpForm] = React.useState(false);

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

      authActions.setNewEmail({ email: data.email });
      authActions.setNewToken({
        registration_token: res.data.data.registration_token,
      });
      toast.success("Mã OTP đã được gửi về mail của bạn");
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
    return <OTPForm />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-1/2 w-full lg:max-w-md space-y-4"
    >
      <h2 className="text-xl text-black font-bold mb-2">ĐĂNG KÝ</h2>
      <div className="flex items-center border px-3 py-1 rounded bg-[#ebebeb]">
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

      <div className="flex items-center border px-3 py-1 rounded bg-[#ebebeb]">
        <CiMail className="text-[#757575] mr-2" size={20} />
        <Input
          type="email"
          placeholder="Email"
          className="flex-1 outline-none py-2 text-[#757575] placeholder:text-[#757575] placeholder:text-sm border-none bg-[#ebebeb]"
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

      <div className="flex items-center border px-3 py-1 rounded bg-[#ebebeb]">
        <CiLock className="text-[#757575] mr-2" size={20} />
        <Input
          type="password"
          placeholder="Mật khẩu"
          className="flex-1 outline-none py-2 text-[#757575] placeholder:text-[#757575] placeholder:text-sm border-none bg-[#ebebeb]"
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

      <div className="flex items-center rounded border px-3 py-1 bg-[#ebebeb]">
        <CiLock className="text-[#757575] mr-2" size={20} />
        <Input
          type="password"
          placeholder="Xác nhận mật khẩu"
          className="flex-1 outline-none py-2 text-[#757575] placeholder:text-[#757575] placeholder:text-sm border-none focus:none bg-[#ebebeb]"
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

      <div className="text-xs text-center pt-2 text-[#757575]">
        Đã có tài khoản?{" "}
        <Link
          className="underline hover:text-black hover:font-medium"
          href={"/login"}
        >
          Đăng nhập ngay
        </Link>
      </div>

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
        className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting && <Spin size={20} color="#fff" />}
        {isSubmitting ? "Đang xử lý..." : "ĐĂNG KÝ"}
      </button>
    </form>
  );
};

export default RegisterForm;

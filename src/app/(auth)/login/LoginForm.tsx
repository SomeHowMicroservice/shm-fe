"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { CiLock, CiUser } from "react-icons/ci";
import Input from "@/components/ui/Input";
import { login } from "@/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type LoginFormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await login(data);
      console.log(res);
      toast.success(res.data.message);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Đã xảy ra lỗi, vui lòng thử lại.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
      <div className="flex flex-col gap-1">
        <div className="flex items-center border-b">
          <CiUser className="mr-2 text-[#757575]" size={20} />
          <Input
            type="text"
            placeholder="Tên đăng nhập"
            className="flex-1 outline-none py-2 border-none placeholder:text-[#757575] placeholder:text-sm text-[#757575]"
            {...register("username", {
              required: "Tên đăng nhập không được để trống",
              minLength: {
                value: 3,
                message: "Tên đăng nhập phải ít nhất 3 ký tự",
              },
            })}
          />
        </div>
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center border-b">
          <CiLock className="text-[#757575] mr-2" size={20} />
          <Input
            type="password"
            placeholder="Mật khẩu"
            className="flex-1 outline-none py-2 border-none placeholder:text-[#757575] placeholder:text-sm text-[#757575]"
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
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 mt-4 hover:bg-gray-800 cursor-pointer transition-colors duration-200"
      >
        ĐĂNG NHẬP
      </button>

      <div className="text-center mt-4 text-sm">
        <a href="#" className="text-gray-600 hover:underline">
          QUÊN MẬT KHẨU?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;

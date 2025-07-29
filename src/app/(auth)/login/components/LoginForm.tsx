"use client";

import { useForm } from "react-hook-form";
import { CiLock, CiUser } from "react-icons/ci";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Spin from "@/components/ui/Spin";
import { loginUser } from "@/services/auth";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      const res = await loginUser(data);
      toast.success(res.data.message);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Đã xảy ra lỗi, vui lòng thử lại.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-1/2 w-full lg:max-w-md space-y-4"
    >
      <h2 className="text-xl text-black font-bold mb-2">ĐĂNG NHẬP</h2>
      <p className="text-sm text-gray-600 mb-4">
        Nếu bạn đã có tài khoản, hãy đăng nhập để nhận những ưu đãi tốt hơn!
      </p>

      <div className="flex flex-col gap-1">
        <div className="flex items-center border rounded px-3 py-1 bg-[#ebebeb]">
          <CiUser className="mr-2 text-[#757575]" size={20} />
          <Input
            type="text"
            placeholder="Tên đăng nhập"
            className="flex-1 outline-none border-none text-sm text-[#757575] placeholder:text-[#757575] bg-[#ebebeb]"
            {...register("username", {
              required: "Số điện thoại không được để trống",
              minLength: {
                value: 3,
                message: "Số điện thoại phải ít nhất 3 ký tự",
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
        <div className="flex items-center border rounded px-3 py-1 bg-[#ebebeb]">
          <CiLock className="mr-2 text-[#757575]" size={20} />
          <Input
            type="password"
            placeholder="Mật khẩu"
            className="flex-1 outline-none border-none text-sm text-[#757575] placeholder:text-[#757575]"
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

      <div className="flex items-center justify-between text-sm">
        <Link href="/register" className="text-gray-600 hover:underline">
          Đăng ký tài khoản mới
        </Link>
        <Link href="/forgot-password" className="text-gray-600 hover:underline">
          Bạn quên mật khẩu?
        </Link>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting && <Spin size={20} color="#fff" />}
        {isSubmitting ? "Đang đăng nhập..." : "ĐĂNG NHẬP"}
      </button>
    </form>
  );
};

export default LoginForm;

"use client";

import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import Input from "@/components/ui/Input";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookies";

export default function Header() {
  const router = useRouter();
  const token = getCookie("g_state");

  const handleProfile = () => {
    router.push("/profile");
    console.log(token);
  };

  return (
    <header className="w-full bg-white px-4 py-4">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        <div className="flex items-center gap-16">
          <button className="text-white hover:text-gray-200 transition-colors">
            <MdOutlineMenu size={22} className="text-black" />
          </button>

          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={220}
            height={220}
            className="text-black font-bold text-xl tracking-wide"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Input
                type="text"
                icon={<CiSearch className="text-black" />}
                placeholder="Search..."
                className="w-full px-4 py-1 pl-10 text-black backdrop-blur-sm border border-black rounded-md bg-white placeholder-black placeholder:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              className="flex items-center space-x-2 text-black hover:text-gray-200 cursor-pointer transition-colors"
              onClick={handleProfile}
            >
              <FaRegUser size={18} />
            </button>
            <span className="font-medium text-black">GIO (2)</span>
          </div>
        </div>
      </div>
    </header>
  );
}

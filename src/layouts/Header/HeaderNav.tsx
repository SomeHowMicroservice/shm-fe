"use client";

import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useAppStore } from "@/stores/useAppStore";

export default function Header() {
  const pathName = usePathname();

  const isHome = pathName === "/";
  const { profile } = useAppStore();

  const isAuthenticated = !!profile.id;

  return (
    <header className="w-full bg-white px-6 py-4 text-black sticky">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button>
            <MdOutlineMenu size={28} />
          </button>

          <div className="flex items-center border-b border-black">
            <CiSearch size={18} className="mr-2" />
            <Input
              type="text"
              placeholder="SEARCH..."
              className="bg-transparent text-sm focus:outline-none border-none"
            />
          </div>
        </div>

        <Image
          src="/images/logo.png"
          alt="SOMEHOW Logo"
          width={200}
          height={150}
          className="object-cover"
        />

        <div className="flex items-center gap-6 ">
          <Link href={isAuthenticated ? "/profile/my-account" : "/login"}>
            <FaRegUser
              size={18}
              className="hover:text-gray-300 transition cursor-pointer"
            />
          </Link>
          <Link href="/wishlist">
            <AiOutlineHeart
              size={20}
              className="hover:text-gray-300 transition cursor-pointer"
            />
          </Link>
          <Link href="/cart">
            <BsBag
              size={20}
              className="hover:text-gray-300 transition cursor-pointer"
            />
          </Link>
        </div>
      </div>
      {isHome && (
        <div className="flex gap-4  text-sm font-light tracking-wide mt-4">
          <button className="hover:text-gray-300 transition">NAM</button>
          <button className="hover:text-gray-300 transition">NỮ</button>
        </div>
      )}
    </header>
  );
}

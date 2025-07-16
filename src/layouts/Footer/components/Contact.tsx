import React from "react";
import { SiShopee } from "react-icons/si";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 items-center bg-white text-black pb-5">
      <h4 className="text-xl">THEO DÕI CHÚNG TÔI</h4>
      <div className="flex gap-6 items-center">
        <SiShopee className="text-2xl" />
        <FaFacebook className="text-2xl" />
        <FaInstagramSquare className="text-2xl" />
        <FaTiktok className="text-2xl" />
      </div>

      <div className="text-sm font-extralight">© Since 2015 SOMEHOW. Continuing the journey.</div>
    </div>
  );
}

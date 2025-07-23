"use client";

import { FaFacebookF, FaInstagram, FaTiktok, FaRegClock } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { PiBagSimpleThin } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsClockHistory } from "react-icons/bs";
import { MdPublishedWithChanges } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-black text-sm">
      <div className="border-b border-gray-300 py-8 px-4 grid grid-cols-1 md:grid-cols-4 text-center gap-6">
        <div className="flex flex-col items-center justify-center gap-1">
          <TbTruckDelivery size={28} />
          <p>Miễn phí vận chuyển</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <BsClockHistory size={24} />
          <p>Hỗ trợ khách hàng 24/7</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <MdPublishedWithChanges size={26} />
          <p>Đổi trả dễ dàng</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <GiCheckMark size={26} />
          <p>Sản phẩm chất lượng cao</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-6 py-10">
        <div className="space-y-3">
          <h4 className="font-semibold uppercase">Thông tin liên hệ</h4>
          <div className="flex items-center gap-2">
            <FiMail />
            <span>info@somehow.vn</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone />
            <span>028 7307 6464</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegClock />
            <span>Giờ mở cửa 8:30 AM - 22 PM</span>
          </div>

          <div className="pt-4">
            <p className="uppercase font-semibold mb-2">Theo dõi chúng tôi</p>
            <div className="flex items-center gap-3 text-xl">
              <FaFacebookF />
              <FaInstagram />
              <FaTiktok />
              <PiBagSimpleThin />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold uppercase">Dịch vụ</h4>
          <ul className="space-y-1">
            <li>Chính sách giao hàng</li>
            <li>Chính sách đổi trả</li>
            <li>Ưu đãi sinh nhật</li>
            <li>Chương trình Membership</li>
            <li>Tích điểm SomeHow</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold uppercase">Bộ sưu tập nam</h4>
          <ul className="space-y-1">
            <li>Áo</li>
            <li>Quần</li>
            <li>Set Quần Áo</li>
            <li>Giày - Dép</li>
            <li>Phụ kiện</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold uppercase">Bộ sưu tập nữ</h4>
          <ul className="space-y-1">
            <li>Đầm</li>
            <li>Set đồ</li>
            <li>Áo</li>
            <li>Quần</li>
            <li>Suit</li>
            <li>Chân váy</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold uppercase">Đăng ký nhận tư vấn</h4>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Số điện thoại của bạn"
              className="border border-black px-3 py-1 w-full text-sm"
            />
            <button className="bg-black text-white px-4 py-1 text-sm">
              ĐĂNG KÝ
            </button>
          </div>
          <p className="text-xs">
            Bằng cách tạo tài khoản, bạn đồng ý với Chính sách bảo mật của Some
            How
          </p>
          <div className="mt-2">
            <Image
              src="/images/logo_footer.png"
              alt="Đã thông báo bộ công thương"
              width={120}
              height={50}
            />
          </div>
        </div>
      </div>

      <div className="text-center py-4">
        <Image
          src="/images/logo_footer.png"
          alt="Logo SOMEHOW"
          width={700}
          height={700}
          className="mx-auto"
        />
      </div>
    </footer>
  );
}

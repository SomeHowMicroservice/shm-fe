import React from "react";
import { FaPhone, FaClock, FaEnvelope } from "react-icons/fa";

export default function Information() {
  return (
    <div className="bg-white w-full flex mx-auto">
      <div className="mx-auto w-full flex items-start justify-between max-w-7xl px-4 py-8 gap-8">
        <div className="">
          <h2 className="text-sm font-normal text-gray-800 mb-2">
            CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN?
          </h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaEnvelope className="w-4 h-4 text-black" />
              <span className="text-xs text-gray-600">info@somehow.vn</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="w-4 h-4 text-black" />
              <span className="text-xs text-gray-600">028 7307 6464</span>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="w-4 h-4 text-black" />
              <span className="text-xs text-gray-600">
                Giờ mở cửa 8:30 AM - 22 PM
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-xs text-gray-700 font-medium">
              Giới thiệu SomeHow
            </p>
            <p className="text-xs text-gray-700">Chính sách đổi trả</p>
            <p className="text-xs text-gray-700">
              Chương trình ưu đãi sinh nhật khách hàng
            </p>
            <p className="text-xs text-gray-700">Chương trình Membership</p>
            <p className="text-xs text-gray-700">Điểm SomeHow là gì?</p>
          </div>
        </div>

        <div className="">
          <h2 className="text-sm font-normal text-gray-800 mb-2">
            TP. HỒ CHÍ MINH
          </h2>

          <div className="space-y-3 text-xs text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-black">•</span>
              <span>178B Huỳnh Thúc Kháng, P. 14 - Quận Bình Thạnh</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-black">•</span>
              <span>Lầu 2 - Vincom Lê Văn Việt, P. Hiệp Phú - TP. Thủ Đức</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-black">•</span>
              <span>538 Sư Vạn Hạnh, P. 13 - Quận 10</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-black">•</span>
              <span>1002 Quang Trung, P. 8 - Quận Gò Vấp</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-black">•</span>
              <span>186 Trường Chinh, P. 13 - Quận Tân Bình</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-black">•</span>
              <span>148 Nguyễn Trãi, P. Bến Thành - Quận 1</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-black">•</span>
              <span>245 Nguyễn Thị Tú, Bình Hưng Hòa B - Quận Bình Tân</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-black">•</span>
              <span>1239 Hòa Bình, P. Hiệp Tân - Quận Tân Phú</span>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-black">•</span>
              <span>341 Huỳnh Tấn Phát, P. Tân Thuận Đông - Quận 7</span>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="text-sm font-normal text-gray-800 mb-2">
            TP. BIÊN HÒA
          </h3>

          <div className="mb-3">
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <span className="text-black">•</span>
              <span>159 Phan Trung Hiếu, P. Tân Mai - Thành Phố Biên Hòa</span>
            </div>
          </div>

          <h3 className="text-sm font-normal text-gray-800 mb-2">BÌNH DƯƠNG</h3>

          <div className="mb-3">
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <span className="text-black">•</span>
              <span>
                218 Yersin - P. Hiệp Thành - Thành Phố Thủ Dầu Một - Bình Dương
              </span>
            </div>
          </div>

          <h3 className="text-sm font-normal text-gray-800 mb-2">CẦN THƠ</h3>

          <div className="flex items-start gap-2 text-xs text-gray-700">
            <span className="text-black">•</span>
            <span>
              85-87 Trần Hưng Đạo, Phường Thới Bình - Thành Phố Cần Thơ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

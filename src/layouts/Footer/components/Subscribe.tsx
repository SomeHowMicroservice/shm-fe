import React from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center gap-4 text-black py-8 px-4">
      <h3 className="font-bold text-sm text-center">ĐĂNG KÝ NHẬN TIN</h3>
      <p className="text-center text-xs font-thin text-gray-600 max-w-md leading-relaxed">
        Nếu bạn cần thêm thông tin, vui lòng để lại số điện thoại tại đây, hãy
        là người đầu tiên nhận khuyến mãi lớn!
      </p>

      <div className="flex gap-4 items-center flex-wrap mt-2">
        <Input
          type="text"
          placeholder="Số điện thoại của bạn"
          className="w-[575px] min-w-0 text-sm border-t-0 border-l-0 border-r-0 border-b-2 border-[#e2e2e2] focus:border-[#e2e2e2] focus:ring-0 rounded-none shadow-none"
        />
        <Button
          variant="outlined"
          className="rounded-none p-0 px-6 hover:bg-white hover:text-black cursor-pointer"
        >
          ĐĂNG KÍ
        </Button>
      </div>
    </div>
  );
}

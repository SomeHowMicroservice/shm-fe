"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbMap: Record<string, string> = {
    "": "Trang chủ",
    profile: "Tài khoản",
    "my-account": "Thông tin tài khoản",
    orders: "Đơn hàng",
    address: "Danh sách địa chỉ",
    login: "Đăng nhập",
    "sign-up": "Đăng ký",
    discount: "Mã giảm giá",
  };

  const fullPath: { href: string; label: string }[] = [];

  pathSegments.reduce((prev, curr) => {
    const currentPath = `${prev}/${curr}`;
    fullPath.push({
      href: currentPath,
      label: breadcrumbMap[curr] || curr,
    });
    return currentPath;
  }, "");

  if (isHome) {
    return null;
  }

  return (
    <div className="text-sm text-[#666] p-6 bg-white flex items-center gap-2">
      <Link href="/" className="hover:underline">
        {breadcrumbMap[""]}
      </Link>
      {fullPath.map((item) => (
        <span key={item.href}>
          {" "}
          |{" "}
          <Link
            href={item.href}
            className="hover:underline font-medium text-black"
          >
            {item.label}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;

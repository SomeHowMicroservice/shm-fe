"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/config/utils";
import { useEffect } from "react";
import { fetchProfile, fetchUserMeasurements } from "@/services/user";
import { useAppStore } from "@/stores/useAppStore";
import { CiLogout } from "react-icons/ci";
import { logOut } from "@/apis/auth";
import { toast } from "react-toastify";

const sidebarItems = [
  { label: "Thông tin tài khoản", path: "/profile/my-account" },
  { label: "Mã giảm giá của tôi", path: "/profile/discount" },
  { label: "Danh sách địa chỉ", path: "/profile/address" },
  { label: "Đơn hàng và đổi trả", path: "/profile/orders" },
  { label: "Danh sách yêu thích", path: "/profile/favorites" },
  { label: "Lịch sử mua hàng", path: "/profile/history" },
  { label: "Thay đổi mật khẩu", path: "/profile/change-password" },
  {
    label: "Đăng xuất",
    path: "#",
    icon: <CiLogout className="w-4 h-4 ml-2 rotate-180" />,
    action: "logout",
  },
];

export default function ProfileSidebar() {
  const profile = useAppStore((state) => state.profile);
  const pathname = usePathname();
  const router = useRouter();

  const fetchProfileData = async () => {
    try {
      const profile = await fetchProfile();
      console.log("Fetched Profile:", profile);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const fetchMeasurementsData = async () => {
    try {
      const measurements = await fetchUserMeasurements();
      console.log("Fetched Measurements:", measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
    }
  };

  const handleLogout = async () => {
    await logOut();
    toast.success("Đăng xuất thành công");
    router.push("/");
  };

  const handleItemClick = (item: (typeof sidebarItems)[number]) => {
    if (item.action === "logout") {
      handleLogout();
    } else {
      router.push(item.path);
    }
  };

  useEffect(() => {
    fetchProfileData();
    fetchMeasurementsData();
  }, []);

  return (
    <aside className="w-full max-w-[250px] border-r pr-4">
      <h2 className="text-2xl font-bold text-black mb-4">TÀI KHOẢN</h2>
      <p className="text-lg mb-6 text-black">
        Xin chào,{" "}
        <span className="font-semibold uppercase">
          {profile.first_name} {profile.last_name}
        </span>
      </p>
      <ul className="space-y-8 text-sm font-medium">
        {sidebarItems.map((item) => (
          <li
            key={item.label}
            onClick={() => handleItemClick(item)}
            className={cn(
              "cursor-pointer hover:text-yellow-500 border-l-2 pl-1 flex items-center",
              pathname === item.path
                ? "text-yellow-500 border-yellow-500 font-medium"
                : "text-black border-transparent"
            )}
          >
            {item.label}
            {item.icon && item.icon}
          </li>
        ))}
      </ul>
    </aside>
  );
}

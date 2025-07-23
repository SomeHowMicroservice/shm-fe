import React from "react";
import ProfileSidebar from "./components/ProfileSidebar";
// import Image from "next/image";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-28 px-10 my-10">
      <ProfileSidebar />
      <main className="">{children}</main>
      {/* <Image
        src="/images/profileImage.jpg"
        alt="Profile Banner"
        width={500}
        height={300}
        objectFit="contain"
        className="hidden xl:block"
        style={{ maxWidth: "100%", height: "auto" }}
      /> */}
    </div>
  );
}

import Footer from "@/layouts/Footer/page";
import Header from "@/layouts/Header/HeaderNav";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import Breadcrumb from "@/components/organisms/Breadcrum";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <Breadcrumb />
        <div className="flex justify-between bg-white w-full h-screen px-20">
          {children}
          <div className="lg:w-1/2 h-[300px] relative hidden lg:block min-h-2/3">
            <Image
              src="/images/authImage.png"
              alt="Auth Banner"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

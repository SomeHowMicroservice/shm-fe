import Breadcrumb from "@/components/organisms/Breadcrum";
import Footer from "@/layouts/Footer/page";
import Header from "@/layouts/Header/HeaderNav";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumb />
      <div className="flex flex-1 flex-col bg-white">{children}</div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

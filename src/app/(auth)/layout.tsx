import Footer from "@/layouts/Footer/page";
import Header from "@/layouts/Header/HeaderNav";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

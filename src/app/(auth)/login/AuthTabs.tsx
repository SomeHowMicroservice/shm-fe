"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="border-b mb-10 w-4/5 mx-auto">
        <button
          className={`pb-2 border-b-2 text-xl cursor-pointer w-1/2 hover:border-b-2 hover:border-b-black transition-colors duration-200 ${
            activeTab === "login"
              ? "border-black text-black"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("login")}
        >
          ĐĂNG NHẬP
        </button>
        <button
          className={`pb-2 border-b-2 text-xl cursor-pointer w-1/2  hover:border-b-2 hover:border-b-black transition-colors duration-200 ${
            activeTab === "register"
              ? "border-black text-black"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("register")}
        >
          ĐĂNG KÝ
        </button>
      </div>

      {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthTabs;

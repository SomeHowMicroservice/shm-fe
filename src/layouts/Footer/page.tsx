import React from "react";
import Information from "./components/Information";
import Contact from "./components/Contact";
import Subscribe from "./components/Subscribe";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-3 bg-white">
      <Subscribe />
      <Information />
      <Contact />
    </div>
  );
}

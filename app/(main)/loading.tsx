import React from "react";
import "@/styles/loader.css";

export default function LoadingMain() {
  return (
    <div className="bg-dark-eerie-black h-[calc(100vh-56px)] w-[100%]">
      <div className="wrapper absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

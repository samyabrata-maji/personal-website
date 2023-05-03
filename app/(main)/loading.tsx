import React from "react";
import "@/styles/loader.css";

export default function MainLoading() {
  return (
    <div className="flex h-[100vh] w-[100%] items-center justify-center">
      <div className="wrapper">
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

import Navbar from "@/ui/Navbar";
import React, { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
    </>
  );
}

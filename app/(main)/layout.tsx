import { NavbarTemplate } from "@/ui/Navbar";
import React, { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-[100vw] min-h-[100vh]">
      <NavbarTemplate />
      {children}
    </div>
  );
}

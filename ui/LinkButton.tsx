import Link from "next/link";
import { ReactNode } from "react";

export default function LinkButton({ children }: { children: ReactNode }) {
  return (
    <div className="link-button flex h-[100%] w-[100%] max-w-[320px] items-center justify-center">
      <Link
        href={"https://github.com/samyabrata-maji"}
        target="_blank"
        className="tracking-widest text-white"
      >
        {children}
      </Link>
      {/* <button className="link-button">Hover me</button> */}
    </div>
  );
}

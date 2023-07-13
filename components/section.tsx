import { ReactNode } from "react";
import { TypographyH2 } from "./typography";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 w-[100%] my-8">
      <TypographyH2 className="border-b-0">{title}</TypographyH2>
      {children}
    </div>
  );
}

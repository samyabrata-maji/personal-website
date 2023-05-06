import React, { ReactNode } from "react";

// children is a react icon component
export default function ServiceCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div>
      {/* {children} */}
      <h1 className="text-2xl font-bold text-black pb-2">{title}</h1>
      <p className="text-black pt-2">{description}</p>
    </div>
  );
}

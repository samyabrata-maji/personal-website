import "@/styles/globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Portfolio of Samyabrata Maji</title>
      </head>
      <body className="bg-dark-rich-black overflow-x-hidden overflow-y-auto">{children}</body>
    </html>
  );
}

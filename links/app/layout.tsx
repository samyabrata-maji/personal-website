import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Social Media Links ✨</title>
      </head>
      <body className="overflow-y-scroll bg-black">{children}</body>
    </html>
  );
}

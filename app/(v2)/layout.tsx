import { satoshi } from "../layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={satoshi.className}>{children}</div>;
}

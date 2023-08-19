import "./globals.css";
import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import ImgPfp from "@/public/assets/img/sammaji.png";

const inter = Inter({ subsets: ["latin"] });
// const syne = Syne({subsets: ['greek']})

const title = "Portfolio of Samyabrata Maji";
const description =
  "Personal Portfolio of Samyabrata Maji, showcasing his work.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["portfolio", "web developer", "react", "next", "frontend"],
  alternates: { canonical: { url: "https://sammaji.pages.dev/" } },
  icons: ["https://vercel.pub/favicon.ico"],
  openGraph: {
    title,
    description,
    images: [ImgPfp.src],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ImgPfp.src],
    creator: "@samyabrata-maji",
  },
  metadataBase: new URL("https://sammaji.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="h-[56px] border-b-[1px] border-[rgba(0,0,0,0.12)] flex items-center justify-end mx-36 max-md:mx-16 max-sm:mx-0 max-sm:px-4">
          <div className="flex gap-2">
            <a className="" href="/blogs">
              Blogs
            </a>
            <p>/</p>
            <a className="" href="/projects">
              Projects
            </a>
            <p>/</p>
            <a className="" href="/socials">
              Socials
            </a>
            {/* <p>/</p>
            <a>Hire Me</a> */}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

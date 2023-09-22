import "./globals.css";
import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import ImgPfp from "@/public/assets/img/sammaji.png";
import { Button } from "@/components/ui/button";

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
          <div className="flex gap-2 items-center">
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
            <a
              href="mailto://samyabratamaji@gmail.com?subject=%F0%9F%92%A1%20Project%20Idea%2C%20Let%27s%20Talk"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors active:translate-y-[1px] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ml-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Hire me
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

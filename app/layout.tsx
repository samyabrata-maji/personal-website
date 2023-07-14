import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ImgPfp from "@/public/assets/img/sammaji.png"

const inter = Inter({ subsets: ['latin'] })

const title = 'Portfolio of Samyabrata Maji'
const description ='Personal Portfolio of Samyabrata Maji, showcasing his work.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ["portfolio", "web developer", "react", "next", "frontend"],
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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

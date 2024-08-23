import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import GlowTop from "@/public/glow-top.svg";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
});

const calcom = localFont({
    src: "../public/fonts/CalSans-SemiBold.woff2",
    variable: "--font-title",
});

const haptik = localFont({
    src: "../public/fonts/GT-Haptik-Regular.ttf",
    variable: "--font-google",
});

const haptikBold = localFont({
    src: "../public/fonts/GT-Haptik-Bold.ttf",
    variable: "--font-gb",
    weight: "800",
});

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen font-sans antialiased",
                    inter.variable,
                    calcom.variable,
                    haptik.variable,
                    haptikBold.variable,
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <Toaster />
                    <TailwindIndicator />
                    <main
                        className={cn(
                            "min-h-screen font-sans antialiased",
                            inter.variable,
                            calcom.variable,
                        )}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-60">
                            <Image
                                src={GlowTop}
                                className="max-w-[55vw]"
                                width={1404}
                                height={658}
                                alt="Glow Top"
                            />
                        </div>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}

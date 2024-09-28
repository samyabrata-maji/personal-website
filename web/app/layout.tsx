import { cn } from "@/lib/utils";
import Image from "next/image";
import GlowTop from "@/public/glow-top.svg";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={cn(inter.className, "min-h-screen font-sans antialiased")}
            >
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <Toaster />
                    <main
                        className={cn("min-h-screen antialiased")}
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

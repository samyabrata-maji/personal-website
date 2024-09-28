import AboutMe from "@/components/about-me";
import Experiences from "@/components/experiences";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/projects";
import { Separator } from "@radix-ui/react-separator";
import type { Metadata } from "next";
import ogImg from "@/public/assets/img/sammaji.webp"

const title = "Sam Maji | Full-stack dev | Designer";
const description = "Full-stack engineer, based in India.";

export const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_ROOT_URL ?? "https://sammaji.vercel.app",
    ),
    keywords: [
        "Samyabrata Maji",
        "Website",
        "Developer",
        "Full-stack Engineer",
        "Software Developer",
    ],
    openGraph: {
        title,
        description,
        type: "website",
        images: [
            {
                url: ogImg.src,
                width: 612,
                height: 612,
                alt: `Samyabrata Maji | Full-stack dev`,
            },
        ],

    },
    twitter: {
        title,
        description,
        card: 'summary_large_image',
        images: ogImg.src,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default async function Website() {
    return (
        <>
            <Header
                experiences={true}
                contributions={false}
                testimonials={false}
                projects={true}
                name="Sam Maji"
                github="https://github.com/sammaji"
                linkedIn="https://linkedin.com/in/samyabrata-maji"
                twitter="https://twitter.com/sammaji15"
            />
            <section className="mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8 space-y-36">
                <Hero
                    mail="samyabratamaji334@gmail.com"
                    name="Sam"
                    oneLiner="Full-stack Engineer. Designer. Freelancer."
                />
                <FeaturedProjects
                    projects={[
                        {
                            name: "Samscript",
                            description:
                                "A dynamically typed programming language made using Typescript and Java. Supports most features of a standard programming language.",
                            githubUrl: "https://github.com/sammaji/samscript-ts",
                            techStack: [],
                            webUrl: "https://github.com/sammaji/samscript-ts#samscript",
                            src: "/images/samscript.webp",
                        },
                        {
                            name: "Toy DNS Server",
                            description:
                                "A simple DNS server built on Typescript. Supports recursive resolve.",
                            githubUrl: "https://github.com/sammaji/toy-dns-server",
                            techStack: [],
                            webUrl:
                                "https://github.com/sammaji/toy-dns-server#toy-dns-server",
                            src: "/images/dns-server.webp",
                        },
                        {
                            name: "Gasar Project",
                            description:
                                "Admin and internal dashboards for Genetic Assessment and Surveillance of Antibiotic Resistance Study (GASAR) to collect samples from research institutes.",
                            techStack: [],
                            webUrl: "#",
                            src: "/images/gasar.webp",
                        },
                        {
                            name: "Digital Dreamers",
                            description: "Landing page for web design agencies.",
                            githubUrl: "https://github.com/sammaji/digitaldreamers.xyz",
                            techStack: [],
                            webUrl: "https://digitaldreamers.xyz",
                            src: "/images/digital-dreamers.webp",
                        },
                    ]}
                />
                <Experiences
                    experiences={[
                        {
                            position: "Full-stack engineer",
                            startDate: new Date(),
                            endDate: new Date(),
                            currentlyWorking: false,
                            orgName: "Venus Remedies Ltd. (Contract)",
                            orgUrl: "https://www.bairesdev.com/",
                        },
                        {
                            position: "Technical Writer",
                            startDate: new Date("2023-04-01"),
                            endDate: new Date("2023-11-13"),
                            currentlyWorking: false,
                            orgName: "BairesDev (Contract)",
                            orgUrl: "https://www.bairesdev.com/",
                        },
                    ]}
                />
                <AboutMe
                    bio="I write code."
                    techStack={[
                        "NextJS",
                        "React",
                        "TypeScript",
                        "AWS",
                        "Prisma",
                        "PostgreSQL",
                        "MongoDB",
                        "TailwindCSS",
                        "Docker",
                        "NodeJS",
                    ]}
                    twitter="https://twitter.com/sammaji15"
                    linkedin="https://linkedin.com/in/samyabrata-maji"
                    github="https://github.com/sammaji"
                />
            </section>
            <footer className="relative flex flex-col justify-center items-center">
                <Separator className="w-1/5 bg-cyan-900" />
                <div className="flex justify-center items-center py-8 text-sm text-gray-400 font-title">
                    <p>Built by me, ofc&ensp;</p>
                    <p>
                        &copy; <a href="https://x.com/sammaji15">Samyabrata Maji</a>, {new Date().getFullYear()}.
                    </p>
                </div>
            </footer>
        </>
    );
}

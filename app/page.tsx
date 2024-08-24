import AboutMe from "@/components/about-me";
import Experiences from "@/components/experiences";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/projects";
import { siteConfig } from "@/config/site";
import { Separator } from "@radix-ui/react-separator";

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const username = params.username;

//   const url = absoluteUrl('/');
//   const ogUrl = new URL(`${url}/api/og`);
//   ogUrl.searchParams.set('username', username);

//   const user = await prisma.user.findUnique({
//     where: { username },
//     select: {
//       name: true,
//       bio: true,
//     },
//   });

//   if (!user) {
//     return {
//       title: 'Error',
//       description: 'User not found',
//     };
//   }

//   return {
//     title: {
//       absolute: `
//       ${user.name} • ${siteConfig.name}`,
//     },
//     description: `${user.bio}`,
//     metadataBase: new URL(
//       env.NODE_ENV === 'development'
//         ? `http://localhost:3000/${username}`
//         : `https://${siteConfig.url}${username}`
//     ),
//     openGraph: {
//       title: `${user.name} • ${siteConfig.name}`,
//       description: `${user.bio}`,
//       type: 'website',
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: `${user.name} • ${siteConfig.name}`,
//         },
//       ],
//     },
//     twitter: {
//       title: `${user.name} • ${siteConfig.name}`,
//       description: `${user.bio}`,
//       card: 'summary_large_image',
//       images: [ogUrl.toString()],
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     },
//     keywords: [
//       `${user.name}`,
//       `${user.bio}`,
//       'Website',
//       `${siteConfig.name}`,
//       'Developer',
//     ],
//   };
// }

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
                            src: "/images/samscript.png",
                        },
                        {
                            name: "Toy DNS Server",
                            description:
                                "A simple DNS server built on Typescript. Supports recursive resolve.",
                            githubUrl: "https://github.com/sammaji/toy-dns-server",
                            techStack: [],
                            webUrl:
                                "https://github.com/sammaji/toy-dns-server#toy-dns-server",
                            src: "/images/dns-server.png",
                        },
                        {
                            name: "Gasar Project",
                            description:
                                "Admin and internal dashboards for Genetic Assessment and Surveillance of Antibiotic Resistance Study (GASAR) to collect samples from research institutes.",
                            techStack: [],
                            webUrl: "#",
                            src: "/images/gasar.png",
                        },
                        {
                            name: "Digital Dreamers",
                            description: "Landing page for web design agencies.",
                            githubUrl: "https://github.com/sammaji/digitaldreamers.xyz",
                            techStack: [],
                            webUrl: "https://digitaldreamers.xyz",
                            src: "/images/digital-dreamers.png",
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
                    bio="lorem ipsum"
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
                {/*
        {user.projects && user.projects.length > 0 && (
          <FeaturedProjects projects={user.projects} />
        )}
        {user.contributions && user.contributions.length > 0 && (
          <Contributions contributions={user.contributions} />
        )}
        {user.testimonials && user.testimonials.length > 0 && (
          <Testimonials testimonials={user.testimonials} />
        )}
        {user.bio && user.twitterUrl && user.githubUrl && user.linkedinUrl && (
          <AboutMe
            bio={user.bio}
            techStack={user.techStack}
            twitter={user.twitterUrl}
            linkedin={user.linkedinUrl}
            github={user.githubUrl}
          />
        )} */}
                {/* <Footer /> */}
            </section>
            <footer className="relative flex flex-col justify-center items-center">
                <Separator className="w-1/5 bg-cyan-900" />
                <div className="flex justify-center items-center py-8 text-sm text-gray-400 font-title">
                    <p>
                        &copy; {siteConfig.name}, {new Date().getFullYear()}.
                    </p>
                </div>
            </footer>
        </>
    );
}

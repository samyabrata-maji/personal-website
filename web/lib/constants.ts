import * as Icons from "@/components/ui/icons";
import * as ReactIcons from "@icons-pack/react-simple-icons";

export const OSSTAGS = [
  "Feature",
  "Bug",
  "Documentation",
  "Enhancement",
  "Fix",
  "Test",
  "Other",
] as const;

export const workspaceItems = [
  {
    title: "Profile",
    href: "/",
    icon: Icons.User,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: Icons.Projects,
  },
  {
    title: "Experiences",
    href: "/experiences",
    icon: Icons.Building,
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    icon: Icons.Quote,
  },
  {
    title: "Contributions",
    href: "/oss",
    icon: Icons.GITMerge,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Icons.Settings,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: Icons.Analytics,
  },
] as const;

export const tech = [
  { label: "Docker", value: "Docker" },
  { label: "Drizzle", value: "Drizzle" },
  { label: "Express", value: "Express" },
  { label: "Go", value: "Go" },
  { label: "GraphQL", value: "GraphQL" },
  { label: "Kubernetes", value: "Kubernetes" },
  { label: "MongoDB", value: "MongoDB" },
  { label: "MySQL", value: "MySQL" },
  { label: "NestJS", value: "NestJS" },
  { label: "NextJS", value: "NextJS" },
  { label: "PostgreSQL", value: "Postgres" },
  { label: "Prisma", value: "Prisma" },
  { label: "Redis", value: "Redis" },
  { label: "Redux", value: "Redux" },
  { label: "TailwindCSS", value: "Tailwind" },
  { label: "TRPC", value: "tRPC" },
  { label: "Turborepo", value: "Turborepo" },
  { label: "Typescript", value: "Typescript" },
  { label: "Zustand", value: "Zustand" },
] as const;

export const stackl = [
  "Angular",
  "AWS",
  "Bun",
  "CSS",
  "Deno",
  "DigitalOcean",
  "Django",
  "Docker",
  "Drizzle",
  "Express",
  "ESLint",
  "Fastify",
  "Figma",
  "Firebase",
  "Flask",
  "Framer",
  "Gatsby",
  "Go",
  "GraphQL",
  "HTML",
  "JavaScript",
  "Kubernetes",
  "Laravel",
  "MongoDB",
  "MySQL",
  "NestJS",
  "NextJS",
  "NodeJS",
  "NuxtJS",
  "PostgreSQL",
  "Prisma",
  "Python",
  "React",
  "Redis",
  "Rust",
  "Spring",
  "SQLite",
  "Svelte",
  "TailwindCSS",
  "TRPC",
  "TypeScript",
  "Vite",
  "Vue",
  "WebRTC",
] as const;

export const stacks = stackl.map((label) => ({
  label,
  icon: ReactIcons[
    `Si${
      label === "AWS"
        ? "Amazonwebservices"
        : label === "CSS"
          ? "Css3"
          : label === "GraphQL"
            ? "Graphql"
            : label === "HTML"
              ? "Html5"
              : label === "JavaScript"
                ? "Javascript"
                : label === "NodeJS"
                  ? "Nodedotjs"
                  : label === "PostgreSQL"
                    ? "Postgresql"
                    : label === "SQLite"
                      ? "Sqlite"
                      : label === "TypeScript"
                        ? "Typescript"
                        : label === "Vue"
                          ? "Vuedotjs"
                          : label === "WebRTC"
                            ? "Webrtc"
                            : label === "NextJS"
                              ? "Nextdotjs"
                              : label === "NuxtJS"
                                ? "Nuxtdotjs"
                                : label === "TailwindCSS"
                                  ? "Tailwindcss"
                                  : label === "TRPC"
                                    ? "Trpc"
                                    : label === "MongoDB"
                                      ? "Mongodb"
                                      : label === "MySQL"
                                        ? "Mysql"
                                        : label === "NestJS"
                                          ? "Nestjs"
                                          : label === "DigitalOcean"
                                            ? "Digitalocean"
                                            : label === "ESLint"
                                              ? "Eslint"
                                              : label
    }`
  ],
}));

// export const stacks = [
//   { label: 'Angular', icon: SiAngular },
//   { label: 'AWS', icon: SiAmazonaws },
//   { label: 'Bun', icon: SiBun },
//   { label: 'CSS', icon: SiCss3 },
//   { label: 'Deno', icon: SiDeno },
//   { label: 'DigitalOcean', icon: SiDigitalocean },
//   { label: 'Django', icon: SiDjango },
//   { label: 'Docker', icon: SiDocker },
//   { label: 'Drizzle', icon: SiDrizzle },
//   { label: 'ESLint', icon: SiEslint },
//   { label: 'Express', icon: SiExpress },
//   { label: 'Fastify', icon: SiFastify },
//   { label: 'Figma', icon: SiFigma },
//   { label: 'Firebase', icon: SiFirebase },
//   { label: 'Flask', icon: SiFlask },
//   { label: 'Framer', icon: SiFramer },
//   { label: 'Gatsby', icon: SiGatsby },
//   { label: 'Go', icon: SiGo },
//   { label: 'GraphQL', icon: SiGraphql },
//   { label: 'HTML', icon: SiHtml5 },
//   { label: 'JavaScript', icon: SiJavascript },
//   { label: 'Kubernetes', icon: SiKubernetes },
//   { label: 'Laravel', icon: SiLaravel },
//   { label: 'MongoDB', icon: SiMongodb },
//   { label: 'MySQL', icon: SiMysql },
//   { label: 'NestJS', icon: SiNestjs },
//   { label: 'NextJS', icon: SiNextdotjs },
//   { label: 'NodeJS', icon: SiNodedotjs },
//   { label: 'NuxtJS', icon: SiNuxtdotjs },
//   { label: 'PostgreSQL', icon: SiPostgresql },
//   { label: 'Prisma', icon: SiPrisma },
//   { label: 'Python', icon: SiPython },
//   { label: 'React', icon: SiReact },
//   { label: 'Redis', icon: SiRedis },
//   { label: 'Rust', icon: SiRust },
//   { label: 'Spring', icon: SiSpring },
//   { label: 'SQLite', icon: SiSqlite },
//   { label: 'Svelte', icon: SiSvelte },
//   { label: 'TailwindCSS', icon: SiTailwindcss },
//   { label: 'TRPC', icon: SiTrpc },
//   { label: 'TypeScript', icon: SiTypescript },
//   { label: 'Vite', icon: SiVite },
//   { label: 'Vue', icon: SiVuedotjs },
//   { label: 'WebRTC', icon: SiWebrtc },
// ] as const;

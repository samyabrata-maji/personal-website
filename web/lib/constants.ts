import * as Icons from "@/components/ui/icons";

import {
  SiAngular,
  SiAmazonwebservices,
  SiBun,
  SiCss3,
  SiDeno,
  SiDigitalocean,
  SiDjango,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiEslint,
  SiFastify,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFramer,
  SiGatsby,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiSpring,
  SiSqlite,
  SiSvelte,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebrtc,
} from "@icons-pack/react-simple-icons";

/*import { SiAngular } from "@react-icons/all-files/si/SiAngular";
import { SiAmazonwebservices } from "@react-icons/all-files/si/SiAmazonwebservices";
import { SiBun } from "@react-icons/all-files/si/SiBun";
import { SiCSS } from "@react-icons/all-files/si/SiCSS";
import { SiDeno } from "@react-icons/all-files/si/SiDeno";
import { SiDigitalOcean } from "@react-icons/all-files/si/SiDigitalOcean";
import { SiDjango } from "@react-icons/all-files/si/SiDjango";
import { SiDocker } from "@react-icons/all-files/si/SiDocker";
import { SiDrizzle } from "@react-icons/all-files/si/SiDrizzle";
import { SiExpress } from "@react-icons/all-files/si/SiExpress";
import { SiESLint } from "@react-icons/all-files/si/SiESLint";
import { SiFastify } from "@react-icons/all-files/si/SiFastify";
import { SiFigma } from "@react-icons/all-files/si/SiFigma";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { SiFlask } from "@react-icons/all-files/si/SiFlask";
import { SiFramer } from "@react-icons/all-files/si/SiFramer";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { SiGo } from "@react-icons/all-files/si/SiGo";
import { SiGraphQL } from "@react-icons/all-files/si/SiGraphQL";
import { SiHTML } from "@react-icons/all-files/si/SiHTML";
import { SiJavaScript } from "@react-icons/all-files/si/SiJavaScript";
import { SiKubernetes } from "@react-icons/all-files/si/SiKubernetes";
import { SiLaravel } from "@react-icons/all-files/si/SiLaravel";
import { SiMongoDB } from "@react-icons/all-files/si/SiMongoDB";
import { SiMySQL } from "@react-icons/all-files/si/SiMySQL";
import { SiNestJS } from "@react-icons/all-files/si/SiNestJS";
import { SiNextJS } from "@react-icons/all-files/si/SiNextJS";
import { SiNodeJS } from "@react-icons/all-files/si/SiNodeJS";
import { SiNuxtJS } from "@react-icons/all-files/si/SiNuxtJS";
import { SiPostgreSQL } from "@react-icons/all-files/si/SiPostgreSQL";
import { SiPrisma } from "@react-icons/all-files/si/SiPrisma";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiRedis } from "@react-icons/all-files/si/SiRedis";
import { SiRust } from "@react-icons/all-files/si/SiRust";
import { SiSpring } from "@react-icons/all-files/si/SiSpring";
import { SiSQLite } from "@react-icons/all-files/si/SiSQLite";
import { SiSvelte } from "@react-icons/all-files/si/SiSvelte";
import { SiTailwindCSS } from "@react-icons/all-files/si/SiTailwindCSS";
import { SiTRPC } from "@react-icons/all-files/si/SiTRPC";
import { SiTypeScript } from "@react-icons/all-files/si/SiTypeScript";
import { SiVite } from "@react-icons/all-files/si/SiVite";
import { SiVue } from "@react-icons/all-files/si/SiVue";
import { SiWebRTC } from "@react-icons/all-files/si/SiWebRTC";*/

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

export const stacks = [
  { label: "Angular", icon: SiAngular },
  { label: "AWS", icon: SiAmazonwebservices },
  { label: "Bun", icon: SiBun },
  { label: "CSS", icon: SiCss3 },
  { label: "Deno", icon: SiDeno },
  { label: "DigitalOcean", icon: SiDigitalocean },
  { label: "Django", icon: SiDjango },
  { label: "Docker", icon: SiDocker },
  { label: "Drizzle", icon: SiDrizzle },
  { label: "Express", icon: SiExpress },
  { label: "ESLint", icon: SiEslint },
  { label: "Fastify", icon: SiFastify },
  { label: "Figma", icon: SiFigma },
  { label: "Firebase", icon: SiFirebase },
  { label: "Flask", icon: SiFlask },
  { label: "Framer", icon: SiFramer },
  { label: "Gatsby", icon: SiGatsby },
  { label: "Go", icon: SiGo },
  { label: "GraphQL", icon: SiGraphql },
  { label: "HTML", icon: SiHtml5 },
  { label: "JavaScript", icon: SiJavascript },
  { label: "Kubernetes", icon: SiKubernetes },
  { label: "Laravel", icon: SiLaravel },
  { label: "MongoDB", icon: SiMongodb },
  { label: "MySQL", icon: SiMysql },
  { label: "NestJS", icon: SiNestjs },
  { label: "NextJS", icon: SiNextdotjs },
  { label: "NodeJS", icon: SiNodedotjs },
  { label: "NuxtJS", icon: SiNuxtdotjs },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Prisma", icon: SiPrisma },
  { label: "Python", icon: SiPython },
  { label: "React", icon: SiReact },
  { label: "Redis", icon: SiRedis },
  { label: "Rust", icon: SiRust },
  { label: "Spring", icon: SiSpring },
  { label: "SQLite", icon: SiSqlite },
  { label: "Svelte", icon: SiSvelte },
  { label: "TailwindCSS", icon: SiTailwindcss },
  { label: "TRPC", icon: SiTrpc },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Vite", icon: SiVite },
  { label: "Vue", icon: SiVuedotjs },
  { label: "WebRTC", icon: SiWebrtc },
] as const;

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

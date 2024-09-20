import Link from "next/link";

type NavProps = {
  experiences: boolean | undefined;
  contributions: boolean | undefined;
  testimonials: boolean | undefined;
  projects: boolean | undefined;
};

export default function Nav({
  contributions,
  experiences,
  projects,
  testimonials,
}: NavProps) {
  return (
    <nav className="xl:flex gap-6 text-md hidden">
      <Link
        className="font-bold hover:bg-slate-300/10 rounded-lg py-2 px-4 transition-colors duration-200"
        href="#about"
      >
        About
      </Link>
      {experiences && (
        <Link
          className="font-bold hover:bg-slate-300/10 rounded-lg py-2 px-4 transition-colors duration-200"
          href="#experience"
        >
          Experience
        </Link>
      )}
      {contributions && (
        <Link
          className="font-bold hover:bg-slate-300/10 rounded-lg py-2 px-4 transition-colors duration-200"
          href="#contributions"
        >
          Open Source
        </Link>
      )}
      {testimonials && (
        <Link
          className="font-bold hover:bg-slate-300/10 rounded-lg py-2 px-4 transition-colors duration-200"
          href="#testimonials"
        >
          Testimonials
        </Link>
      )}
      {projects && (
        <Link
          className="font-bold hover:bg-slate-300/10 rounded-lg py-2 px-4 transition-colors duration-200"
          href="#projects"
        >
          Projects
        </Link>
      )}
      <Link
        className="font-bold hover:bg-slate-300/10 rounded-lg py-2 px-4 transition-colors duration-200"
        href="#contact"
      >
        Contact
      </Link>
    </nav>
  );
}

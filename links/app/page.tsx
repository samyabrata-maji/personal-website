import LinkButton from '@/ui/LinkButton';

export default function Page() {
  return (
    <div className="py-10">
      <h1 className="flex select-none items-center justify-center py-4 text-3xl font-black leading-relaxed text-white">
        My Socials ✨
      </h1>
      <div className="flex flex-col content-center items-center gap-6 px-6 py-4">
        <LinkButton>Github</LinkButton>
        <LinkButton>Twitter</LinkButton>
        <LinkButton>Linkedin</LinkButton>
        <LinkButton>Blogs</LinkButton>
      </div>
    </div>
  );
}

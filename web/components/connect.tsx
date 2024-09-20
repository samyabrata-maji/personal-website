import * as Icons from "@/components/ui/icons";
import Link from "next/link";

type Props = {
  twitter: string;
  linkedin: string;
  github: string;
};

const Connect = ({ twitter, linkedin, github }: Props) => {
  return (
    <div className="flex flex-col gap-6 rounded-xl p-4 shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <Icons.Link className="h-[18px] w-[18px]" />
        <h2 className="text-sm font-title">Connect</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 h-full">
        {[twitter, linkedin, github].map((link, i) => {
          return (
            <Link
              key={i}
              href={link}
              className="inline-flex animate-background-shine min-h-[160px] w-full items-center justify-center rounded-xl text-sm border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 transition-colors"
            >
              <div className="flex flex-col gap-2 opacity-90">
                {i === 0 && (
                  <Icons.Twitter className="sm:h-10 sm:w-10 md:h-6 md:w-6" />
                )}
                {i === 1 && (
                  <Icons.LinkedIn className="sm:h-10 sm:w-10 md:h-6 md:w-6" />
                )}
                {i === 2 && (
                  <Icons.Github className="sm:h-10 sm:w-10 md:h-6 md:w-6" />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;

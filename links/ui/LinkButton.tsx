import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkButton({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[48px] w-[100%] items-center justify-center rounded-md from-[#09C6F9] to-[#045DE9] p-[1px] hover:bg-yellow-400">
      <div className="flex h-[100%] w-[100%] items-center justify-center rounded-md bg-black">
        <Link
          href={'https://github.com/samyabrata-maji'}
          target="_blank"
          className="tracking-widest text-white"
        >
          {children}
        </Link>
      </div>
    </div>
  );
}

import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen h-full w-screen flex items-center justify-center">
      <div className="max-w-[800px] w-screen min-h-screen flex flex-col gap-[64px]">
        <div className="flex flex-col">
          <h1 className="text-[36px] leading-[1.2em] font-medium">my work.</h1>
          <p className="text-[18px] leading-[1.6em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <Separator orientation="horizontal" className="opacity-[0.24]" color="rgba(225,225,225,0.24)" />

        <div className="flex flex-col">
          <div className="flex justify-between">
            <p>Venus Technology</p>
            <div className="flex flex-col items-end">
              <p>Full Stack Developer</p>
              <p>Dec 23 - Present</p>
            </div>
          </div>

          <div>
            <p className="text-[18px] leading-[1.6em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
                <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

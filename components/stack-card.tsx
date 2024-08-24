"use client";

import { Marquee } from "@/components/ui/marquee";

import * as Icons from "@/components/ui/icons";
import { stackl, stacks as stacksArr } from "@/lib/constants";

type Props = {
  stacks: Array<(typeof stackl)[number]>;
};

const StacksCard = ({ stacks }: Props) => {
  const firstHalf = stacksArr
    .filter((stack, i) => stacks.includes(stack.label))
    .slice(0, Math.ceil(stacks.length / 2));
  const secondHalf = stacksArr
    .filter((stack, i) => stacks.includes(stack.label))
    .slice(Math.ceil(stacks.length / 2), stacks.length);

  return (
    <div className="flex flex-col gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card-dark lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icons.Layers className="h-[18px] w-[18px]" />
          <h2 className="text-sm font-title">Stacks</h2>
        </div>
        <p className="text-xs text-slate-400">Hover for tooltip</p>
      </div>
      <Marquee
        fade
        gap="20px"
        pauseOnHover
        className="py-4 mt-4 cursor-pointer"
      >
        {firstHalf.length > 10
          ? firstHalf.map((stack, i) => {
              const Icon = stack.icon;
              return <Icon key={stack.label} className="h-7 w-7 opacity-70" />;
            })
          : [...firstHalf, ...firstHalf].map((stack, i) => {
              const Icon = stack.icon;
              return (
                <Icon key={Math.random()} className="h-7 w-7 opacity-70" />
              );
            })}
      </Marquee>
      <Marquee
        gap="20px"
        className="py-4 cursor-pointer"
        reverse
        fade
        pauseOnHover
      >
        {secondHalf.length > 10
          ? secondHalf.map((stack, i) => {
              const Icon = stack.icon;
              return <Icon key={stack.label} className="h-7 w-7 opacity-70" />;
            })
          : [...secondHalf, ...secondHalf].map((stack, i) => {
              const Icon = stack.icon;
              return (
                <Icon key={Math.random()} className="h-7 w-7 opacity-70" />
              );
            })}
      </Marquee>
    </div>
  );
};

export default StacksCard;

import React from "react";
import Section from "./section";
import { TypographyH2, TypographyP } from "./typography";
import { Separator } from "./ui/separator";

export type EducationProps = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
};

export function EducationCard(props: EducationProps) {
  const { school, degree, startDate, endDate } = props;
  return (
    <div className="grid grid-cols-[1fr_auto] max-sm:grid-cols-1 max-sm:grid-rows-[auto_auto] gap-8 max-sm:gap-2">
      <TypographyP>
        <b>{degree}</b>
        {`, ${school}`}
      </TypographyP>
      <TypographyP>{`${startDate} - ${endDate || ""}`}</TypographyP>
    </div>
  );
}

export default function EducationSection() {
  return (
    <div className="flex flex-col gap-4 w-[100%]">
      <TypographyH2 className="border-b-0">Education 📖</TypographyH2>
      <EducationCard
        degree="B.Tech. Computer Science and Engineering"
        school="Maulana Abul Kalam Azad University Of Technology, West Bengal"
        startDate="Sept. 2022"
        endDate="Present"
      />
      <Separator orientation="horizontal" className="w-[100%]" />
      <EducationCard
        degree="Higher Secondary Education"
        school="St. Patricks Higher Secondary School, Asansol"
        startDate="Apr. 2008"
        endDate="Apr. 2022"
      />
    </div>
  );
}

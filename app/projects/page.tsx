import ProjectCardSection, {
  ProjectCardSectionExpanded,
} from "@/components/project-card-section";
import React from "react";

export default function PageProjects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-16 px-36 py-8 max-md:px-16 max-sm:px-4">
      <ProjectCardSectionExpanded />
    </main>
  );
}

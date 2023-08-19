"use client";

import {
  Gitgraph,
  MergeStyle,
  TemplateName,
  templateExtend,
} from "@gitgraph/react";

export function getStyledCommit(subject: string) {
  return {
    subject,
    style: {
      dot: {
        size: 4,
      },
    },
  };
}

export default function Journey() {
  return (
    <Gitgraph
      options={{
        template: templateExtend(TemplateName.Metro, {
          // colors: ["red", "green", "orange"],
        }),
      }}
    >
      {(gitgraph) => {
        const master = gitgraph.branch({
          name: "master",
          style: {
            lineWidth: 1,
          },
        });
        master.commit("Init the project");
        master.commit(getStyledCommit("New feature"));
        master
          .commit("Add README")
          .commit("Add tests")
          .commit("Implement feature");
        master.tag("v1.0");
        const newFeature = gitgraph.branch("new-feature");
        newFeature.commit("Implement an awesome feature");
        master.commit("Hotfix a bug");
        newFeature.commit("Fix tests");
        // Merge `newFeature` into `master`
        master.merge(newFeature, "Release new version");
      }}
    </Gitgraph>
  );
}

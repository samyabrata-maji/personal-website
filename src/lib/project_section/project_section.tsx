import { Box, Flex, SimpleGrid } from "@mantine/core";
import Heading from "../Heading/heading";
import { PROJECT_DATA } from "./project.data";
import ProjectCard from "./project_card";

export default function ProjectSection() {
  return (
    <Box m={"2.5%"} mt={"8%"}>
      <Heading>Projects</Heading>
      <Flex align={"center"} justify={"center"}>
      <SimpleGrid cols={3}>
        {PROJECT_DATA.map((project_data, index) => {
          return <ProjectCard key={index} data={project_data} />;
        })}
      </SimpleGrid>
      </Flex>
    </Box>
  );
}

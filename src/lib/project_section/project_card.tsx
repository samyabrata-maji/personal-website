import { Card, Image, Text } from "@mantine/core";
import { ProjectData } from "./project.types";

export default function ProjectCard({ data }: { data: ProjectData }) {

  return (
    <Card shadow="sm" sx={{width: "auto"}}>
      <Card.Section>
        <Image src={data.imageUrl} height={8/16*300} width={300} alt="No way!" />
      </Card.Section>

      <Text weight={500} size="lg" mt="md" lineClamp={2}>
        {data.title}
      </Text>

      <Text mt="xs" color="dimmed" size="sm" lineClamp={4}>
        {data.description}
      </Text>
    </Card>
  );
}

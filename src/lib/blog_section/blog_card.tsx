import { Card, Image, Text } from "@mantine/core";
import { BlogProps } from "./blog.types";

export default function BlogCard({ data }: { data: BlogProps }) {
  return (
    <Card shadow="sm">
      <Card.Section>
        <Image src={data.coverImage} alt="No way!" />
      </Card.Section>

      <Text weight={500} size="lg" mt="md" lineClamp={2}>
        {data.title}
      </Text>

      <Text mt="xs" color="dimmed" size="sm" lineClamp={4}>
        {data.contentMarkdown}
      </Text>
    </Card>
  );
}

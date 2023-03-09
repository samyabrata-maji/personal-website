import { Container, Grid, Text, Image, Title } from "@mantine/core";
import { ContactModalButton } from "../modal/contact_modal_button";

export default function About() {
  return (
    <Container size={"xl"} pl={"20%"} pr={"20%"} mt={"10%"} mb={"10%"}>
      <Grid>
        <Grid.Col span="auto" mr={"5%"}>
          <Title order={1}>Samyabrata Maji</Title>
          <Text mt="xs" mb="xl" color="dimmed" size="sm" lineClamp={4}>
            Hi there! My name is Samyabrata Maji and I am a web developer,
            technical blogger, UI/UX designer, and student of computer science.
            In my free time, I enjoy exploring new technologies and working on
            personal projects.
          </Text>
          <ContactModalButton>Say Hello</ContactModalButton>
        </Grid.Col>

        <Grid.Col span="content" ml={"5%"}>
          <Image
            height={200}
            width={200}
            radius="sm"
            alt="Profile picture of Samybrata Maji"
            src="https://avatars.githubusercontent.com/u/116789799?s=400&u=88ebae0d9706cc7576ce71128ff4c740fa4bacdc&v=4"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

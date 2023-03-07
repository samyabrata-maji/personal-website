import { Container, Grid, Text, Image, Title } from "@mantine/core";
import { ContactModalButton } from "../modal/contact_modal_button";

export default function About() {
  return (
    <Container size={"xl"} pl={"20%"} pr={"20%"} mt={"10%"} mb={"10%"}>
      <Grid>
        <Grid.Col span="auto" mr={"5%"}>
          <Title order={1}>Samyabrata Maji</Title>
          <Text mt="xs" mb="xl" color="dimmed" size="sm" lineClamp={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <ContactModalButton>Say Hello</ContactModalButton>
        </Grid.Col>

        <Grid.Col span="content" ml={"5%"}>
          <Image
            height={200}
            width={200}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/116789799?s=400&u=88ebae0d9706cc7576ce71128ff4c740fa4bacdc&v=4"
          ></Image>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

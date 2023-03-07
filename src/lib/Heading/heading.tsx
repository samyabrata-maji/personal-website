import { Title } from "@mantine/core";
import { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <>
      <center>
        <Title order={1} m={"xl"}>
          {children}
        </Title>
      </center>
    </>
  );
}

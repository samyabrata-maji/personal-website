import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Group,
  Button,
  Autocomplete,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useState } from "react";

export function ContactModalButton({ children }: { children: string }) {

  const [opened, { open, close }] = useDisclosure(false);

  const [value, setValue] = useState<string>("");

  const data =
    value.trim().length > 0 && !value.includes("@")
      ? ["gmail.com", "outlook.com", "yahoo.com"].map(
          (provider) => `${value}@${provider}`
        )
      : [];

  return (
    <>
      <Modal opened={opened} onClose={close} title="Reach out to me!!" centered>
        <TextInput
          my={16}
          label={"Your name"}
          placeholder={"Enter your full name"}
        />

        <Autocomplete
          my={16}
          value={value}
          onChange={setValue}
          data={data}
          label="Your e-mail"
          placeholder="Enter your email"
        />

        <Textarea
          my={16}
          label={"Ask me anything"}
          placeholder="Do you have any queries? Go ahead, ask me anything!"
        />
        <Button my={16}>Send</Button>
      </Modal>

      <Group position="left">
        <Button onClick={open}>{children}</Button>
      </Group>
    </>
  );
}

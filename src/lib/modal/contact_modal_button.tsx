import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Group,
  Button,
  Autocomplete,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type MailProps = { from_name: string; from_email: string; message: string };

function sendMail(options: MailProps) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_KEY,
    import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
    options
  );
}

export function ContactModalButton({ children }: { children: string }) {
  const [opened, { open, close }] = useDisclosure(false);

  const [emailInput, setEmailInput] = useState<string>("");

  /* for loading effects */
  const [isLoading, setLoading] = useState<boolean>(false);
  const [sendButtonMessage, setSendButtonMessage] = useState<string>("Send");

  const nameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const messageRef = useRef<HTMLTextAreaElement>(null!);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const clickHandler = (event: any) => {
    event.preventDefault();

    setLoading(true);
    setSendButtonMessage("Sending...");

    sendMail({
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      message: messageRef.current.value,
    })
      .then(() => {
        setLoading(false);
        setSendButtonMessage("Message Sent!");
      })
      .catch(() => {
        // todo: setup error handler
      });
  };

  const data =
    emailInput.trim().length > 0 && !emailInput.includes("@")
      ? ["gmail.com", "outlook.com", "yahoo.com"].map(
          (provider) => `${emailInput}@${provider}`
        )
      : [];

  return (
    <>
      <Modal opened={opened} onClose={close} title="Reach out to me!!" centered>
        <TextInput
          required
          my={16}
          ref={nameRef}
          label={"Your name"}
          placeholder={"Enter your full name"}
        />

        <Autocomplete
          my={16}
          ref={emailRef}
          required
          value={emailInput}
          onChange={setEmailInput}
          data={data}
          label="Your e-mail"
          placeholder="Enter your email"
        />

        <Textarea
          required
          ref={messageRef}
          my={16}
          label={"Ask me anything"}
          placeholder="Do you have any queries? Go ahead, ask me anything!"
        />
        <Button my={16} disabled={isLoading} onClick={clickHandler}>
          {sendButtonMessage}
        </Button>
      </Modal>

      <Group position="left">
        <Button onClick={open}>{children}</Button>
      </Group>
    </>
  );
}

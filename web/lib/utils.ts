import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return toast.error(errors.join("\n"));
  } else if (err instanceof Error) {
    return toast.error(err.message);
  } else {
    return toast.error("Something went wrong, please try again later.");
  }
}

export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  },
) {
  return new Intl.DateTimeFormat("en-US", {
    ...options,
  }).format(new Date(date));
}

export function manualDialogClose() {
  document.getElementById("dialog-close")?.click();
}

export function getInitials(name: string) {
  const words = name.split(" ");
  const firstNameInitial = words[0] ? words[0][0] : "";
  const lastNameInitial = words.length > 1 ? words[words.length - 1][0] : "";

  return `${firstNameInitial}${lastNameInitial}`;
}

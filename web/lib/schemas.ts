import { z } from "zod";
import { stackl } from "./constants";

export const profileFormSchema = z.object({
  displayName: z
    .string()
    .min(2, {
      message: "displayName must be at least 2 characters.",
    })
    .max(30, {
      message: "displayName must not be longer than 30 characters.",
    }),
  username: z
    .string()
    .regex(/^[a-zA-Z0-9_]+$/, {
      message:
        "Username must only contain alphanumeric characters and underscores.",
    })
    .min(1, {
      message: "Username must not be empty.",
    })
    .max(25, {
      message: "Username must not be longer than 25 characters.",
    })
    .refine((val) => val !== "dashboard", {
      message: "This is not a valid username",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  techStack: z.array(z.enum(stackl)).default([]),
  githubUrl: z.string().url({ message: "Please enter a valid URL." }),
  twitterUrl: z.string().url({ message: "Please enter a valid URL." }),
  linkedinUrl: z.string().url({ message: "Please enter a valid URL." }),
  oneLiner: z.string().min(1).max(100),
  bio: z.string().max(500, {
    message: "Max character length (500) exceeded.",
  }),
});

export const projectSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1).max(200),
  githubUrl: z.string().url(),
  webUrl: z.string().url(),
  techStack: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "All Tech must be unique",
    }),
});

export const extendedProjectSchema = projectSchema.extend({
  userId: z.string(),
});

export const experienceSchema = z.object({
  position: z
    .string()
    .min(1, {
      message: "Position must be between 1 and 25 characters",
    })
    .max(25, {
      message: "Position must be between 1 and 25 characters",
    }),
  description: z
    .string()
    .min(1, {
      message: "Description must be between 1 and 1800 characters",
    })
    .max(1800, {
      message: "Description must be between 1 and 1800 characters",
    })
    .optional(),
  orgName: z
    .string()
    .min(1, {
      message: "Organization name must be between 1 and 25 characters",
    })
    .max(25, {
      message: "Organization name must be between 1 and 25 characters",
    }),
  orgUrl: z
    .string()
    .min(1, {
      message: "Please enter a valid URL.",
    })
    .url({
      message: "Please enter a valid URL.",
    }),
  startDate: z.date({
    required_error: "A starting date is missing.",
  }),
  endDate: z.date().optional(),
});

export const extendedExperienceSchema = experienceSchema.extend({
  userId: z.string(),
});

export const ossSchema = z.object({
  orgName: z.string().min(1).max(200),
  orgUrl: z.string().url().min(1, {
    message: "Org URL cannot be empty",
  }),
  description: z
    .string()
    .min(1, {
      message: "Description cannot be empty",
    })
    .max(400, {
      message: "Description should not exceed 400 characters",
    }),
  tags: z.array(
    z.enum([
      "Feature",
      "Bug",
      "Enhancement",
      "Documentation",
      "Chore",
      "Test",
      "Fix",
      "Other",
    ]),
  ),
  url: z.string().url({
    message: "Please enter a valid URL",
  }),
});

export const extendedOssSchema = ossSchema.extend({
  userId: z.string(),
});

export const testimonialSchema = z.object({
  author: z
    .string()
    .min(1, {
      message: "Author must be between 1 and 14 characters",
    })
    .max(14, {
      message: "Author must be between 1 and 14 characters",
    }),
  designation: z
    .string()
    .min(1, {
      message: "Designation must be between 1 and 50 characters",
    })
    .max(50, {
      message: "Designation must be between 1 and 50 characters",
    }),
  authorUrl: z
    .string()
    .min(1, {
      message: "Please enter a valid URL for the author",
    })
    .url({
      message: "Please enter a valid URL for the author",
    }),
  message: z
    .string()
    .min(1, {
      message: "Message must be between 1 and 350 characters",
    })
    .max(350, {
      message: "Message must be between 1 and 350 characters",
    }),
});

export const extendedTestimonialSchema = testimonialSchema.extend({
  userId: z.string(),
});

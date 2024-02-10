"use client";

import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function Page() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = 
    (data: FieldValues) => {
      fetch(
        "/api/form/send_message",
        {
          method: "POST",
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message
          }),
        },
      )
        .then(res => {
          if (!res.ok) throw new Error("Failed to create entry.")
          return res.json()
        })
        .then(() => toast({description: "Sent successfully!"}))
        .catch(() => toast({description: "Failed to send!", variant: "destructive"}))
        .finally(() => reset())
    }

  return (
    <div className="bg-black text-white min-h-screen h-full w-auto p-8 flex items-center justify-center">
      <div className="max-w-[800px] w-screen min-h-screen flex flex-col gap-[64px]">
        <nav className="flex w-full gap-8 max-sm:gap-4">
          <a href="/blogs" className="hover:underline">
            Blog.
          </a>
          <a href="/work" className="hover:underline">
            Work.
          </a>
          <a href="/contact" className="hover:underline">
            Contact.
          </a>
        </nav>

        <div className="flex flex-col gap-8 flex-grow">
          <h1 className="text-4xl font-semibold tracking-tight">say hi.</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-[320px] gap-6"
          >
            <div>
              <input
                {...register("name", { required: "Name is required." })}
                className={cn(
                  "w-full px-8 py-2 bg-[rgb(31,32,35)] rounded-lg outline-none focus:ring-2",
                  errors.email ? "focus:ring-[#ff3333]" : "focus:ring-blue-400",
                )}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-[#ff3333]">
                  {errors.name.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value:
                      /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                    message: "Please enter a valid email.",
                  },
                })}
                className={cn(
                  "w-full px-8 py-2 bg-[rgb(31,32,35)] rounded-lg outline-none focus:ring-2",
                  errors.email ? "focus:ring-[#ff3333]" : "focus:ring-blue-400",
                )}
                placeholder="Your email"
              />
              {errors.email && (
                <p className="mt-2 text-[#ff3333]">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("message", {
                  required: "Message is required",
                })}
                className={cn(
                  "w-full px-8 py-4 bg-[rgb(31,32,35)] rounded-lg",
                  "outline-none focus:ring-2 focus:ring-blue-400",
                )}
                placeholder="Message"
              />
              {errors.message && (
                <p className="mt-2 text-[#ff3333]">
                  {errors.message.message?.toString()}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-fit px-8 py-2 rounded-lg bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

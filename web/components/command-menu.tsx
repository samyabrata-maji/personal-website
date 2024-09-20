"use client";

import { Button } from "@/components/ui/button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import * as Icons from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { toast } from "sonner";
import { useCopyToClipboard } from "@/components/utils/use-clipboard";

type Groups = Array<{
    name: string;
    actions: Array<{
        title: string;
        icon: React.ReactNode;
        onSelect: () => void | Promise<void>;
    }>;
}>;

export default function CommandMenu({
    twitter,
    linkedIn,
    github,
}: {
    twitter: string;
    linkedIn: string;
    github: string;
}) {
    const [open, setOpen] = React.useState(false);
    const [copy] = useCopyToClipboard();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((value) => !value);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const openLink = React.useCallback((url: string) => {
        setOpen(false);
        window.open(url, "_blank", "noopener");
    }, []);

    const groups: Groups = [
        {
            name: "General",
            actions: [
                {
                    title: "Copy Link",
                    icon: <Icons.Link className="mr-3 h-4 w-4" />,
                    onSelect: async () => {
                        setOpen(false);
                        await copy({
                            text: window.location.href,
                        });
                    },
                },
            ],
        },
        {
            name: "Links",
            actions: [
                {
                    title: "GitHub",
                    icon: <Icons.Github className="mr-3 h-4 w-4" />,
                    onSelect: () => {
                        github.length > 0
                            ? openLink(github)
                            : toast.error("No GitHub link found");
                    },
                },
                {
                    title: "Linkedin",
                    icon: <Icons.LinkedIn className="mr-3 h-4 w-4" />,
                    onSelect: () => {
                        linkedIn.length > 0
                            ? openLink(linkedIn)
                            : toast.error("No LinkedIn link found");
                    },
                },
                {
                    title: "Twitter",
                    icon: <Icons.Twitter className="mr-3 h-4 w-4" />,
                    onSelect: () => {
                        twitter.length > 0
                            ? openLink(twitter)
                            : toast.error("No Twitter link found");
                    },
                },
            ],
        },
    ];

    return (
        <>
            <Button
                variant={"ghost"}
                className="h-9 w-9 p-0"
                onClick={() => setOpen(true)}
                type="button"
                aria-label="Open command menu"
            >
                <span className="sr-only">Open command menu</span>
                <Icons.Command className="h-4 w-4" />
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {groups.map((group, i) => (
                        <React.Fragment key={group.name}>
                            <CommandGroup heading={group.name}>
                                {group.actions.map((action) => (
                                    <CommandItem
                                        className="cursor-pointer"
                                        key={action.title}
                                        onSelect={action.onSelect}
                                    >
                                        {action.icon}
                                        {action.title}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            {i !== groups.length - 1 && (
                                <CommandSeparator className="space-y-1" />
                            )}
                        </React.Fragment>
                    ))}
                    <Separator />
                    <CommandGroup
                        className="flex justify-center items-center"
                        heading={`Samyabrata Maji, ${new Date().getUTCFullYear()}`}
                    />
                </CommandList>
            </CommandDialog>
        </>
    );
}

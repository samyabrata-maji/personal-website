import * as Icons from "@/components/ui/icons";
import { MonitorIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-4 w-4 p-0"
          aria-label="Toggle theme"
        >
          <span className="sr-only">Toggle theme</span>
          <Icons.Sun className="h-4 w-4 dark:hidden text-foreground" />
          <Icons.Moon className="hidden h-4 w-4 dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="text-secondary-foreground">
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("light")}>
          <Icons.Sun className="h-[18px] w-[18px]" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-[18px] w-[18px]" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("system")}>
          <MonitorIcon className="h-[18px] w-[18px]" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;

"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { DarkModeIcon, LightModeIcon } from "@/assets";

const SwitchMode = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return theme === "dark" ? (
    <Button
      radius="full"
      isIconOnly
      aria-label="lightMode"
      className="bg-transparent"
      onClick={() => setTheme("light")}
    >
      <LightModeIcon className="text-white size-4" />
    </Button>
  ) : (
    <Button
      radius="full"
      isIconOnly
      aria-label="darkMode"
      className="bg-transparent"
      onClick={() => setTheme("dark")}
    >
      <DarkModeIcon className="text-black size-4" />
    </Button>
  );
};

export default SwitchMode;

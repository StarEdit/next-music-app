"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
};

export default Providers;

"use client";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store/theme";
import React from "react";
import { TbH1 } from "react-icons/tb";

export default function Page() {
  const setTheme = useThemeStore((state: any) => state.setTheme);
  const themeSelect = useThemeStore((state: any) => state.themeSelect);
  return <div>
    <h1>{themeSelect}</h1>
    <Button onClick={() => setTheme(1)}>1</Button>
    <Button onClick={() => setTheme(2)}>2</Button>
    <Button onClick={() => setTheme(3)}>3</Button>
  </div>;
}

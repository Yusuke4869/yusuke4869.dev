import { useEffect, useState } from "react";

import { LightIcon, DarkIcon } from "../icons";

import type { FC } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

  // テーマが設定されていない場合、システムのテーマに合わせる
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeToggleButton: FC = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  };

  return (
    <button aria-label="テーマを切り替える" className="rounded-full p-2 text-2xl" onClick={toggleTheme} type="button">
      {theme === "dark" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default ThemeToggleButton;

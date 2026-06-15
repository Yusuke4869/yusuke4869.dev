import { useState } from "react";

import { LightIcon, DarkIcon } from "../icons";

import type { FC } from "react";

type Theme = "light" | "dark";

const getCurrentTheme = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light");

const ThemeToggleButton: FC = () => {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      aria-label="テーマを切り替える"
      aria-pressed={theme === "dark"}
      className="cursor-pointer rounded-full p-2 text-2xl"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "dark" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default ThemeToggleButton;

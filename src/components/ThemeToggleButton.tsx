import { useEffect, useState } from "react";

import { LightIcon, DarkIcon } from "~/icons";

import type { FC } from "react";

type Theme = "light" | "dark";

const ThemeToggleButton: FC = () => {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      // テーマが設定されていない場合、システムのテーマに合わせる
      (typeof savedTheme !== "string" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      setTheme("dark");
    else setTheme("light");
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button type="button" onClick={toggleTheme} className="rounded-full p-2 text-2xl" aria-label="テーマを切り替える">
      {theme === "dark" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default ThemeToggleButton;

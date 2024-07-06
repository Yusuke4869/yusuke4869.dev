import { useEffect, useState } from "react";

import { LightIcon, DarkIcon } from "~/icons";

type Theme = "light" | "dark";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    if (
      (typeof localStorage.getItem("theme") === "string" && localStorage.getItem("theme") === "dark") ||
      // 初期表示時にmatchMediaに合わせる
      (typeof window.localStorage.getItem("theme") !== "string" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
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
    <button type="button" onClick={toggleTheme} className="rounded-full p-2 text-2xl" aria-label="テーマ変更">
      {theme === "dark" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default ThemeToggleButton;

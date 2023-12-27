import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme : dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  });

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  }

  return { theme, toggleTheme };
};

export default useTheme;

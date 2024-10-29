import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;
  // const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // darkQuery.addEventListener("change", (e) => {
  //   if (!localStorage.getItem("theme")) {
  //     setTheme(e.matches ? "light" : "dark");
  //   }
  // });

  return { theme, toggleTheme };
};

export default useDarkMode;

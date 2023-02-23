import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./contexts/theme-context";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    let app = document.getElementsByClassName("App")[0];

    switch (theme) {
      case themes.dark:
        localStorage.setItem('theme', theme);
        app.classList.add("dark-content");
        app.classList.remove("white-content");
        break;
      case themes.light:
        localStorage.setItem('theme', theme);
        app.classList.remove("dark-content");
        app.classList.add("white-content");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

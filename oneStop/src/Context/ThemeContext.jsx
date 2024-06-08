import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  let defaultTheme=localStorage.getItem('theme')|| dark
  const [theme, setTheme] = useState(defaultTheme);
  function handleTheme() {
    setTheme(theme == "dark" ? "light" : "dark");
  }
  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside the ThemeProvider");
  return context;
}

export { useTheme };

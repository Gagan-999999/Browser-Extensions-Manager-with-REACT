import { useContext } from "react";
import { ExtensionContext } from "../contexts/ExtensionsContext";

function useExtensions() {
  const context = useContext(ExtensionContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside the ThemeProvider");
  return context;
}

export { useExtensions };

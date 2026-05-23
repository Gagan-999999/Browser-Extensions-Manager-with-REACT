import AppHeader from "./components/AppHeader";
import Main from "./components/Main";
import { ExtensionProvider } from "./contexts/ExtensionsContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ExtensionProvider>
      <ThemeProvider>
        <AppHeader />
        <Main />
      </ThemeProvider>
    </ExtensionProvider>
  );
}

export default App;

import { useTheme } from "../hooks/useTheme";
import styles from "./AppHeader.module.css";

function AppHeader() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className={styles.header}>
      <a href="/" aria-label="Go to homepage">
        {isDark ? (
          <img
            src="logo-dark-theme.svg"
            alt=""
            aria-hidden="true"
            width={179}
            height={41}
          />
        ) : (
          <img
            src="logo-light-theme.svg"
            alt=""
            aria-hidden="true"
            width={179}
            height={41}
          />
        )}
      </a>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        <img
          src={`icon-${isDark ? "sun" : "moon"}.svg`}
          alt=""
          aria-hidden="true"
        />
      </button>
    </header>
  );
}

export default AppHeader;

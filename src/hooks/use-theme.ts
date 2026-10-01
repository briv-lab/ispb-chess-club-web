import { useEffect, useState } from "react";

export type ThemeMode = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";
const storageKey = "ispb-theme";

function readMode(): ThemeMode {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* Theme still works when browser storage is unavailable. */
  }
  return "system";
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  return mode === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : mode;
}

function applyTheme(theme: ResolvedTheme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#161f1a" : "#f7f6ef");
}

export function useTheme() {
  // Stable initial state keeps the static HTML and hydration identical.
  const [mode, setMode] = useState<ThemeMode>("system");
  const [theme, setTheme] = useState<ResolvedTheme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedMode = readMode();
    const resolved = resolveTheme(savedMode);
    setMode(savedMode);
    setTheme(resolved);
    applyTheme(resolved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => {
      const resolved = resolveTheme(mode);
      applyTheme(resolved);
      setTheme(resolved);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [mode, ready]);

  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) setMode(readMode());
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function chooseTheme(next: ThemeMode) {
    try {
      if (next === "system") localStorage.removeItem(storageKey);
      else localStorage.setItem(storageKey, next);
    } catch {
      /* Keep the current session usable without persistence. */
    }
    document.documentElement.classList.add("theme-transition");
    setMode(next);
    const resolved = resolveTheme(next);
    applyTheme(resolved);
    setTheme(resolved);
  }

  return { mode, theme, chooseTheme };
}

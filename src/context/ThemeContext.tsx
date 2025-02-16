import { createContext, useContext, useEffect, useState } from "react";
import { AppTheme, ThemeContextType, ThemeProviderProps } from "../types";
import { APP_THEME, LOCAL_STORAGE_KEY } from "../constants/theme-constants";

const ThemeContext = createContext<ThemeContextType>({
  appTheme: APP_THEME.LIGHT,
  toggleTheme: () => {},
});
const isAppTheme = (appTheme: string): boolean => {
  return new Set(Object.values(APP_THEME)).has(appTheme as AppTheme);
};
const loadDefaultTheme = (): AppTheme => {
  const storageTheme: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!storageTheme || !isAppTheme(storageTheme)) return APP_THEME.LIGHT;
  return storageTheme as AppTheme;
};
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<AppTheme>(loadDefaultTheme);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, appTheme);
    return () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    };
  }, []);

  const toggleTheme = () => {
    setAppTheme((appTheme) => {
      const modifiedTheme =
        appTheme === APP_THEME.LIGHT ? APP_THEME.DARK : APP_THEME.LIGHT;
      localStorage.setItem(LOCAL_STORAGE_KEY, modifiedTheme);
      return modifiedTheme;
    });
  };
  return (
    <ThemeContext.Provider value={{ appTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = (): ThemeContextType => useContext(ThemeContext);

const useAppTheme = (): AppTheme => {
  const { appTheme } = useContext(ThemeContext);
  return appTheme;
};

export { ThemeProvider, useTheme, useAppTheme };

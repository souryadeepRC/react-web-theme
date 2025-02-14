import { createContext, useContext, useState } from "react";
import { AppTheme, ThemeContextType, ThemeProviderProps } from "../types";
import { APP_THEME } from "../constants/theme-constants";

const ThemeContext = createContext<ThemeContextType>({
  appTheme: APP_THEME.LIGHT,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<AppTheme>(APP_THEME.LIGHT);

  const toggleTheme = () => {
    setAppTheme(
      appTheme === APP_THEME.LIGHT ? APP_THEME.DARK : APP_THEME.LIGHT
    );
  };
  return (
    <ThemeContext.Provider value={{ appTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };

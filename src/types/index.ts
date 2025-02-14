export interface ToggleSwitchProps {
  appTheme: string;
  className?: string;
  onChange: () => void;
}
export type AppTheme = "light" | "dark" | "default";

export interface ThemeProviderProps {
  children: JSX.Element;
}
export interface ThemeContextType {
  appTheme: AppTheme;
  toggleTheme: () => void;
}

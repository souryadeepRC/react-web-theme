export interface ThemeSwitchProps {
  className?: string;
  onChange?: () => void;
}
export type AppTheme = "light" | "dark" | "default";

export interface ThemeProviderProps {
  children: JSX.Element;
}
export interface ThemeContextType {
  appTheme: AppTheme;
  toggleTheme: () => void;
}
export interface ThemeButtonProps {
  className?: string;
  onClick?: () => void;
  lightIcon?: SvgIconProps;
  darkIcon?: SvgIconProps;
  dataTestId?: string;
}

export type SvgIconProps = React.SVGProps<SVGAElement>;

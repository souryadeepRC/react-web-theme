import { APP_THEME } from "../../constants/theme-constants";
import { useTheme } from "../../context/ThemeContext";
import { ThemeButtonProps, ThemeContextType } from "../../types";
import "./ThemeButton.css";

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const {
    className = "",
    onClick,
    lightIcon,
    darkIcon,
    dataTestId = "react-theme-button",
  } = props || {};
  const { appTheme, toggleTheme }: ThemeContextType = useTheme();
  const isDarkMode: boolean = appTheme === APP_THEME.DARK;
  const handleChange = (): void => {
    toggleTheme();
    onClick?.();
  };
  return (
    <button
      aria-label="Web theme button Click to alter UI theme from light to dark"
      tabIndex={0}
      data-testid={dataTestId}
      className={`theme_button__root ${className}`}
      onClick={handleChange}
    >
      <>{isDarkMode ? darkIcon || <>&#127762;</> : lightIcon || <>&#9728;</>}</>
    </button>
  );
};
export default ThemeButton;

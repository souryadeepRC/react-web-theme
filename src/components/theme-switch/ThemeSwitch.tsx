import { APP_THEME } from "../../constants/theme-constants";
import { useTheme } from "../../context/ThemeContext";
import { ThemeContextType, ThemeSwitchProps } from "../../types";
import "./ThemeSwitch.css";

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  className = "",
  onChange,
}) => {
  const { appTheme, toggleTheme }: ThemeContextType = useTheme();
  const handleChange = (): void => {
    toggleTheme();
    onChange?.();
  };

  const isChecked: boolean = appTheme === APP_THEME.DARK;

  return (
    <div className={`theme_switch__root ${className}`}>
      <label
        className={`theme_switch__base ${
          isChecked ? "theme_switch__checked" : ""
        }`}
      >
        <input
          className="theme_switch__input"
          type="checkbox"
          onChange={handleChange}
          checked={isChecked}
          aria-label="toggle switch"
        />
        <span className="theme_switch__thumb">
          <>{isChecked ? <>&#127762;</> : <>&#9728;</>}</>
        </span>
      </label>
      <span className="theme_switch__track"></span>
    </div>
  );
};
export default ThemeSwitch;

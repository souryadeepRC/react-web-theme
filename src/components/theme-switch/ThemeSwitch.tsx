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
    <div className={`Switch-root ${className}`}>
      <label
        className={`Switch-switchBase ${isChecked ? "Switch-checked" : ""}`}
      >
        <input
          className="Switch-input"
          type="checkbox"
          onChange={handleChange}
          checked={isChecked}
          aria-label="toggle switch"
        />
        <span className="Switch-thumb">
          <span>{isChecked ? <>&#9790;</> : <>&#9728;</>}</span>
        </span>
      </label>
      <span className="Switch-track"></span>
    </div>
  );
};
export default ThemeSwitch;

import { APP_THEME } from "../../constants/theme-constants";
import { ToggleSwitchProps } from "../../types";
import "./ToggleSwitch.css";

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  appTheme,
  className = "",
  onChange,
}) => {
  const isChecked: boolean = appTheme === APP_THEME.DARK;

  return (
    <div className={`Switch-root ${className}`}>
      <label
        className={`Switch-switchBase ${isChecked ? "Switch-checked" : ""}`}
      >
        <input
          className="Switch-input"
          type="checkbox"
          onChange={onChange}
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
export default ToggleSwitch;

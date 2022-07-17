import { FormError, FormNumber } from "./types";
import { ErrorDisplay } from "./ErrorDisplay";

export const Number = ({
  name,
  label,
  value,
  helperText,
  minValue,
  maxValue,
  disabled,
  required,
  error,
}: FormNumber & FormError) => (
  <label>
    <span className={disabled ? "label-disabled" : "label-primary"}>
      {label}
    </span>
    <input
      type="number"
      className="input-primary"
      name={name}
      defaultValue={value}
      min={minValue}
      max={maxValue}
      disabled={disabled}
      required={required}
    />
    <ErrorDisplay error={error} helperText={helperText} disabled={disabled} />
  </label>
);

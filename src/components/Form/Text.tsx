import { FormError, FormText } from "./types";
import { ErrorDisplay } from "./ErrorDisplay";

export const Text = ({
  name,
  label,
  value = "",
  placeholder,
  helperText,
  disabled,
  required,
  error,
}: FormText & FormError) => {
  return (
    <label>
      <span className={disabled ? "label-disabled" : "label-primary"}>
        {label}
      </span>
      <input
        type="text"
        className="input-primary"
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <ErrorDisplay error={error} helperText={helperText} disabled={disabled} />
    </label>
  );
};

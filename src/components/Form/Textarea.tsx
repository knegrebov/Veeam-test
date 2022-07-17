import { FormError, FormTextarea } from "./types";
import { ErrorDisplay } from "./ErrorDisplay";

export const Textarea = ({
  name,
  label,
  value,
  helperText,
  disabled,
  required,
  error,
}: FormTextarea & FormError) => (
  <label>
    <span className={disabled ? "label-disabled" : "label-primary"}>
      {label}
    </span>
    <textarea
      rows={10}
      className="input-primary"
      name={name}
      defaultValue={value}
      disabled={disabled}
      required={required}
    />
    <ErrorDisplay error={error} helperText={helperText} disabled={disabled} />
  </label>
);

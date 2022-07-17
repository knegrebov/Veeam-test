import { FormDate, FormError } from "./types";
import { parseDate } from "./util/parseDate";
import { ErrorDisplay } from "./ErrorDisplay";

export const Date = ({
  name,
  label,
  value,
  helperText,
  disabled,
  required,
  error,
}: FormDate & FormError) => (
  <label>
    <span className={disabled ? "label-disabled" : "label-primary"}>
      {label}
    </span>
    <input
      type="date"
      className="input-primary"
      name={name}
      defaultValue={parseDate(value)}
      disabled={disabled}
      required={required}
    />
    <ErrorDisplay error={error} helperText={helperText} disabled={disabled} />
  </label>
);

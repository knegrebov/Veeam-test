import { FormCheckbox, FormError } from "./types";
import { ErrorDisplay } from "./ErrorDisplay";

export const Checkbox = ({
  label: topLabel,
  entries,
  disabled: topDisabled,
  required,
  error,
  helperText,
}: FormCheckbox & FormError) => (
  <fieldset>
    <legend className={topDisabled ? "label-disabled" : "label-primary"}>
      {topLabel}
    </legend>
    <div className="mt-2 flex flex-col gap-2">
      {entries.map(({ label, value, name, disabled }) => (
        <label className="flex flex-row items-center gap-2" key={label}>
          <input
            type="checkbox"
            className="input-check-primary"
            name={name}
            defaultChecked={value}
            disabled={disabled}
            required={required}
          />
          <span className={disabled ? "label-disabled" : "label-primary"}>
            {label}
          </span>
        </label>
      ))}
    </div>
    <ErrorDisplay
      error={error}
      helperText={helperText}
      disabled={topDisabled}
    />
  </fieldset>
);

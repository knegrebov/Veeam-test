import { FormError, FormRadio } from "./types";
import { ErrorDisplay } from "./ErrorDisplay";

export const Radio = ({
  name,
  label: topLabel,
  value: topValue,
  entries,
  disabled: topDisabled,
  required,
  error,
  helperText,
}: FormRadio & FormError) => (
  <fieldset>
    <legend
      className={topDisabled ? "label-disabled" : "text-gray-700 capitalize"}
    >
      {topLabel}
    </legend>
    <div className="mt-2 flex flex-col gap-2">
      {entries.map(({ label, value, disabled }) => (
        <label className="flex flex-row items-center gap-2" key={label}>
          <input
            type="radio"
            className="input-check-primary"
            name={name}
            value={value}
            defaultChecked={value === topValue}
            disabled={disabled}
            required={required}
          />
          <span className={topDisabled ? "label-disabled" : "label-primary"}>
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

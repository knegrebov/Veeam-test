import clsx from "clsx";

export const ErrorDisplay = ({
  error,
  helperText,
  disabled,
}: {
  error?: string;
  helperText?: string;
  disabled?: boolean;
}) =>
  error || helperText ? (
    <span
      className={clsx({
        "label-disabled": disabled,
        "label-primary": !disabled && !error,
        "error-primary": !disabled && !!error,
      })}
    >
      {error || helperText}
    </span>
  ) : (
    <></>
  );

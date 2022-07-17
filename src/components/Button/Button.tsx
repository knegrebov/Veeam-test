import clsx from "clsx";

const getLabel = (
  label?: string,
  action?: (() => void) | "submit" | "reset"
) => {
  if (label) return label;
  if (typeof action === "string") return action;
  throw Error("Button has no label");
};

export const Button = ({
  action,
  disabled,
  label,
  variant = "primary",
}: {
  action: (() => void) | "submit" | "reset";
  disabled?: boolean;
  label?: string;
  variant?: "primary" | "secondary";
}) => (
  <button
    onClick={typeof action !== "string" ? action : () => {}}
    type={typeof action === "string" ? action : "button"}
    disabled={disabled}
    className={clsx({
      "btn-primary": variant === "primary",
      "btn-secondary": variant === "secondary",
    })}
  >
    {getLabel(label, action)}
  </button>
);

import { Fragment, PropsWithChildren } from "react";

export const Tab = ({
  label,
  children,
}: PropsWithChildren<{ label: string }>) => (
  <Fragment key={label}>{children}</Fragment>
);

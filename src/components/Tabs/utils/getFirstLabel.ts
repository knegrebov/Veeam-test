import { Children, ReactNode } from "react";
import { getLabel } from "./getLabel";

export const getFirstLabel = (children: ReactNode) => {
  const child = Children.toArray(children).at(0);
  if (!child) {
    throw new Error("No Tabs found");
  }
  return getLabel(child);
};

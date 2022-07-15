import { isValidElement, ReactNode } from "react";
import { Tab } from "../Tab";

export const getLabel = (child: ReactNode) => {
  if (!isValidElement(child)) {
    throw new Error("Tabs.Tab children must be valid React elements");
  }
  if (
    typeof child.type === "string" ||
    child?.type.name !== Tab.name ||
    !child.props.label
  ) {
    throw new Error(
      "Tabs.Container children must be of type Tabs.Tab and have non empty label"
    );
  }
  const { label } = child.props;
  return label;
};

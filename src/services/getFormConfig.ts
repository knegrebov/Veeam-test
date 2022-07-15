export type FormConfig = {
  heading: string;
  fields: FormField[];
  ctas: FormCta[];
};

export type FormField = { label: string; name: string } & (
  | {
      type: "radio";
      entries: { label?: string; value: boolean; name: string }[];
    }
  | { type: "checkbox"; value?: boolean }
  | { type: "number"; value?: number }
  | { type: "text" | "textarea"; value?: string }
  | {
      type: "select";
      default?: string;
      entries: { label?: string; value: string; name: string }[];
    }
  | { type: "date"; value?: Date }
);

export type FormCta = { label: string; action: "submit" | "reset" };

export const getFormConfig = (config: string): FormConfig => {
  try {
    return JSON.parse(config);
  } catch (e) {
    throw new Error("Config file is corrupted");
  }
};

import { Form } from "./index";

export type FormError = { error: string };

export abstract class FormCommon {
  public readonly label: string;
  public readonly name: string;
  public readonly helperText?: string;
  public readonly required?: boolean;
  public readonly disabled?: boolean;

  protected constructor({
    label,
    name,
    helperText,
    required,
    disabled,
  }: FormCommon) {
    if (!label || !name) {
      throw new Error("Form label and name fields are required");
    }
    this.label = label;
    this.name = name;
    this.helperText = helperText;
    this.required = required;
    this.disabled = disabled;
  }
}

export class FormRadio extends FormCommon {
  public readonly type = "radio";
  public readonly value?: string;
  public readonly entries: {
    label: string;
    value: string;
    disabled?: boolean;
  }[] = [];

  constructor(params: FormRadio) {
    super(params);
    if (!Array.isArray(params.entries) || params.entries.length === 0) {
      throw new Error("Radio type requires at least one entry");
    }
    params.entries.forEach((e) => {
      if (!e.label) throw new Error("Radio entry requires label");
      if (!e.value) throw new Error("Radio entry requires value");
    });
    this.entries = params.entries;
    this.value = params.value;
  }

  get component() {
    return Form.Radio;
  }
}

export class FormCheckbox extends FormCommon {
  public readonly type = "checkbox";
  public readonly entries: {
    label: string;
    value?: boolean;
    name: string;
    disabled?: boolean;
  }[] = [];

  constructor(params: FormCheckbox) {
    super(params);
    if (!Array.isArray(params.entries) || params.entries.length === 0) {
      throw new Error("Checkbox type requires at least one entry");
    }
    params.entries.forEach((e) => {
      if (!e.name) throw new Error("Radio entry requires name");
      if (!e.label) throw new Error("Radio entry requires label");
    });
    this.entries = params.entries;
  }

  get component() {
    return Form.Checkbox;
  }
}

export class FormNumber extends FormCommon {
  public readonly type = "number";
  public readonly value?: number;
  public readonly minValue?: number;
  public readonly maxValue?: number;

  constructor(params: FormNumber) {
    super(params);
    this.value = params.value;
    this.minValue = params.minValue;
    this.maxValue = params.maxValue;
  }

  get component() {
    return Form.Number;
  }
}

export class FormText extends FormCommon {
  public readonly type = "text";
  public readonly value?: string;
  public readonly placeholder?: string;

  constructor(params: FormText) {
    super(params);
    this.value = params.value;
    this.placeholder = params.placeholder;
  }

  get component() {
    return Form.Text;
  }
}

export class FormTextarea extends FormCommon {
  public readonly type = "textarea";
  public readonly value?: string;

  constructor(params: FormTextarea) {
    super(params);
    this.value = params.value;
  }

  get component() {
    return Form.Textarea;
  }
}

export class FormDate extends FormCommon {
  public readonly type = "date";
  public readonly value?: string;

  constructor(params: FormDate) {
    super(params);
    if (params.value && isNaN(Date.parse(params.value))) {
      throw new Error("Provided date has invalid format");
    }
    this.value = params.value;
  }

  get component() {
    return Form.Date;
  }
}

export class FormCta {
  public readonly label?: string;
  public readonly action: "submit" | "reset";

  constructor({ label, action }: FormCta) {
    this.label = label;
    this.action = action;
  }
}

export type Fields =
  | FormRadio
  | FormCheckbox
  | FormNumber
  | FormText
  | FormTextarea
  | FormDate;

export class FormConfig {
  public readonly heading?: string;
  public readonly fields: Fields[];
  public readonly ctas: FormCta[];

  constructor({ heading, fields, ctas }: FormConfig) {
    if (!Array.isArray(ctas) || !Array.isArray(fields)) {
      throw new Error("Ctas and fields are not set or not an Array type");
    }
    this.heading = heading;
    this.ctas = ctas.map((cta) => new FormCta(cta));
    this.fields = fields.map((field) => {
      switch (field.type) {
        case "checkbox": {
          return new FormCheckbox(field);
        }
        case "number": {
          return new FormNumber(field);
        }
        case "radio": {
          return new FormRadio(field);
        }
        case "text": {
          return new FormText(field);
        }
        case "textarea": {
          return new FormTextarea(field);
        }
        case "date": {
          return new FormDate(field);
        }
        default: {
          throw new Error("Unknown or missing field type");
        }
      }
    });
  }
}

import { FocusEvent, useState } from "react";
import { FormConfig } from "../../../components";

export const useValidateJSON = (): [
  (e: FocusEvent<HTMLTextAreaElement>) => void,
  FormConfig | null,
  string | null
] => {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<FormConfig | null>(null);
  const handler = (e: FocusEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    try {
      setData(new FormConfig(JSON.parse(val)));
      setError(null);
    } catch (e) {
      setData(null);
      setError((e as any).message);
    }
  };

  return [handler, data, error];
};

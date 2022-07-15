import { FormConfig } from "../services/getFormConfig";

export const Results = ({ config }: { config: FormConfig | null }) => (
  <>{JSON.stringify(config, null, 2)}</>
);

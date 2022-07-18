import { Form, FormConfig } from "components";

export const Results = ({ config }: { config: FormConfig | null }) => {
  if (!config) return <div className="my-2">Config not found</div>;
  return (
    <div className="flex flex-row w-full min-w-[300px] max-w-[800px]">
      <Form.Constructor config={config} />
    </div>
  );
};

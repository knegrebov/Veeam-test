import { useValidateJSON } from "./util/useValidateJSON";
import { Button, FormConfig } from "components";
import testData from "services/data.json";

export const Config = ({
  onData,
}: {
  onData: (data: FormConfig | null) => void;
}) => {
  const dataStr = JSON.stringify(testData);
  const [handler, data, error] = useValidateJSON(dataStr);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onData(data);
        window.history.pushState(null, "", "#results");
      }}
      className="flex flex-col gap-4 justify-end items-end my-2 w-full min-w-[300px] max-w-[800px]"
    >
      <label className="w-full">
        <span className="label-primary">Enter form config</span>
        <textarea
          rows={10}
          defaultValue={dataStr}
          name="configData"
          onBlur={handler}
          className="shadow-sm focus:border-primary mt-1 block w-full sm:text-sm border border-v-gray-light rounded-md focus:ring-0"
        />
      </label>
      <div className="flex flex-row justify-between items-center w-full">
        <div>
          {error && <span className="font-xl text-error">{error}</span>}
        </div>
        <Button action="submit" label="Submit" disabled={!!error} />
      </div>
    </form>
  );
};

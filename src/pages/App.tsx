import { Tabs } from "../components";
import { Config } from "./Config";
import { Results } from "./Results";
import { useState } from "react";
import { FormConfig } from "../services/getFormConfig";

export const App = () => {
  const [config, setConfig] = useState<FormConfig | null>(null);
  return (
    <div className="container mx-auto mt-10">
      <Tabs.Container>
        <Tabs.Tab label="config">
          <Config
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              setConfig(
                JSON.parse(formData.get("configData") as string) as FormConfig
              );
            }}
          />
        </Tabs.Tab>
        <Tabs.Tab label="results">
          <Results config={config} />
        </Tabs.Tab>
      </Tabs.Container>
    </div>
  );
};

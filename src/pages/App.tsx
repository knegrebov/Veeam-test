import { FormConfig, Tabs } from "components";
import { Config } from "./Config";
import { Results } from "./Results";
import { useState } from "react";

export const App = () => {
  const [config, setConfig] = useState<FormConfig | null>(null);
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-primary mb-10">Veeam test app</h1>
      <Tabs.Container>
        <Tabs.Tab label="config">
          <Config onData={setConfig} />
        </Tabs.Tab>
        <Tabs.Tab label="results">
          <Results config={config} />
        </Tabs.Tab>
      </Tabs.Container>
    </div>
  );
};

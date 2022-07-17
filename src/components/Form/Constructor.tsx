import { FormConfig } from ".";
import { FormEvent, ReactElement } from "react";
import { Button } from "../Button";

export const Constructor = ({ config }: { config: FormConfig }) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(Array.from(new FormData(e.currentTarget).entries()));
  };
  return (
    <div className="w-full">
      {config.heading && (
        <h2 className="text-2xl text-primary capitalize my-4">
          {config.heading}
        </h2>
      )}
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-6 mb-2">
          {config.fields.map((field) => {
            const El: (props: any) => ReactElement = field.component;
            return <El {...field} key={field.name} />;
          })}
        </div>
        <div className="flex flex-row gap-2 w-full items-end justify-end">
          {config.ctas.length > 0 &&
            config.ctas.map(({ label, action }) => (
              <Button
                label={label}
                action={action}
                key={label}
                variant={action === "submit" ? "primary" : "secondary"}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

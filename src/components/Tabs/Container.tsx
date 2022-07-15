import { Children, PropsWithChildren } from "react";
import clsx from "clsx";
import { getLabel, useHashRoute } from "./utils";
import { getFirstLabel } from "./utils/getFirstLabel";

export const Container = ({ children }: PropsWithChildren<{}>) => {
  const active = useHashRoute() || getFirstLabel(children);
  return (
    <section role="tablist" className="border border-gray-200 p-6 rounded">
      <nav
        role="tab"
        className="flex flex-row gap-8 border-b border-b-gray-200 px-4 max-w-full overflow-x-scroll"
      >
        {Children.map(children, (child) => {
          const label = getLabel(child);
          return (
            <a
              href={`#${label}`}
              aria-controls={`tab_${label}`}
              role="tab"
              key={label}
              className={clsx(
                "capitalize text-l border-b-2 p-2 hover:border-b-indigo-500 hover:text-indigo-500",
                {
                  "text-indigo-700 border-b-indigo-700": active === label,
                  "text-gray-600 border-b-transparent": active !== label,
                }
              )}
            >
              {label}
            </a>
          );
        })}
      </nav>
      <section aria-live="polite">
        {Children.map(children, (child) => {
          const label = getLabel(child);
          return (
            <article
              id={`tab_${label}`}
              role="tabpanel"
              className={clsx({ hidden: active !== label })}
              key={label}
            >
              {child}
            </article>
          );
        })}
      </section>
    </section>
  );
};

import { Children, KeyboardEvent, PropsWithChildren } from "react";
import clsx from "clsx";
import { getLabel, useHashRoute } from "./utils";
import { getFirstLabel } from "./utils/getFirstLabel";

const go = (href: string) => {
  window.location.hash = `#${href}`;
};

export const Container = ({ children }: PropsWithChildren<{}>) => {
  const active = useHashRoute() || getFirstLabel(children);
  const onKeyUp = (e: KeyboardEvent<HTMLButtonElement>, label: string) => {
    if (e.key === "Enter" || e.key === "Space") {
      go(label);
    }
  };
  return (
    <section className="border border-v-gray-light p-6 rounded">
      <nav
        role="tablist"
        className="flex flex-row gap-8 border-b border-b-v-gray-light px-4 max-w-full overflow-x-scroll"
      >
        {Children.map(children, (child) => {
          const label = getLabel(child);
          return (
            <button
              onClick={() => go(label)}
              onKeyUp={(e) => onKeyUp(e, label)}
              aria-controls={`tab_${label}`}
              aria-selected={active === label}
              role="tab"
              key={label}
              tabIndex={0}
              className={clsx(
                "capitalize text-base border-0 border-b-2 p-2 outline-0 border-transparent",
                "hover:border-primary-variant hover:text-primary-variant",
                "focus:border-primary-variant focus:text-primary-variant",
                {
                  "text-primary border-b-primary": active === label,
                  "text-v-gray border-b-transparent": active !== label,
                }
              )}
            >
              {label}
            </button>
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

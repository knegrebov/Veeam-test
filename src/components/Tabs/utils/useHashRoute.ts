import { useSyncExternalStore } from "react";

export const useHashRoute = () => {
  return useSyncExternalStore(
    (notify: (e: HashChangeEvent) => void) => {
      window.addEventListener("hashchange", notify);
      return () => {
        window.removeEventListener("hashchange", notify);
      };
    },
    () => window.location.hash.replace("#", "")
  );
};

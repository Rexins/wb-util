import warning from "../utils/warning";
import isFunction from "../utils/isFunction";
import { useEffect } from "react";

export default function useMount(fn: Function) {
  warning(
    isFunction(fn),
    `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`
  );
  useEffect(() => {
    if (isFunction(fn)) fn();
  }, []);
}

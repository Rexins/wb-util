import warning from "../util/warning";
import isFunction from "../util/isFunction";
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

import warning from "../warning";
import isFunction from "../isFunction";
import {useEffect} from "react";

export default function useMount(fn: Function) {
  warning(isFunction(fn), `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`)
  useEffect(() => {
    fn?.()
  }, [])
}

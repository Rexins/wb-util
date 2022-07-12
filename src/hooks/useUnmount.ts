import {useEffect} from "react";
import useLatest from "./useLatest";
import warning from "../util/warning";
import isFunction from "../util/isFunction";

function useUnmount(fn: Function) {
  warning(isFunction(fn), `useUnmount expected parameter is a function, got ${typeof fn}`)
  const fnLatest = useLatest(fn);
  useEffect(() => () => {
    fnLatest.current?.()
  }, [])
}

export default useUnmount

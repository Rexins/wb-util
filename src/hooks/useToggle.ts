import { useMemo, useState } from "react";
import useLatest from "./useLatest";
import isUndefined from "../utils/isUndefined";

type Action<T = boolean, U = boolean> = {
  set(v: T | U): boolean
  toggle: () => void
  setLeft: () => void
  setRight: () => void
}

function useToggle(): [boolean, Action]
function useToggle<T>(_leftValue: T): [T, Action<T>]
function useToggle<T, U>(_leftValue: T, _rightValue: U): [T | U, Action<T, U>]
function useToggle<T, U>(_leftValue: T, _rightValue: U, defaultValue: T | U): [T | U, Action<T, U>]
function useToggle<T, U>(_leftValue: T = true as unknown as T, _rightValue: U = false as unknown as U, defaultValue?: T | U) {
  const [state, setState] = useState<boolean>(!isUndefined(defaultValue) && _rightValue === defaultValue ? false : true);
  const leftValue = useLatest(_leftValue);
  const rightValue = useLatest(_rightValue);
  const actions = useMemo(() => {
    const set = (v: T | U): boolean =>
      [rightValue.current, leftValue.current].some((curV, idx) => {
        if (curV === v) {
          setState(!!idx);
          return true;
        }
        return false;
      });
    const toggle = () => setState((v) => !v);
    const setLeft = () => setState(true);
    const setRight = () => setState(false);
    return {
      set,
      toggle,
      setLeft,
      setRight,
    };
  }, []);
  return [[rightValue.current, leftValue.current][+state], actions];
}

export default useToggle;

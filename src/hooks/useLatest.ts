import {useRef} from "react";

export default function useLatest<T>(value: T) {
  const result = useRef<T>(value);
  result.current = value;

  return result;
}

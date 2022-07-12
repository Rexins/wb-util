import useLatest from "../useLatest";
import { renderHook } from "@testing-library/react";

describe("useLatest", () => {
  it("should work", () => {
    const { result, rerender } = renderHook((state) => useLatest(state));
    [1, "2", {}, []].forEach((v) => {
      rerender(v);
      expect(result.current.current).toEqual(v);
    });
  });
});

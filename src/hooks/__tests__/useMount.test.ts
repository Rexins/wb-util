import useMount from "../useMont";
import { renderHook } from "@testing-library/react";

describe("useMount", () => {
  it("should work", () => {
    const fn = jest.fn();
    const hook = renderHook(() => useMount(fn));
    expect(fn).toBeCalledTimes(1);
    hook.rerender();
    expect(fn).toBeCalledTimes(1);
    hook.unmount();
    expect(fn).toBeCalledTimes(1);

    renderHook(() => useMount(fn));

    expect(fn).toBeCalledTimes(2);

    const warnSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    renderHook(() => useMount(1 as unknown as Function));
    expect(warnSpy).toHaveBeenCalledWith(
      'Error: useMount: parameter `fn` expected to be a function, but got "number".'
    );
  });
});

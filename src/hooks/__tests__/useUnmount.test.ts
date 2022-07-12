import {renderHook} from "@testing-library/react";
import useUnmount from "../useUnmount";

describe('useUnmount', () => {
  it ('should work', () => {
    let fn = jest.fn();
    let injectFn = fn;
    let { rerender, unmount } = renderHook(() => useUnmount(injectFn));
    expect(fn).toBeCalledTimes(0)
    rerender()
    expect(fn).toBeCalledTimes(0)
    unmount()
    expect(fn).toBeCalledTimes(1)

    fn = jest.fn();
    injectFn = fn;
    void ({ rerender, unmount } = renderHook(() => useUnmount(injectFn)));
    rerender();
    expect(fn).toBeCalledTimes(0)
    const newFn = jest.fn();
    injectFn = newFn;
    rerender();
    unmount();
    expect(fn).toBeCalledTimes(0)
    expect(newFn).toBeCalledTimes(1)
  })
})

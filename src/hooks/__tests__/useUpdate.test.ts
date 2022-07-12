import {act, renderHook} from "@testing-library/react";
import useUpdate from "../useUpdate";

describe('useUpdate', () => {
  it('should work', () => {
    const fn = jest.fn();
    const { result } = renderHook(() => {
      fn();
      return useUpdate()
    })
    const preUpload = result.current;
    expect(fn).toBeCalledTimes(1);
    act(result.current)
    expect(fn).toBeCalledTimes(2);
    expect(preUpload).toEqual(result.current);
  })
})

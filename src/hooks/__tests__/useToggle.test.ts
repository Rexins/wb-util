import { act, renderHook } from "@testing-library/react";
import useToggle from "../useToggle";

const setToggle = (leftValue?: unknown, rightValue?: unknown) =>
  renderHook((state) => useToggle(state.leftValue, state.rightValue), {
    initialProps: { leftValue, rightValue },
  });
const getCurState = (v) => v.current[0];

describe("useToggle", () => {
  it("should work", () => {
    const LEFT_VAL = true;
    const RIGHT_VAL = false;
    let { result } = setToggle();
    testFlow(result, LEFT_VAL, RIGHT_VAL);
    // result.current
  });

  it("provide parameter should work", () => {
    let leftVal: unknown = 1;
    let rightVal: unknown = 2;
    let { result, rerender } = setToggle(leftVal, rightVal);
    testFlow(result, leftVal, rightVal);
    leftVal = "leftVal";
    rightVal = "rightVal";
    rerender({ leftValue: leftVal, rightValue: rightVal });
    testFlow(result, leftVal, rightVal);
  });

  function testFlow(
    result,
    LEFT_VAL: unknown = true,
    RIGHT_VAL: unknown = false
  ) {
    expect(getCurState(result)).toEqual(LEFT_VAL);
    act(() => {
      result.current[1].toggle();
    });
    expect(getCurState(result)).toEqual(RIGHT_VAL);
    act(() => {
      result.current[1].toggle();
    });
    expect(getCurState(result)).toEqual(LEFT_VAL);
    act(() => {
      result.current[1].setRight();
    });
    expect(getCurState(result)).toEqual(RIGHT_VAL);
    act(() => {
      result.current[1].setLeft();
    });
    expect(getCurState(result)).toEqual(LEFT_VAL);
    act(() => {
      result.current[1].set(RIGHT_VAL);
    });
    expect(getCurState(result)).toEqual(RIGHT_VAL);
    act(() => {
      result.current[1].set(LEFT_VAL);
    });
    expect(getCurState(result)).toEqual(LEFT_VAL);
  }
});

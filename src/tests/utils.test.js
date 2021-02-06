import setValue from "../js/control/utils";

describe("Testing function setValue", () => {
  const NO_VALUE = undefined;
  const div = document.createElement("div");
  [
    ["main value", "default value", "main value"],
    ["main value", NO_VALUE, "main value"],
    [NO_VALUE, "default value", "default value"],
    [0, NO_VALUE, ""],
    [true, NO_VALUE, true],
  ].forEach((item) => {
    const [argValue, defaultValue, checkValue] = item;
    it(`if function calling with mainValue ${argValue} and defaultValue ${defaultValue}, the 'div.innerText' propery set to ${checkValue}`, () => {
      setValue(div, argValue, defaultValue);
      expect(div.innerText).toBe(checkValue);
    });
  });

  const input = document.createElement("input");
  [
    ["main value", "default value", "main value"],
    ["main value", NO_VALUE, "main value"],
    [NO_VALUE, "default value", "default value"],
    [0, NO_VALUE, ""],
    [true, NO_VALUE, "true"],
  ].forEach((item) => {
    const [argValue, defaultValue, checkValue] = item;
    it(`if function calling with mainValue ${argValue} and defaultValue ${defaultValue}, the 'input.value' propery set to ${checkValue}`, () => {
      setValue(input, argValue, defaultValue);
      expect(input.value).toBe(checkValue);
    });
  });
});

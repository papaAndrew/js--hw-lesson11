import probe from "./probe-jest";

describe("How jest works", () => {
  it("claims function probe return 1", () => {
    expect(probe()).toBe(1);
  });
});

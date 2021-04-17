import getGeolocation from "../js/api/getGeolocation";
import getDataByHttpGet from "../js/api/getDataByHttpGet";

jest.mock("../js/api/getDataByHttpGet");

describe("Testing function getGeolocation calling API", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("have to call function getDataByHttpGet", async () => {
    getDataByHttpGet.mockImplementation(
      () => new Promise((resolve) => resolve())
    );

    const resolve = jest.fn();
    const reject = jest.fn();

    await getGeolocation(resolve, reject);

    expect(getDataByHttpGet).toHaveBeenCalled();
  });

  it("have call resolve function back if getDataByHttpGet has been resoved. callback function reject never called", async () => {
    getDataByHttpGet.mockImplementation(
      () => new Promise((resolve) => resolve())
    );

    const resolve = jest.fn();
    const reject = jest.fn();

    await getGeolocation(resolve, reject);

    expect(resolve).toHaveBeenCalled();
    expect(reject).not.toHaveBeenCalled();
  });

  it("if getDataByHttpGet was rejected handler onReject has been called back and onResolve has never been called", async () => {
    getDataByHttpGet.mockImplementation(
      () =>
        new Promise(() => {
          throw new Error("Rejected!");
        })
    );

    const reject = jest.fn();
    const resolve = jest.fn();

    await getGeolocation(resolve, reject);

    expect(resolve).not.toHaveBeenCalled();
    expect(reject).toHaveBeenCalled();
  });
});

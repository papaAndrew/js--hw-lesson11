import getWeatherByCoord from "../js/api/getWeatherByCoord";
import getDataByHttpGet from "../js/api/getDataByHttpGet";

const dummy = {
  latitude: 0,
  longitude: 0,
  name: "Some City",
};

jest.mock("../js/api/getDataByHttpGet");

describe("Testing function getWeatherByCoord calling API", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls function getDataByHttpGet", async () => {
    getDataByHttpGet.mockImplementation(
      () => new Promise((resolve) => resolve())
    );

    const resolve = jest.fn();
    const reject = jest.fn();

    await getWeatherByCoord(dummy, resolve, reject);

    expect(getDataByHttpGet).toHaveBeenCalled();
  });

  it("have call resolve function back if getDataByHttpGet has been resoved. callback function reject never called", async () => {
    getDataByHttpGet.mockImplementation(
      () => new Promise((resolve) => resolve())
    );

    const resolve = jest.fn();
    const reject = jest.fn();

    await getWeatherByCoord(dummy, resolve, reject);

    expect(resolve).toHaveBeenCalled();
    expect(reject).not.toHaveBeenCalled();
  });

  it("have call reject function back if getDataByHttpGet has been rejected. callback function resolve never called", async () => {
    getDataByHttpGet.mockImplementation(
      () =>
        new Promise(() => {
          throw new Error("Rejected!");
        })
    );

    const resolve = jest.fn();
    const reject = jest.fn();

    await getWeatherByCoord(dummy, resolve, reject);

    expect(reject).toHaveBeenCalled();
    expect(resolve).not.toHaveBeenCalled();
  });
});

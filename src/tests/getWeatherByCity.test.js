import getWeatherByCity from "../js/api/getWeatherByCity";
import getDataByHttpGet from "../js/api/getDataByHttpGet";

const dummy = "Some City";

jest.mock("../js/api/getDataByHttpGet");

describe("Testing function getWeatherByCity calling API", () => {
  it("calls function getDataByHttpGet", () => {
    getDataByHttpGet.mockImplementation(() => {});

    getWeatherByCity(dummy);

    expect(getDataByHttpGet).toHaveBeenCalled();
  });

  it("have call resolve function back if getDataByHttpGet has been resoved. callback function reject never called", () => {
    getDataByHttpGet.mockImplementation(() => resolve());

    const resolve = jest.fn();
    const reject = jest.fn();

    getWeatherByCity(dummy, resolve, reject);

    expect(resolve).toHaveBeenCalled();
    expect(reject).not.toHaveBeenCalled();
  });

  it("have call reject function back if getDataByHttpGet has been rejected. callback function resolve never called", () => {
    getDataByHttpGet.mockImplementation(() => reject());

    const resolve = jest.fn();
    const reject = jest.fn();

    getWeatherByCity(dummy, resolve, reject);

    expect(reject).toHaveBeenCalled();
    expect(resolve).not.toHaveBeenCalled();
  });
});

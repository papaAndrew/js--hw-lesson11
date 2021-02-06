import getWeatherByCoord from "../js/api/getWeatherByCoord";
import getDataByHttpGet from "../js/api/getDataByHttpGet";

const dummy = {
  latitude: 0,
  longitude: 0,
  name: "Some City",
};

jest.mock("../js/api/getDataByHttpGet");

describe("Testing function getWeatherByCoord calling API", () => {
  it("calls function getDataByHttpGet", () => {
    getDataByHttpGet.mockImplementation(() => {});

    getWeatherByCoord(dummy);

    expect(getDataByHttpGet).toHaveBeenCalled();
  });

  it("have call resolve function back if getDataByHttpGet has been resoved. callback function reject never called", () => {
    getDataByHttpGet.mockImplementation(() => resolve());

    const resolve = jest.fn();
    const reject = jest.fn();

    getWeatherByCoord(dummy, resolve, reject);

    expect(resolve).toHaveBeenCalled();
    expect(reject).not.toHaveBeenCalled();
  });

  it("have call reject function back if getDataByHttpGet has been rejected. callback function resolve never called", () => {
    getDataByHttpGet.mockImplementation(() => reject());

    const resolve = jest.fn();
    const reject = jest.fn();

    getWeatherByCoord(dummy, resolve, reject);

    expect(reject).toHaveBeenCalled();
    expect(resolve).not.toHaveBeenCalled();
  });
});

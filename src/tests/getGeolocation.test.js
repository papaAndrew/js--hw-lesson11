import getGeolocation from "../js/api/getGeolocation";
import getDataByHttpGet from "../js/api/getDataByHttpGet";

jest.mock("../js/api/getDataByHttpGet");

describe("Testing function getGeolocation calling API", () => {
  it("have to call function getDataByHttpGet", () => {
    getDataByHttpGet.mockImplementation(() => {});

    getGeolocation();

    expect(getDataByHttpGet).toHaveBeenCalled();
  });

  it("have call resolve function back if getDataByHttpGet has been resoved. callback function reject never called", () => {
    getDataByHttpGet.mockImplementation(() => resolve());

    const resolve = jest.fn();
    const reject = jest.fn();

    getGeolocation(resolve, reject);

    expect(resolve).toHaveBeenCalled();
    expect(reject).not.toHaveBeenCalled();
  });

  it("have call reject function back if getDataByHttpGet has been rejected. callback function resolve never called", () => {
    getDataByHttpGet.mockImplementation(() => reject());

    const resolve = jest.fn();
    const reject = jest.fn();

    getGeolocation(resolve, reject);

    expect(reject).toHaveBeenCalled();
    expect(resolve).not.toHaveBeenCalled();
  });
});

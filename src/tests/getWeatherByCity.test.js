import getWeatherByCity from "../js/api/getWeatherByCity";
import getDataByHttpGet from "../js/api/getDataByHttpGet";

jest.mock("../js/api/getDataByHttpGet");

describe("Testing function getWeatherByCity calling API", () => {
  const cityName = "Some City";

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls function getDataByHttpGet", async () => {
    getDataByHttpGet.mockImplementation(
      () => new Promise((resolve) => resolve())
    );

    const resolve = jest.fn();
    const reject = jest.fn();

    await getWeatherByCity(cityName, resolve, reject);

    expect(getDataByHttpGet).toHaveBeenCalled();
  });

  it("if getDataByHttpGet was rejected handler onResolve has been called back and onReject has never been called", async () => {
    getDataByHttpGet.mockImplementation(
      () => new Promise((resolve) => resolve())
    );

    const reject = jest.fn();
    const resolve = jest.fn();

    await getWeatherByCity(cityName, resolve, reject);

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

    await getWeatherByCity(cityName, resolve, reject);

    expect(resolve).not.toHaveBeenCalled();
    expect(reject).toHaveBeenCalled();
  });
});

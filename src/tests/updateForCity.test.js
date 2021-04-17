import updateForCity from "../js/control/updateForCity";
import updateViews from "../js/control/updateViews.js";
import getWeatherByCity from "../js/api/getWeatherByCity.js";

jest.mock("../js/api/getWeatherByCity.js");
jest.mock("../js/control/updateViews");

const dummyWeather = {
  name: "Yekaterinburg",
};

describe("Testing function updateForCity", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("if cityName has value it calls the following sequence: getWeatherByCity => updateViews; onRefresh never called", () => {
    getWeatherByCity.mockImplementation((data, resolve) =>
      resolve(dummyWeather)
    );
    updateViews.mockImplementation();

    const onClick = jest.fn();
    const onRefresh = jest.fn();

    const cityName = dummyWeather.name;
    updateForCity(cityName, onClick, onRefresh);

    expect(getWeatherByCity).toHaveBeenCalled();
    expect(getWeatherByCity.mock.calls[0][0]).toBe(cityName);

    expect(updateViews).toHaveBeenCalled();
    expect(updateViews.mock.calls[0][0]).toBe(dummyWeather);

    expect(onRefresh).not.toHaveBeenCalled();
  });

  it("if cityName is empty it calls default onRefresh; getWeatherByCity never called", () => {
    const onClick = jest.fn();
    const onRefresh = jest.fn();
    const cityName = "";

    updateForCity(cityName, onClick, onRefresh);

    expect(onRefresh).toHaveBeenCalled();

    expect(getWeatherByCity).not.toHaveBeenCalled();
  });
});

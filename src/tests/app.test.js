import appRefresh, { cityChanged, cityClick } from "../js/control/app";
import getGeolocation from "../js/api/getGeolocation";
import getWeatherByCoord from "../js/api/getWeatherByCoord";
import updateWeather from "../js/control/fillWeather";
import updateViews from "../js/control/updateViews";
import updateForCity from "../js/control/updateForCity";

jest.mock("../js/api/getGeolocation");
jest.mock("../js/api/getWeatherByCoord");
jest.mock("../js/api/getWeatherByCity");
jest.mock("../js/control/updateViews");
jest.mock("../js/control/fillWeather");
jest.mock("../js/control/updateForCity");

const dummyGeo = {
  city: "Yekaterinburg",
  longitude: "60.7921",
  latitude: "56.9038",
};

const dummyWeather = {
  name: "Yekaterinburg",
};

const dummyEvent = {
  srcElement: {
    innerText: `${dummyWeather.name}`,
    value: `${dummyWeather.name}`,
  },
};

describe("Testing function appRefresh", () => {
  /*   afterEach(() => {
    jest.resetAllMocks();
  });
 */
  it("starts asynchronously the following chain: getGeolocation => getWeatherByCoord => updateViews", () => {
    getGeolocation.mockImplementation((resolve) => resolve(dummyGeo));
    getWeatherByCoord.mockImplementation((data, resolve) =>
      resolve(dummyWeather)
    );
    updateViews.mockImplementation();
    updateWeather.mockImplementation();

    appRefresh();

    // get geolocation data
    expect(getGeolocation).toHaveBeenCalled();
    // get weather data for coordinates
    expect(getWeatherByCoord).toHaveBeenCalled();
    // The first argument of the first call to the function was dummyGeo
    expect(getWeatherByCoord.mock.calls[0][0]).toBe(dummyGeo);
    // update all panels with weather data
    expect(updateViews).toHaveBeenCalled();
    expect(updateViews.mock.calls[0][0]).toBe(dummyWeather);
  });
});

describe("Testing event handlers", () => {
  it("cityChanged calls updateForCity with dummyEvent.value", () => {
    updateForCity.mockImplementation();

    cityChanged(dummyEvent);

    expect(updateForCity).toHaveBeenCalled();
    expect(updateForCity.mock.calls[0][0]).toBe(dummyEvent.srcElement.value);
  });

  it("cityClick calls updateForCity with dummyEvent.innerText", () => {
    updateForCity.mockImplementation();

    cityClick(dummyEvent);

    expect(updateForCity).toHaveBeenCalled();
    expect(updateForCity.mock.calls[0][0]).toBe(
      dummyEvent.srcElement.innerText
    );
  });
});

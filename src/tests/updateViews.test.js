import updateViews from "../js/control/updateViews";
import updateWeather from "../js/control/fillWeather";
import updateGeolocation from "../js/control/fillGeolocation";
import updateMap from "../js/control/fillMap";

jest.mock("../js/control/fillWeather");
jest.mock("../js/control/fillGeolocation");
jest.mock("../js/control/fillMap");

const dummyWeather = {
  name: "Yekaterinburg",
};

describe("Testing function updateViews", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls the following sequence: updateGeolocation, updateWeather, updateMap", () => {
    const onCityClick = jest.fn();

    updateViews(dummyWeather, onCityClick);

    // fill panel Geo
    expect(updateGeolocation).toHaveBeenCalledWith(dummyWeather, onCityClick);
    // fill panel Weather with dummyWeather
    expect(updateWeather).toHaveBeenCalledWith(dummyWeather);
    // fill panel Map with dummyWeather
    expect(updateMap).toHaveBeenCalledWith(dummyWeather);
  });
});

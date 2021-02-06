import { getIcon, getStaticMap } from "../js/api/getData";

const dummyWeather = {
  coord: { lon: 60.8, lat: 56.91 },
  name: "Beryozovsky",
  weather: [
    {
      description: "clear sky",
      icon: "01n",
      id: 800,
      main: "Clear",
    },
  ],
};

describe("Testing some functions providing src address to images", () => {
  it("testing function getIcon", () => {
    expect(getIcon(dummyWeather)).toMatch(dummyWeather.weather[0].icon);
  });

  it("testing function getStaticMap", () => {
    const regExp = new RegExp(
      `${dummyWeather.coord.lon}.*${dummyWeather.coord.lat}`
    );

    expect(getStaticMap(dummyWeather)).toMatch(regExp);
  });
});

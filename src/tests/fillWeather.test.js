import fillWeather from "../js/control/fillWeather";
import { getIcon } from "../js/api/getData.js";
import {
  ID_PANEL_WEATHER,
  ID_TEMP,
  ID_FEELS_LIKE,
  ID_PRESSURE,
  ID_ICON,
} from "../js/settings";

const dummyWeather = {
  main: {
    temp: 259.15,
    feels_like: 252.09,
    temp_min: 259.15,
    temp_max: 259.15,
    pressure: 1033,
  },
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

const bodyInnerHTML = `<div id="${ID_PANEL_WEATHER}">`
  .concat(`<div id="${ID_TEMP}"></div>`)
  .concat(`<div id="${ID_ICON}"></div>`)
  .concat(`<div id="${ID_FEELS_LIKE}"></div>`)
  .concat(`<div id="${ID_PRESSURE}"></div>`)
  .concat("</div>");

describe("Testing function fillWeather", () => {
  beforeEach(() => {
    document.body.innerHTML = bodyInnerHTML;
  });

  it("claims that temperature value got from object Weather put to element with specified id. measure name can be concatenated with.", () => {
    fillWeather(dummyWeather);
    const tempValue = document
      .querySelector(`#${ID_TEMP}`)
      .innerText.split(" ")[0];
    expect(Number(tempValue)).toBe(dummyWeather.main.temp);
  });

  it("claims that property img.src got icon address returned by getIcon", () => {
    fillWeather(dummyWeather);
    const iconSrc = document.querySelector(`#${ID_ICON}`).src;
    expect(iconSrc).toBe(getIcon(dummyWeather));
  });
});

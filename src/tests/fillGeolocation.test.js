import fillGeolocation from "../js/control/fillGeolocation";
import readLocalStorage from "../js/api/readLocalStorage.js";
import writeLocalStorage from "../js/api/writeLocalStorage.js";

import { ID_PANEL_GEO, ID_CITY, ID_LIST } from "../js/settings";

const dummyWeather = {
  coord: { lon: 60.8, lat: 56.91 },
  name: "Beryozovsky",
};

const bodyInnerHTML = `<div id="${ID_PANEL_GEO}">`
  .concat(`<div id="${ID_CITY}"></div>`)
  .concat(`<ul id="${ID_LIST}">`)
  .concat(`<li id="${ID_LIST}0"></li>`)
  .concat(`<li id="${ID_LIST}1"></li>`)
  .concat(`<li id="${ID_LIST}2"></li>`)
  .concat(`<li id="${ID_LIST}3"></li>`)
  .concat(`<li id="${ID_LIST}4"></li>`)
  .concat(`<li id="${ID_LIST}5"></li>`)
  .concat(`<li id="${ID_LIST}6"></li>`)
  .concat(`<li id="${ID_LIST}7"></li>`)
  .concat(`<li id="${ID_LIST}9"></li>`)
  .concat("</ul>")
  .concat("</div>");

jest.mock("../js/api/readLocalStorage");
readLocalStorage.mockImplementation((key, resolve) =>
  resolve(dummyWeather.name)
);

jest.mock("../js/api/writeLocalStorage");
writeLocalStorage.mockImplementation();

describe("Testing function fillGeolocation", () => {
  beforeEach(() => {
    document.body.innerHTML = bodyInnerHTML;
  });

  it("claims that city name value got from object Weather put to element with specified id", () => {
    fillGeolocation(dummyWeather);
    expect(document.querySelector(`#${ID_CITY}`).innerText).toBe(
      dummyWeather.name
    );
  });

  it("if call fillGeolocation with no params (object Weather undefined) then elements to be clear", () => {
    fillGeolocation();
    expect(document.querySelector(`#${ID_CITY}`).innerText).toBe("");
  });

  it("claims that city name value got from object Weather was unshifted first into list of cities", () => {
    fillGeolocation(dummyWeather);

    const firstEl = document
      .querySelector(`#${ID_LIST}`)
      .querySelectorAll("li")[0]
      .querySelector("a");
    expect(firstEl.innerHTML).toBe(dummyWeather.name);
  });

  it("if list item has value so it has event listener onClick too", () => {
    const onClick = jest.fn();
    fillGeolocation(dummyWeather, onClick);

    const firstEl = document
      .querySelector(`#${ID_LIST}`)
      .querySelectorAll("li")[0]
      .querySelector("a");
    firstEl.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("another, if list item has no value so it has no event listener onClick either", () => {
    const onClick = jest.fn();
    fillGeolocation(dummyWeather, onClick);

    const secondEl = document
      .querySelector(`#${ID_LIST}`)
      .querySelectorAll("li")[1];
    expect(secondEl.querySelectorAll("a").length).toBe(0);
  });

  it("claims that function calls readLocalStorage and writeLocalStorage", () => {
    fillGeolocation(dummyWeather);
    expect(readLocalStorage).toHaveBeenCalled();
    expect(writeLocalStorage).toHaveBeenCalled();
  });
});

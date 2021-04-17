import fillMap from "../js/control/fillMap";
import { getStaticMap } from "../js/api/getData";
import { ID_PANEL_MAP, ID_MAP } from "../js/settings";

const dummyWeather = {
  coord: { lon: 60.8, lat: 56.91 },
  name: "Beryozovsky",
};

const bodyInnerHTML = `<div id="${ID_PANEL_MAP}">`
  .concat(`<img id="${ID_MAP}"></img>`)
  .concat("</div>");

describe("Testing function fillMap", () => {
  beforeEach(() => {
    document.body.innerHTML = bodyInnerHTML;
  });

  it("claims that property img.src got address returned by getStaticMap", () => {
    fillMap(dummyWeather);
    expect(document.querySelector(`#${ID_MAP}`).src).toBe(
      getStaticMap(dummyWeather)
    );
  });

  it("if has no data recieved property img.src contained no image URL", () => {
    fillMap();
    expect(document.querySelector(`#${ID_MAP}`).src).not.toBe(
      getStaticMap(dummyWeather)
    );
  });
});

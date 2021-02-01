import drawPanelWeather from "../js/view/drawPanelWeather";
import {
  ID_PANEL_WEATHER,
  ID_TEMP,
  ID_FEELS_LIKE,
  ID_PRESSURE,
  ID_ICON,
} from "../js/settings";

describe("Testing function drawPanelWeather", () => {
  let div;

  it(`draws HTMLElement with id = ${ID_PANEL_WEATHER}`, () => {
    div = drawPanelWeather();
    expect(div.id).toBe(ID_PANEL_WEATHER);
  });

  [ID_TEMP, ID_FEELS_LIKE, ID_PRESSURE, ID_ICON].forEach((ident) => {
    it(`this Div includes only one {HTMLElement} Field with id = ${ident}`, () => {
      expect(div.querySelectorAll(`#${ident}`).length).toBe(1);
    });
  });
});

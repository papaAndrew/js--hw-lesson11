import drawPanelGeo from "../js/view/drawPanelGeo";
import { ID_PANEL_GEO, ID_CITY, ID_LAT, ID_LON, ID_LIST } from "../js/settings";

describe("Testing function drawPanelGeo", () => {
  let div;

  it(`draws HTMLElement with id = ${ID_PANEL_GEO}`, () => {
    div = drawPanelGeo();
    expect(div.id).toBe(ID_PANEL_GEO);
  });

  [ID_CITY, ID_LAT, ID_LON, ID_LIST].forEach((ident) => {
    it(`this Div includes only one {HTMLElement} Field with id = ${ident}`, () => {
      expect(div.querySelectorAll(`#${ident}`).length).toBe(1);
    });
  });
});

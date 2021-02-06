import drawPanelMap from "../js/view/drawPanelMap";
import { ID_PANEL_MAP, ID_MAP } from "../js/settings";

describe("Testing function drawPanelMap", () => {
  let div;

  it(`draws HTMLElement with id = ${ID_PANEL_MAP}`, () => {
    div = drawPanelMap();
    expect(div.id).toBe(ID_PANEL_MAP);
  });

  [ID_MAP].forEach((ident) => {
    it(`this Div includes only one {HTMLElement} Field with id = ${ident}`, () => {
      expect(div.querySelectorAll(`#${ident}`).length).toBe(1);
    });
  });
});

import drawBandMap from "../js/view/drawBandMap";
import { ID_BAND_MAP, ID_PANEL_MAP } from "../js/settings";

describe("Testing function drawBandInfo", () => {
  it(`draws HTMLElement with id = ${ID_BAND_MAP}`, () => {
    const div = drawBandMap();
    expect(div.id).toBe(ID_BAND_MAP);
  });

  [ID_PANEL_MAP].forEach((ident) => {
    it(`this Band includes only one Panel with id = ${ident}`, () => {
      const div = drawBandMap();
      expect(div.querySelectorAll(`#${ident}`).length).toBe(1);
    });
  });
});

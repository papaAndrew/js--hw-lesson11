import drawBandInfo from "../js/view/drawBandInfo";
import { ID_BAND_INFO, ID_PANEL_GEO, ID_PANEL_WEATHER } from "../js/settings";

describe("Testing function drawBandInfo", () => {
  it(`draws HTMLElement with id = ${ID_BAND_INFO}`, () => {
    const div = drawBandInfo();
    expect(div.id).toBe(ID_BAND_INFO);
  });

  [ID_PANEL_GEO, ID_PANEL_WEATHER].forEach((ident) => {
    it(`this Band includes only one Panel with id = ${ident}`, () => {
      const div = drawBandInfo();
      expect(div.querySelectorAll(`#${ident}`).length).toBe(1);
    });
  });
});

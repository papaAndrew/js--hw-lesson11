import drawMainDiv from "../js/view/drawMainDiv";
import { ID_MAIN_DIV, ID_BAND_INFO, ID_BAND_MAP } from "../js/settings";

describe("Testing function drawMainDiv", () => {
  it(`draws HTMLElement with id = ${ID_MAIN_DIV}`, () => {
    const div = drawMainDiv();
    expect(div.id).toBe(ID_MAIN_DIV);
  });

  [ID_BAND_INFO, ID_BAND_MAP].forEach((ident) => {
    it(`this Div includes only one Band with id = ${ident}`, () => {
      const div = drawMainDiv();
      expect(div.querySelectorAll(`#${ident}`).length).toBe(1);
    });
  });
});

import drawMainDiv from "../js/view/drawMainDiv";
import { ID_MAIN_DIV, ID_BAND_INFO, ID_BAND_MAP } from "../js/settings";

describe("Testing function drawMainDiv", () => {
  [ID_BAND_INFO, ID_BAND_MAP].forEach((ident) => {
    it(`this Div includes only one Band with id = ${ident}`, () => {
      document.body.innerHTML = `<div id="${ID_MAIN_DIV}"></div>`;

      const div = drawMainDiv();
      expect(div.querySelectorAll(`#${ident}`).length).toBe(1);
    });
  });
});

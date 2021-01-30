import { ID_BAND_MAP } from "../settings.js";
import drawPanelMap from "./drawPanelMap.js";

/**
 * Создает раздел для отрисовки карт и прочего
 * @param {string} ident  идентификтор элемента
 * @returns {HTMLSpanElement}
 */
function drawBandMap() {
  const div = document.createElement("div");
  div.id = ID_BAND_MAP;

  div.appendChild(drawPanelMap());
  return div;
}

export default drawBandMap;

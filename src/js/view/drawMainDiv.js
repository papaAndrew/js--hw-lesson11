import { ID_MAIN_DIV } from "../settings.js";
import drawBandInfo from "./drawBandInfo.js";
import drawBandMap from "./drawBandMap.js";

/**
 * Рисует главный раздел
 */
function drawMainDiv() {
  const div = document.createElement("div");
  div.id = ID_MAIN_DIV;

  // добавить ленту информации
  div.appendChild(drawBandInfo());
  // добавить ленту карт
  div.appendChild(drawBandMap());

  return div;
}

export default drawMainDiv;

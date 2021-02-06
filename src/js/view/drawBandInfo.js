import { ID_BAND_INFO } from "../settings.js";
import drawPanelGeo from "./drawPanelGeo.js";
import drawPanelWeather from "./drawPanelWeather.js";

/**
 * создает ленту информации о погоде
 * @returns {HTMLElement}
 */
function drawBandInfo() {
  const div = document.createElement("div");
  div.id = ID_BAND_INFO;
  // добавляем панель гео
  div.appendChild(drawPanelGeo());
  // добавляем панель погоды
  div.appendChild(drawPanelWeather());
  return div;
}

export default drawBandInfo;

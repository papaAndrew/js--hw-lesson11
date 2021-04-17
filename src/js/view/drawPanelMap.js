import { ID_PANEL_MAP, ID_MAP } from "../settings.js";

/**
 * Создание элемента для отображения карты
 * @returns {HTMLElement}
 */
function drawMap() {
  const img = document.createElement("img");
  img.id = ID_MAP;

  return img;
}
/**
 * Создание панели для отображения карты
 * @returns {HTMLElement}
 */
function drawPanelMap() {
  const span = document.createElement("span");
  span.id = ID_PANEL_MAP;
  span.classList.add("panel-map");

  span.appendChild(drawMap());

  return span;
}

export default drawPanelMap;

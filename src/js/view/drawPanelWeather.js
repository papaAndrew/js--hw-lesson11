import {
  ID_PANEL_WEATHER,
  ID_TEMP,
  ID_FEELS_LIKE,
  ID_PRESSURE,
  ID_ICON,
  LBL_WEATHER,
  LBL_FEELS_LIKE,
  LBL_PRESSURE,
} from "../settings.js";

/**
 * Рисует блок Температура, содержащий значение Т и иконку погоды
 */
function drawTemperature() {
  const div = document.createElement("div");

  const ctrl = document.createElement("span");
  ctrl.id = ID_TEMP;
  ctrl.classList.add("temp-large");
  div.appendChild(ctrl);

  const img = document.createElement("img");
  img.id = ID_ICON;
  img.classList.add("icon-weather");
  div.appendChild(img);

  return div;
}

/**
 * Рисует типовое поле для ввода знаечния с подписью (label)
 * @param {string} ident
 * @param {string} label
 */
function drawSimpleField(ident, label) {
  const div = document.createElement("div");

  if (label) {
    const lbl = document.createElement("span");
    lbl.classList.add("simple-field");
    lbl.innerHTML = label;
    div.appendChild(lbl);
  }

  const ctrl = document.createElement("span");
  ctrl.id = ident;
  ctrl.classList.add("simple-field");
  div.appendChild(ctrl);

  return div;
}

/** создает панель отображения данных геолокации
 *
 * @param {string} ident  идентификтор элемента
 * @returns {HTMLElement}
 */
function drawPanelWeather() {
  const span = document.createElement("span");
  span.id = ID_PANEL_WEATHER;
  span.classList.add("panel");
  span.innerHTML = `<h2>${LBL_WEATHER}</h2>`;

  // добавим поле Температура
  span.appendChild(drawTemperature(ID_TEMP));

  // добавим поле Ощущение
  span.appendChild(drawSimpleField(ID_FEELS_LIKE, LBL_FEELS_LIKE));

  // добавим поле Давление
  span.appendChild(drawSimpleField(ID_PRESSURE, LBL_PRESSURE));

  return span;
}

export default drawPanelWeather;

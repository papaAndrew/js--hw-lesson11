import {
  ID_PANEL_GEO,
  LBL_GEO,
  LBL_CITY,
  LBL_LAT,
  LBL_LON,
  ID_CITY,
  ID_LAT,
  ID_LON,
  ID_LIST,
} from "../settings.js";
import { getCityId } from "../control/fillGeolocation.js";
import { cityChanged } from "../control/app.js";

/**
 * Рисует поле Город, с возможностью ввода значения для поиска
 */
function drawSearchBlock() {
  const div = document.createElement("div");

  const input = document.createElement("input");
  input.id = ID_CITY;
  input.classList.add("get");
  input.addEventListener("change", cityChanged);
  div.appendChild(input);

  const button = document.createElement("button");
  button.classList.add("apply");
  button.innerHTML = LBL_CITY;
  div.appendChild(button);

  return div;
}

/**
 * Рисует список городов для выбора
 */
function drawMemoList() {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  ul.id = ID_LIST;
  ul.classList.add("city-list");

  for (let i = 0; i < 10; i += 1) {
    const li = document.createElement("li");
    li.id = getCityId(i);
    // !!!
    //    li.innerHTML = "(пусто)";
    ul.appendChild(li);
  }
  div.appendChild(ul);

  return div;
}

/**
 * Рисует типовое поле для ввода знаечния с подписью (label)
 * @param {string} ident
 * @param {string} label
 */
function drawSimpleField(ident, label) {
  const div = document.createElement("div");

  const lbl = document.createElement("span");
  lbl.classList.add("simple-field");
  lbl.innerHTML = label;
  div.appendChild(lbl);

  const ctrl = document.createElement("span");
  ctrl.id = ident;
  ctrl.classList.add("simple-field");
  div.appendChild(ctrl);

  return div;
}

/**
 * Создает панель отображения данных геолокации
 * @returns {HTMLSpanElement}
 */
function drawPanelGeo() {
  const span = document.createElement("span");
  span.id = ID_PANEL_GEO;
  span.classList.add("panel");
  span.innerHTML = `<h2>${LBL_GEO}</h2>`;

  // добавим блок поиска
  span.appendChild(drawSearchBlock());

  // добавим поле Широта
  span.appendChild(drawSimpleField(ID_LAT, LBL_LAT));
  // добавим поле Долгота
  span.appendChild(drawSimpleField(ID_LON, LBL_LON));
  // добавим список городов
  span.appendChild(drawMemoList());

  return span;
}

export default drawPanelGeo;

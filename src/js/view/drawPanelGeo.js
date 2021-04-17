import {
  ID_PANEL_GEO,
  LBL_GEO,
  LBL_CITY,
  ID_CITY,
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

    ul.appendChild(li);
  }
  div.appendChild(ul);

  return div;
}

/**
 * Рисует типовое поле для ввода знаечния с подписью (label)
 * @param {string} ident
 * @param {string} label
 *

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

  // добавим список городов
  span.appendChild(drawMemoList());

  return span;
}

export default drawPanelGeo;

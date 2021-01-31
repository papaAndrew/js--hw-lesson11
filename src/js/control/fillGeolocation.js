import {
  ID_PANEL_GEO,
  ID_CITY,
  ID_LAT,
  ID_LON,
  ID_LIST,
  MAX_MEMO_COUNT,
  KEY_LOCAL_STORAGE,
} from "../settings.js";
import readLocalStorage from "../api/readLocalStorage.js";
import writeLocalStorage from "../api/writeLocalStorage.js";
import setValue from "./utils.js";

const NAMES_GEO = [ID_CITY, ID_LAT, ID_LON];

/**
 * Генерирует идентификатор города для хранения и отображения
 * @param {int} index
 */
function getCityId(index) {
  return `${ID_LIST}${index}`;
}

/**
 * Updates Geodata Panel by data from Weather object
 * @param {object} data
 */
function fillGeodata(data) {
  const div = document.querySelector(`#${ID_PANEL_GEO}`);

  NAMES_GEO.forEach((name) => {
    const input = div.querySelector(`#${name}`);
    if (input) {
      if (data) {
        if (name in data) {
          setValue(input, data[name]);
        } else if (name in data.coord) {
          setValue(input, data.coord[name]);
        } else {
          setValue(input);
        }
      } else {
        setValue(input);
      }
    }
  });
}
/**
 * Наполняет данными список ранее упомянутых городов
 * @param {Array} arrayList
 * @param {Function} onClick
 */
function fillCityList(arrayList, onClick) {
  const div = document.querySelector(`#${ID_PANEL_GEO}`);
  const ul = div.querySelector(`#${ID_LIST}`);

  const maxCount =
    arrayList.length > MAX_MEMO_COUNT ? MAX_MEMO_COUNT : arrayList.length;
  for (let i = 0; i < maxCount; i += 1) {
    const lid = getCityId(i);
    const li = ul.querySelector(`#${lid}`);
    li.innerHTML = "";

    const a = document.createElement("a");
    a.innerHTML = arrayList[i];
    a.addEventListener("click", onClick);

    li.appendChild(a);
  }
}

/**
 * Добавляет уникальное название города в список и возвращает результат в виде масиива
 * @param {string} cityName
 * @param {string} commaString
 * @returns {Array}  список городов - массив
 */
function addCityToList(cityName, commaString) {
  let arr = [cityName];
  if (commaString) {
    arr = commaString.split(",");
    // город уже в списке?
    if (arr.indexOf(cityName) < 0) {
      // нет. добавляем в начало и проверяем длину массива
      if (arr.unshift(cityName) > MAX_MEMO_COUNT) {
        // обрезаем массив до лимита
        arr.length = MAX_MEMO_COUNT;
      }
    }
  }
  return arr;
}

/**
 * Сохраняет список городов в localStore
 * @param {Array} valuе
 */
function updateLocalStorage(arrayList) {
  writeLocalStorage(KEY_LOCAL_STORAGE, arrayList.toString());
}

/**
 * Обновление списка городов значениями, сохраненными в localStorage
 * @param {object}  объект Погода
 * @param {Function} callback обработчик события при выборе города (клик на списке)
 */
function updateCityList(data, onClick) {
  const cityName = data.name;
  const promise = readLocalStorage(KEY_LOCAL_STORAGE);
  promise
    .then((commaString) => {
      const arrayList = addCityToList(cityName, commaString);
      fillCityList(arrayList, onClick);
      updateLocalStorage(arrayList);
    })
    .catch(console.log);
}

/**
 * Обновляет панель Геолокация данными из объекта Погода
 * @param {object} data объект, полученный от погодного сервиса
 */
function updateGeolocation(data, onClick) {
  // обновить данные о местности
  fillGeodata(data);
  // обновить список городов и хранилище
  updateCityList(data, onClick);
}

export default updateGeolocation;
export { getCityId };

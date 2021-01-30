import {
  ID_PANEL_GEO,
  ID_CITY,
  ID_LAT,
  ID_LON,
  ID_LIST,
  MAX_MEMO_COUNT,
} from "../settings.js";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../api/utilLocalStorage.js";
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
 * Заполняет список городов данными, переданными в Map
 * @param {Map} map
 */
function fillMemoList(map, onClick) {
  const div = document.querySelector(`#${ID_PANEL_GEO}`);
  const ul = div.querySelector(`#${ID_LIST}`);

  map.forEach((value, key) => {
    const li = ul.querySelector(`#${key}`);
    li.innerHTML = "";

    const a = document.createElement("a");
    a.innerHTML = value;
    a.addEventListener("click", onClick);

    li.appendChild(a);
  });
}
/**
 * Генерация объекта Map, который послужит запросом к локальному хранилищу
 */
function getQueryMap() {
  const map = new Map();

  for (let i = 0; i < MAX_MEMO_COUNT; i += 1) {
    const key = getCityId(i);
    map.set(key);
  }
  return map;
}
/**
 * Находится ли город в списке
 * @param {Map} map
 * @param {string} cityName
 */
function hasCityInList(map, cityName) {
  let res = false;
  // перебор по значениям
  for (const value of map.values()) {
    if (value === cityName) {
      res = true;
      break;
    }
  }
  return res;
}

/**
 * Добавляет город в начало списка, остальные элементы сдвигает вниз
 * @param {Map} map
 * @param {string} cityName город, который нужно добавить в список
 */
function shiftToMap(map, cityName) {
  const maxCount = MAX_MEMO_COUNT;
  const res = new Map();
  let value = cityName;

  for (let i = 0; i < maxCount; i += 1) {
    const key = getCityId(i);
    res.set(key, value);
    value = map.get(key);
    if (!value) {
      break;
    }
  }
  return res;
}
/**
 * Добавляет город в список для хранения и возвращает новый список
 * @param {object} data
 */
function addToMemo(data) {
  let res;
  const cityName = data.name;
  if (cityName) {
    const req = getQueryMap();
    res = loadFromLocalStorage(req);
    if (!hasCityInList(res, cityName)) {
      res = shiftToMap(res, cityName);
    }
  }
  return res;
}
/**
 * Размещает данные на панели Геолокация
 * @param {object} data
 */
function updateGeolocation(data, onClick) {
  fillGeodata(data);

  const map = addToMemo(data);
  fillMemoList(map, onClick);

  saveToLocalStorage(map);
}

export default updateGeolocation;
export { getCityId };

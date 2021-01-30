import {
  getGeolocation,
  getWeatherByCoord,
  getWeatherByCity,
} from "../api/getData.js";
import updateWeather from "./fillWeather.js";
import updateGeolocation from "./fillGeolocation.js";
import updateMap from "./fillMap.js";

function writeError(data) {
  // div.querySelector(namesGeo[0]).innerHTML = `Ошибка: ${data.message}`;
  console.log(`message: ${data.message}`);
}

/**
 * Обновить данные в панелях
 * @param {object} data данные о погоде
 */
function updateViews(data) {
  try {
    updateGeolocation(data, cityClick);
    updateWeather(data);
    updateMap(data);
  } catch (err) {
    console.log(err.message);
  }
}

/**
 * Updates (fetches data of) all elemets in main div
 */
function appRefresh() {
  // очистить погоду
  updateWeather();
  // получить геоданные
  getGeolocation(
    // получить погоду и обновить панели
    (data) => getWeatherByCoord(data, updateViews, writeError),
    writeError
  );
}

/**
 * Обновление всего при изменении города тем или иным образом. Если город не указан, обновляем по геолокации, как при старте
 * @param {string} cityName   название города
 */
function updateForCity(cityName) {
  if (cityName) {
    const params = { name: `${cityName}` };
    getWeatherByCity(params, updateViews, writeError);
  } else {
    appRefresh();
  }
}

/**
 * Обработчик события клик на город в списке городов
 * @param {object} sender предполагается anchor
 */
function cityClick(event) {
  updateForCity(event.srcElement.innerText);
}

/**
 * Обработчик события Введен город
 */
function cityChanged(event) {
  updateForCity(event.srcElement.value);
}

export default appRefresh;
export { cityChanged };

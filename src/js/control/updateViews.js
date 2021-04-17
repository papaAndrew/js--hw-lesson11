import updateGeolocation from "./fillGeolocation.js";
import updateWeather from "./fillWeather.js";
import updateMap from "./fillMap.js";

/**
 * Обновить данные в панелях данными о погоде
 * @param {object} data объект Погода
 * @param {Function} onClick обработчик события Клик_На_Город
 */
function updateViews(data, onClick) {
  updateGeolocation(data, onClick);
  updateWeather(data);
  updateMap(data);
}

export default updateViews;

import getGeolocation from "../api/getGeolocation.js";
import getWeatherByCoord from "../api/getWeatherByCoord.js";
import updateWeather from "./fillWeather.js";
import updateViews from "./updateViews";
import updateForCity from "./updateForCity";

/**
 * Updates (fetches data of) all elemets in main div
 */
function appRefresh() {
  // очистить погоду
  updateWeather();
  // получить геоданные
  getGeolocation(
    // получить погоду и обновить панели
    (dataGeo) =>
      getWeatherByCoord(
        dataGeo,
        (dataWeather) => updateViews(dataWeather, cityClick),
        console.log
      ),
    console.log
  );
}

/**
 * Обработчик события клик на город в списке городов
 * @param {object} sender предполагается anchor
 */
function cityClick(event) {
  updateForCity(event.srcElement.innerText, cityClick, appRefresh);
}

/**
 * Обработчик события Введен город
 */
function cityChanged(event) {
  updateForCity(event.srcElement.value, cityClick, appRefresh);
}

export default appRefresh;
export { cityChanged, cityClick, updateViews };

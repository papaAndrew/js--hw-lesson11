import getWeatherByCity from "../api/getWeatherByCity.js";
import updateViews from "./updateViews.js";

/**
 * Обновление всего при изменении города тем или иным образом. Если город не указан, обновляем по геолокации, как при старте
 * @param {string} cityName   название города
 * @param {Function} onClick  обработчик события Клик_На_Город
 * @param {Function} onRefresh  функция по умолчанию обновления всего
 */
function updateForCity(cityName, onClick, onRefresh) {
  if (cityName) {
    getWeatherByCity(
      cityName,
      (data) => updateViews(data, onClick),
      console.log
    );
  } else {
    onRefresh();
  }
}

export default updateForCity;

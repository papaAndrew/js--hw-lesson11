import getDataByHttpGet from "./getDataByHttpGet.js";

const API_KEY = "20e3e4bc1a756a121ab11b81e7a51e7b";

/**
 * Получение данных Погода по координатам
 * @param {object} params  JSON, возвращаемый сервисом геолокации
 * @param {Function} resolve
 * @param {Function} reject
 */
function getWeatherByCoord(params, resolve, reject) {
  if (params) {
    if ("latitude" in params && "longitude" in params) {
      const { latitude, longitude } = params;
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
      getDataByHttpGet(url, resolve, reject);
    }
  }
}

export default getWeatherByCoord;

import getDataByHttpGet from "./getDataByHttpGet.js";

const API_KEY = "20e3e4bc1a756a121ab11b81e7a51e7b";

/**
 * Получение данных Погода по координатам
 * @param {object} params  JSON, возвращаемый сервисом геолокации
 * @param {Function} resolve
 * @param {Function} reject
 */
function getWeatherByCoord(params, resolve, reject) {
  const { latitude, longitude } = params;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

  getDataByHttpGet(url).then(
    (data) => resolve(data),
    (data) => reject(data)
  );
}

export default getWeatherByCoord;

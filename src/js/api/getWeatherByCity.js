import getDataByHttpGet from "./getDataByHttpGet.js";

const API_KEY = "20e3e4bc1a756a121ab11b81e7a51e7b";

/**
 * Получение данных Погода по названию города
 * @param {string} cityName  город
 * @param {Function} resolve
 * @param {Function} reject
 */
async function getWeatherByCity(cityName, resolve, reject) {
  if (cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

    getDataByHttpGet(url).then(
      (data) => {
        try {
          resolve(data);
        } catch (err) {
          console.log(err);
          reject(err);
        }
      },
      (data) => reject(data)
    );
  }
}

export default getWeatherByCity;

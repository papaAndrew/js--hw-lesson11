import getDataByHttpGet from "./getDataByHttpGet.js";

const URL = "https://get.geojs.io/v1/ip/geo.json";

/**
 * Получение данных Голокация
 * @param {Function} resolve
 * @param {Function} reject
 */
function getGeolocation(resolve, reject) {
  getDataByHttpGet(URL).then(
    (data) => resolve(data),
    (data) => reject(data)
  );
}

export default getGeolocation;

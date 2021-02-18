/**
 * Возвращает ссылку url на иконку, соотв. погоде
 * @param {object} data JSON, возвращаемый сервисом погоды
 * @returns {string} url
 */
function getIcon(data) {
  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return url;
}
/**
 * Получение данных от какого-нибудь сериса Static Map, для отрисовки карты по данным геолокации
 * Возвращает ссылку на картинку
 * @param {object} params   объект с данными, который возворащает погодный сервис
 * @returns {string} url для отрисовки карты
 */
function getStaticMap(params) {
  const layer = "sat,skl";
  const zoom = "13";
  const { lon, lat } = params.coord;

  const url = `https://static-maps.yandex.ru/1.x/?l=${layer}&ll=${lon},${lat}&z=${zoom}`;

  return url;
}

export { getIcon, getStaticMap };

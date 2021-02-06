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
  /* https://yandex.ru/dev/maps/staticapi/doc/1.x/dg/concepts/input_params.html
   */
  // Перечень слоев, определяющих тип карты: map (схема), sat (спутник) и sat,skl (гибрид). Перечень слоев, определяющих тип карты: map (схема), sat (спутник) и sat,skl (гибрид). Подробнее см. Слои и типы карты.
  const l = "sat,skl";
  // Уровень масштабирования карты (0-17), см. Уровень масштабирования карты.
  const z = "13";
  // Долгота и широта центра карты в градусах, см. Центр карты.
  const { lon, lat } = params.coord;
  const url = `https://static-maps.yandex.ru/1.x/?l=${l}&ll=${lon},${lat}&z=${z}`;

  return url;
}

export { getIcon, getStaticMap };

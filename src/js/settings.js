export const ID_MAIN_DIV = "mainDiv";
export const LBL_MAIN_HEADER = "Погода";
/**
 * Идентификаторы лент
 */
export const [ID_BAND_INFO, ID_BAND_MAP] = ["band-info", "band-map"];
/**
 * Заголовки панелей
 */
export const [LBL_GEO, LBL_WEATHER] = ["Здесь", "Сейчас"];

// === Лента Информация
/**
 * Идентификторы панелей ленты Информация
 */
export const [ID_PANEL_GEO, ID_PANEL_WEATHER] = [
  "panel-filters",
  "panel-geo",
  "panel-weather",
];

// ==== Панель Геолокация
/**
 * Подписи к элементам панели Геолокация
 */
export const [LBL_CITY, LBL_LAT, LBL_LON] = ["Показать", "Широта", "Долгота"];
/**
 * Идентификаторы элементов на панели Геолокация
 */
export const [ID_CITY, ID_LAT, ID_LON, ID_LIST] = [
  "name",
  "lat",
  "lon",
  "city-list",
];
/**
 * Макс. количество сохраянемых городов
 */
export const MAX_MEMO_COUNT = 10;

// ==== Панель Погода
/**
 * Идентификаторы элементов на панели Погода
 */
export const [ID_TEMP, ID_FEELS_LIKE, ID_PRESSURE, ID_ICON] = [
  "temp",
  "feels_like",
  "pressure",
  "icon_weather",
];
/**
 * Подписи к элементам панели Погода
 */
export const [LBL_FEELS_LIKE, LBL_PRESSURE] = ["Ощущается как", "Давление"];

// === Лента Карты
/**
 * Идентификторы панелей ленты Карты
 */
export const ID_PANEL_MAP = "panel-map";
/**
 * Идентификаторы элементов на панели Карта
 */
export const ID_MAP = "static-map";

import { getGeolocation } from "./appmain.js";
/** Создайте страницу:
1.1 при открытии страницы пользователь видит погоду (город, температуру и иконку) в своей местности
(для получения прогноза погоды используйте https://openweathermap.org/current )
1.2 он может ввести имя города в поле ввода и увидеть погоду в выбранном городе
1.3 введенные города сохраняются у пользователя в браузере, так что он видит последние 10 городов, где он смотрел погоду
1.4 при клике по строчке города в списке он видит погоду в выбранном городе
1.5 кроме информации о погоде покажите в центре страницы карту для введенного адреса (используйте Google Maps Statis API https://developers.google.com/maps/documentation/maps-static/start )
Проверить покрытие кода тестами, и добавить проверку покрытия при запуске test скрипта. Покрытие должно быть не ниже 60%
*/

describe("There are testing functions get data from any apis", () => {
  it("provide geolocation object having longitude and latitude properties", () => {
    const geo = getGeolocation();

    expect(geo.longitude).toEqual(1);
    expect(geo.latitude).toEqual(1);
  });

  // it("provide weather data object by coordinates", () => {
  //
  // });

  // it("provide weather icon", () => {
  //
  // });
  //
  // it("provide weather object by city name", () => {
  //
  // });
});

// describe("There are testing visual components, markup and usage", () => {
//
//   it("inputs city name end recieves weather info", () => {
//
//   });
//
//   it("stores used sity names to list-field", () => {
//
//   });
//
//   it("clicks on list of cities and gets weather for selected item", () => {
//
//   });
//
//   it("shows an image (of google map) for required location", () => {
//
//   });
// });

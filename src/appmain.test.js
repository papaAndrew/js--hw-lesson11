import {
  getDataByHttpGet,
  getWeatherHere,
  getWeatherByCoord,
  drawMainFrame,
  drawWeather,
  drawNoWeather,
} from "./appmain.js";
// import fetch from 'node-fetch';

/** Создайте страницу:
1.1 при открытии страницы пользователь видит погоду (город, температуру и иконку) в своей местности
(для получения прогноза погоды используйте https://openweathermap.org/current )
1.2 он может ввести имя города в поле ввода и увидеть погоду в выбранном городе
1.3 введенные города сохраняются у пользователя в браузере, так что он видит последние 10 городов, где он смотрел погоду
1.4 при клике по строчке города в списке он видит погоду в выбранном городе
1.5 кроме информации о погоде покажите в центре страницы карту для введенного адреса (используйте Google Maps Statis API https://developers.google.com/maps/documentation/maps-static/start )
Проверить покрытие кода тестами, и добавить проверку покрытия при запуске test скрипта. Покрытие должно быть не ниже 60%
*/

const rsError = {
  ok: false,
  status: 300,
  statusText: "300 Temporary out of service",
};
const rsOk = {
  ok: true,
  status: 200,
  statusText: "200 OK",
};

const dummyGeo = {
  organization_name: "LLC Cifrovie Seti Urala",
  region: "Sverdlovsk Oblast",
  accuracy: 100,
  asn: 56947,
  organization: "AS56947 LLC Cifrovie Seti Urala",
  timezone: "Asia/Yekaterinburg",
  longitude: "60.7921",
  country_code3: "RUS",
  area_code: "0",
  ip: "0.00.00.000",
  city: "Yekaterinburg",
  country: "Russia",
  continent_code: "EU",
  country_code: "RU",
  latitude: "56.9038",
};
const dummyWeather = { temperature: 0 };
// const dummyWeatherError = {
//   "cod":"400",
//   "message":"Nothing to geocode"
// };

describe("There are testing markup", () => {
  it("draws common markup on start app", () => {
    drawMainFrame();

    expect(document.querySelector("#show")).toBeDefined();
  });

  describe("There are testing how data draws", () => {
    let div;
    beforeEach(() => {
      document.querySelector("#show").remove();
      drawMainFrame();
      div = document.querySelector("#show");
    });

    it("draws weather with dummy", () => {
      drawWeather(dummyWeather);

      const pp = div.querySelectorAll("p");
      expect(pp).toBeDefined();
      expect(pp.length).toBe(2);
    });

    it("draws error if data was not received", () => {
      drawNoWeather(rsError);

      const pp = div.querySelectorAll("p");
      expect(pp).toBeDefined();
      expect(pp.length).toBe(1);
    });
  });
});

describe("Testing common function getDataByHttpGet", () => {
  it("calls back function with response containing property response.ok", () => {
    global.fetch = jest.fn(() => new Promise((resolve) => resolve(rsOk)));

    getDataByHttpGet(0, (response) => {
      expect("ok" in response).toBe(true);
    });
  });

  it("is fetch resolved, response.ok is true", () => {
    global.fetch = jest.fn(() => new Promise((resolve) => resolve(rsOk)));

    getDataByHttpGet(0, (response) => {
      expect(response.ok).toBe(true);
    });
  });

  it("is fetch rejected, response.ok is false", () => {
    // global.fetch = jest.fn(() => new Promise(resolve => reject({"ok": false})));
    jest
      .spyOn(global, "fetch")
      .mockImplementation(() => new Promise((reject) => reject(rsError)));

    getDataByHttpGet(0, (response) => {
      expect(response.ok).toBe(false);
    });
  });
});

describe("Testing data receives and showes at the site", () => {
  const rsGeo = { ...rsOk, json: () => dummyGeo };
  const rsWeather = { ...rsOk, json: () => dummyWeather };
  const { longitude: lon, latitude: lat } = dummyGeo;
  const { temperature: t } = dummyWeather;
  let div;

  beforeEach(() => {
    //    document.querySelector("#show").remove();
    drawMainFrame();
    div = document.querySelector("#show");
  });

  it(`claims that weather for longitude ${lon} and latitude ${lat} shows in p.innerHTML`, () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(() => new Promise((resolve) => resolve(rsWeather)));

    getWeatherByCoord(lon, lat);

    const pp = div.querySelectorAll("p");
    expect(pp[0].innerHTML).toMatch(new RegExp(`${t}`));
  });

  it(`claims that weather for current location shows in p.innerHTML`, () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => new Promise((resolve) => resolve(rsGeo)))
      .mockImplementationOnce(
        () => new Promise((resolve) => resolve(rsWeather))
      );

    getWeatherHere();

    const pp = div.querySelectorAll("p");
    expect(pp[0].innerHTML).toMatch(new RegExp(`${t}`));
  });
});

// it("provide weather icon", () => {
//
// });
//
// it("provide weather object by city name", () => {
//
// });

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

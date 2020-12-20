// export function getGeolocationFromBrowser() {
//
//   var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
//
//   function success(pos) {
//     var crd = pos.coords;
//
//     console.log('Ваше текущее метоположение:');
//     console.log(`Широта: ${crd.latitude}`);
//     console.log(`Долгота: ${crd.longitude}`);
//     console.log(`Плюс-минус ${crd.accuracy} метров.`);
//   };
//
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   };
//
//   navigator.geolocation.getCurrentPosition(success, error, options);
// }

export function getDataByHttpGet(url, callback) {
  //  const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
  const promise = fetch(url);
  promise
    .then((response) => {
      callback(response);
    })
    .catch((response) => {
      callback(response);
    });
}

export function drawNoWeather(response) {
  const div = document.querySelector("#show");

  const p = document.createElement("p");
  p.innerHTML = `Не удалось получить данные: ${response.statusText}`;
  div.appendChild(p);
}

export function drawWeather(weather) {
  const div = document.querySelector("#show");
  let p = document.createElement("p");
  p.innerHTML = `Днем: ${weather.temperature}`;
  div.appendChild(p);

  p = document.createElement("p");
  p.innerHTML = `Ночью: `;
  div.appendChild(p);
  //  console.log(div.innerHTML);
}

export function getWeatherByCoord(lon, lat) {
  const apiKey = "20e3e4bc1a756a121ab11b81e7a51e7b";
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  getDataByHttpGet(url, (response) => {
    if (response.ok) {
      // const weather = response.json();
      drawWeather(response.json());
    } else {
      drawNoWeather(response);
    }
  });
}

export function getWeatherHere() {
  const url = "https://get.geojs.io/v1/ip/geo.json";

  getDataByHttpGet(url, (response) => {
    // console.log(response);
    if (response.ok) {
      const geo = response.json();
      // console.log("Координаты", geo.longitude, geo.latitude);
      getWeatherByCoord(geo.longitude, geo.latitude);
    }
  });
}

export function drawMainFrame() {
  const div = document.createElement("div");
  div.id = "show";
  document.body.appendChild(div);
}

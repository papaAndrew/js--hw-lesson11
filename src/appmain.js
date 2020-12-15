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

export function getDataByHttpGet(url) {
  //  const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
  const httpRequest = new XMLHttpRequest();

  let result;

  httpRequest.onload = function () {
    result = [this.status, this.responseText];
  };

  httpRequest.onerror = function () {
    result = [this.status, this.statusText];
  };

  httpRequest.open("GET", url, true);
  httpRequest.send();
  return result;
}

export function getGeolocation() {
  const url = "https://get.geojs.io/v1/ip/geo.json";

  let geo;
  const [status, response] = getDataByHttpGet(url);
  if (status === 200) {
    geo = JSON.parse(response);
  }
  return geo;
}

export function getWeatherByCoord(lon, lat) {
  const apiKey = "20e3e4bc1a756a121ab11b81e7a51e7b";
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  let wheather;
  const [status, response] = getDataByHttpGet(url);
  if (status === 200) {
    wheather = JSON.parse(response);
  }
  return wheather;
}

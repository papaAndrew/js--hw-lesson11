!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=3)}([function(n,e,t){"use strict";var r=t(2),a=t.n(r)()((function(n){return n[1]}));a.push([n.i,"* {\n  margin: 0;\n  padding: 0;\n}\n\nh2 {\n  color: darkslategrey;\n}\n\nbody {\n  background-color: aliceblue;\n}\n\ninput {\n  background-color: aliceblue;\n  border-style: none;\n  font-weight: bold;\n  margin-left: 1rem;\n}\n\nspan.panel {\n  width: 42%;\n  margin: 2%;\n  display: inline-block;\n  color: darkslategrey;\n  vertical-align: top;\n  background-color: lightpink;\n  padding: 1%;\n  min-height: 12rem;\n}\n\nspan.panel h2 {\n  color: darkslategrey;\n  padding: 1rem;\n  align-self: start;\n}\n\nspan.panel p div {\n  display: inline-block;\n  color: darkslategrey;\n  padding: 5px;\n  min-width: 120px;\n}\n\nspan.panel p input {\n  display: inline-block;\n  color: darkslateblue;\n  padding: 5px;\n  min-width: 120px;\n  background-color: inherit;\n}\n\nbutton.apply {\n  width: 35%;\n  min-width: 7rem;\n  display: inline-block;\n  font-size: 18px;\n  padding: 5px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\ninput.big {\n  font-size: 22px;\n}\ninput.get {\n  width: 55%;\n  min-width: 6rem;\n  display: inline-block;\n  font-size: 18px;\n  border-style: solid;\n  border-color: blueviolet;\n  margin: 5px;\n  padding: 5px;\n}\n\nspan.panel div {\n  padding: 5px;\n  font-size: 18px;\n}\n\n.simple-field {\n  width: 45%;\n  padding: 5px;\n}\n\n.temp-large {\n  display: inline-block;\n  width: 55%;\n  min-width: 50px;\n  padding: 5px;\n  font-size: 50px;\n  font-weight: bold;\n}\n\n.icon-weather {\n  display: inline-block;\n  width: 10%;\n  height: 10%;\n  padding: 5px;\n  background-color: lightgray;\n}\n\n.city-list {\n  margin: 20px;\n}\n\n.panel-map {\n  margin: 2%;\n  display: inline-block;\n  vertical-align: top;\n}\n",""]),e.a=a},function(n,e,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function c(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],a=0;a<n.length;a++){var i=n[a],l=e.base?i[0]+e.base:i[0],d=t[l]||0,u="".concat(l," ").concat(d);t[l]=d+1;var p=c(u),s={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(o[p].references++,o[p].updater(s)):o.push({identifier:u,updater:v(s,e),references:1}),r.push(u)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,p=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function s(n,e,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=p(e,a);else{var i=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(n,e){var t,r,a;if(e.singleton){var i=h++;t=m||(m=d(e)),r=s.bind(null,t,i,!1),a=s.bind(null,t,i,!0)}else t=d(e),r=f.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var a=c(t[r]);o[a].references--}for(var i=l(n,e),d=0;d<t.length;d++){var u=c(t[d]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=i}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(0),o={insert:"head",singleton:!1};a()(i.a,o),i.a.locals;var c=function(n,e,t){(function(n){return new Promise((function(e){e(localStorage.getItem(n))}))})(n).then(e,t)};var l=function(n,e,t,r){(function(n,e){return new Promise((function(t){localStorage.setItem(n,e),t(localStorage.getItem(n))}))})(n,e).then(t,r)};var d=function(n,e,t){var r="",a=n;e?r=e:t&&(r=t),"value"in n?a.value=r:a.innerText=r},u=["name","lat","lon"];function p(n){return"".concat("city-list").concat(n)}function s(n,e){var t=n.name;c("memo-weather-citylist",(function(n){var r=function(n,e){var t=[n];return e&&(t=e.split(",")).indexOf(n)<0&&t.unshift(n)>10&&(t.length=10),t}(t,n);!function(n,e){for(var t=document.querySelector("#".concat("panel-geo")).querySelector("#".concat("city-list")),r=n.length>10?10:n.length,a=0;a<r;a+=1){var i=p(a),o=t.querySelector("#".concat(i));o.innerHTML="";var c=document.createElement("a");c.innerHTML=n[a],c.addEventListener("click",e),o.appendChild(c)}}(r,e),function(n){l("memo-weather-citylist",n.toString())}(r)}),console.log)}var f=function(n,e){!function(n){var e=document.querySelector("#".concat("panel-geo"));u.forEach((function(t){var r=e.querySelector("#".concat(t));r&&(n?d(r,n[t]):d(r))}))}(n),n&&s(n,e)};var m=function(n){return fetch(n).then((function(n){return n.json()})).catch(new Error("Not available ".concat(n)))};var h=function(n,e){m("https://get.geojs.io/v1/ip/geo.json").then((function(e){return n(e)}),(function(n){return e(n)}))};var v=function(n,e,t){var r=n.latitude,a=n.longitude,i="https://api.openweathermap.org/data/2.5/weather?lat=".concat(r,"&lon=").concat(a,"&units=metric&appid=").concat("20e3e4bc1a756a121ab11b81e7a51e7b");m(i).then((function(n){return e(n)}),(function(n){return t(n)}))};var g=function(n){var e=["temp","feels_like","pressure"],t=["°C","°C","Па"],r=document.querySelector("#".concat("panel-weather"));n&&(r.querySelector("#".concat("icon_weather")).src=function(n){return"http://openweathermap.org/img/wn/".concat(n.weather[0].icon,"@2x.png")}(n)),e.forEach((function(e,a){var i=r.querySelector("#".concat(e));i&&(n?d(i,e in n.main?"".concat(n.main[e]," ").concat(t[a]):""):d(i))}))};var b=function(n){var e,t,r,a=document.querySelector("#".concat("panel-map")).querySelector("#".concat("static-map"));a.src=n?(e=n.coord,t=e.lon,r=e.lat,"https://static-maps.yandex.ru/1.x/?l=".concat("sat,skl","&ll=").concat(t,",").concat(r,"&z=").concat("13")):""};var y=function(n,e){f(n,e),g(n),b(n)};function w(n,e,t,r,a,i,o){try{var c=n[i](o),l=c.value}catch(n){return void t(n)}c.done?e(l):Promise.resolve(l).then(r,a)}function x(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){w(i,r,a,o,c,"next",n)}function c(n){w(i,r,a,o,c,"throw",n)}o(void 0)}))}}function C(){return(C=x(regeneratorRuntime.mark((function n(e,t,r){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat("20e3e4bc1a756a121ab11b81e7a51e7b"),m(a).then((function(n){return t(n)}),(function(n){return r(n)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var E=function(n,e,t){return C.apply(this,arguments)};var S=function(n,e,t){n?E(n,(function(n){return y(n,e)}),console.log):t()};function k(){g(),h((function(n){return v(n,(function(n){return y(n,L)}),console.log)}),console.log)}function L(n){S(n.srcElement.innerText,L,k)}function M(n){S(n.srcElement.value,L,k)}var T=k;function j(n,e){var t=document.createElement("div"),r=document.createElement("span");r.classList.add("simple-field"),r.innerHTML=e,t.appendChild(r);var a=document.createElement("span");return a.id=n,a.classList.add("simple-field"),t.appendChild(a),t}var q=function(){var n=document.createElement("span");return n.id="panel-geo",n.classList.add("panel"),n.innerHTML="<h2>".concat("Здесь","</h2>"),n.appendChild(function(){var n=document.createElement("div"),e=document.createElement("input");e.id="name",e.classList.add("get"),e.addEventListener("change",M),n.appendChild(e);var t=document.createElement("button");return t.classList.add("apply"),t.innerHTML="Показать",n.appendChild(t),n}()),n.appendChild(j("lat","Широта")),n.appendChild(j("lon","Долгота")),n.appendChild(function(){var n=document.createElement("div"),e=document.createElement("ul");e.id="city-list",e.classList.add("city-list");for(var t=0;t<10;t+=1){var r=document.createElement("li");r.id=p(t),e.appendChild(r)}return n.appendChild(e),n}()),n};function O(n,e){var t=document.createElement("div");if(e){var r=document.createElement("span");r.classList.add("simple-field"),r.innerHTML=e,t.appendChild(r)}var a=document.createElement("span");return a.id=n,a.classList.add("simple-field"),t.appendChild(a),t}var _=function(){var n=document.createElement("span");return n.id="panel-weather",n.classList.add("panel"),n.innerHTML="<h2>".concat("Сейчас","</h2>"),n.appendChild(function(){var n=document.createElement("div"),e=document.createElement("span");e.id="temp",e.classList.add("temp-large"),n.appendChild(e);var t=document.createElement("img");return t.id="icon_weather",t.classList.add("icon-weather"),n.appendChild(t),n}()),n.appendChild(O("feels_like","Ощущается как")),n.appendChild(O("pressure","Давление")),n};var H=function(){var n=document.createElement("div");return n.id="band-info",n.appendChild(q()),n.appendChild(_()),n};var P=function(){var n,e=document.createElement("span");return e.id="panel-map",e.classList.add("panel-map"),e.appendChild(((n=document.createElement("img")).id="static-map",n)),e};var N=function(){var n=document.createElement("div");return n.id="band-map",n.appendChild(P()),n};var z=function(){var n=document.createElement("div");return n.id="mainDiv",n.appendChild(H()),n.appendChild(N()),n};document.body.appendChild(z()),T()}]);
import "./css/style.css";
import drawMainDiv from "./js/view/drawMainDiv.js";
import appRefresh from "./js/control/app.js";
/*
 */

// добавить главный раздел
document.body.appendChild(drawMainDiv());

// запуск
appRefresh();

import drawMainDiv from "./view/drawMainDiv.js";
import appRefresh from "./control/app.js";
/*
 */

// добавить главный раздел
document.body.appendChild(drawMainDiv());

// запуск
appRefresh();

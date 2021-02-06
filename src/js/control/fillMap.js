import { getStaticMap } from "../api/getData.js";
import { ID_PANEL_MAP, ID_MAP } from "../settings.js";

/**
 * Обновление данных на панели Карта
 * @param {object} data
 */
function updateMap(data) {
  const div = document.querySelector(`#${ID_PANEL_MAP}`);
  const img = div.querySelector(`#${ID_MAP}`);

  if (data) {
    img.src = getStaticMap(data);
  } else {
    img.src = "";
  }
}

export default updateMap;

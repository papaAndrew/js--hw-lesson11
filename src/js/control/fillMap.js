import { getStaticMap } from "../api/getData.js";
import { ID_PANEL_MAP, ID_MAP } from "../settings.js";

/**
 * Обновление данных на панели Карта
 * @param {object} data
 */
function updateMap(data) {
  const div = document.querySelector(`#${ID_PANEL_MAP}`);

  try {
    if (data) {
      const img = div.querySelector(`#${ID_MAP}`);
      img.src = getStaticMap(data);
    }
  } catch (err) {
    console.log(`resolve error: ${err}`);
  }
}

export default updateMap;

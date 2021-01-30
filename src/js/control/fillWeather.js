import {
  ID_PANEL_WEATHER,
  ID_ICON,
  ID_TEMP,
  ID_FEELS_LIKE,
  ID_PRESSURE,
} from "../settings.js";
import setValue from "./utils.js";
import { getIcon } from "../api/getData.js";

const EMPTY_DATA = "";

/**
 * Заполняет данными панель Погода
 * @param {object} data
 */
function updateWeather(data) {
  const NAMES_WEATHER = [ID_TEMP, ID_FEELS_LIKE, ID_PRESSURE];
  const MEA = ["°C", "°C", "Па"];

  try {
    const div = document.querySelector(`#${ID_PANEL_WEATHER}`);

    if (data) {
      const img = div.querySelector(`#${ID_ICON}`);
      img.src = getIcon(data);
    }

    NAMES_WEATHER.forEach((name, i) => {
      const el = div.querySelector(`#${name}`);
      if (el) {
        if (data) {
          setValue(
            el,
            name in data.main ? `${data.main[name]} ${MEA[i]}` : EMPTY_DATA
          );
        } else {
          setValue(el);
        }
      }
    });
  } catch (err) {
    console.log(`resolve error: ${err}`);
  }
}

export default updateWeather;

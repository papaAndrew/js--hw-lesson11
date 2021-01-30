/**
 * Сохраняет содержимое Map в локальное хранилище
 * @param {Map} map собственно
 */
function saveToLocalStorage(map) {
  map.forEach((value, key) => {
    localStorage.setItem(key, value);
  });
}

/**
 * Загружает из локального хранилища значения ключей, переданных в Map.
 * Возвращает заполненный Map.
 * @param {Map} map
 * @returns {Map}
 */
function loadFromLocalStorage(map) {
  const res = new Map();

  for (const key of map.keys()) {
    const val = localStorage.getItem(key);
    if (val) {
      res.set(key, val);
    }
  }
  return res;
}

export { loadFromLocalStorage, saveToLocalStorage };

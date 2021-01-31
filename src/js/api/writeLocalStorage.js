/**
 * Записывет значение key, value в хранилище localStorage
 * @param {string} key
 * @param {string} value
 * @param {Function} resolve
 * @param {Function} reject
 */
function writeLocalStorage(key, value) {
  return new Promise((resolve, reject) => {
    try {
      resolve(localStorage.setItem(key, value));
    } catch (err) {
      reject(err);
    }
  });
}

export default writeLocalStorage;

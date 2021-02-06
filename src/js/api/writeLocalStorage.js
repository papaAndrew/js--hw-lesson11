/**
 * Записывает асинхронно значение key в хранилище localStorage. тут же считывает это значение и возвращает его же через Промис
 * @param {string} key
 * @param {string} value
 */
function lsSetItem(key, value) {
  return new Promise((resolve) => {
    localStorage.setItem(key, value);
    resolve(localStorage.getItem(key));
  });
}

/**
 * Записывает асинхронно значение key в хранилище localStorage. тут же считывает это значение и возвращает его же через callback
 * @param {string} key
 * @param {string} value
 * @param {Function} resolve
 * @param {Function} reject
 */
function writeLocalStorage(key, value, resolve, reject) {
  const promise = lsSetItem(key, value);
  promise.then(resolve).catch(reject);
}

export default writeLocalStorage;

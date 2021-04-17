/**
 * Считывает асинхронно значение key из хранилища localStorage. значение возвращает через Промис
 * @param {string} key
 * @returns {Promise}
 */
function lsGetItem(key) {
  return new Promise((resolve) => {
    resolve(localStorage.getItem(key));
  });
}

/**
 * Считывает асинхронно значение key из хранилища localStorage. результат возвращает через callback
 * @param {object} key объект Погода
 * @param {Function} resolve функция обработки результата
 * @param {Function} reject функция обработки ошибки
 */
function readLocalStorage(key, resolve, reject) {
  const promise = lsGetItem(key);
  promise.then(resolve, reject);
}

export default readLocalStorage;

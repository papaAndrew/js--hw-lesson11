const ERR_MESSAGE = "Не удалось получить данные";

/**
 * Выполняет запрос к API по url и в зависмости от результата вызывает callback
 * @param {string} url  собственно
 * @param {Function} resolve callback на успех
 * @param {Function} reject callback на ошибку
 */
function getDataByHttpGet(url, resolve, reject) {
  console.log(url);
  const promise = fetch(url);
  promise
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(() => reject({ message: `${ERR_MESSAGE} от \n${url}` }));
}

export default getDataByHttpGet;

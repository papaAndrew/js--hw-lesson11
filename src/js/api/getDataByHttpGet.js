/**
 * Выполняет запрос к API по url и в зависмости от результата вызывает callback
 * @param {string} url  собственно
 */
function getDataByHttpGet(url) {
  return fetch(url)
    .then((res) => res.json())
    .catch(new Error(`Not available ${url}`));
}

export default getDataByHttpGet;

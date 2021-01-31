/**
 * Считывает значение key из хранилища localStorage
 * @param {string} key
 * @param {Function} resolve
 * @param {Function} reject
 */
function readLocalStorage(key) {
  return new Promise((resolve, reject) => {
    try {
      resolve(localStorage.getItem(key));
    } catch (err) {
      reject(err);
    }
  });
}

export default readLocalStorage;

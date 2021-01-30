/**
 * Записать значение в текст элемента
 * @param {HTMLElement} el
 */
function setValue(el, value, defaultValue) {
  let text = "";
  const dlg = el;

  if (value) {
    text = value;
  } else if (defaultValue) {
    text = defaultValue;
  }

  if ("value" in el) {
    dlg.value = text;
  } else {
    dlg.innerText = text;
  }
}

export default setValue;

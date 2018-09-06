/**
 * Проверяет входжение элемента. Если элемент найден, то удаляет его из массива
 * @param {Array} array Ссылка на массив. Значения удадяются, если найдено
 * @param {String} search Искомый элемент
 * @param {Number} fromIndex Индекс, с которого начинать поиск
 * @readonly {boolean}
 */
export const isIncludes = (array: Array<string>, search: any, fromIndex: number = 0): boolean => {
  if (array.length) {
    const i: number = array.indexOf(search, fromIndex);
    if (i !== -1) {
      array.splice(i, 1);
      return true;
    }
  }

  return false;
};

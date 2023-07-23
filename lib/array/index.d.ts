/**
 * Тип массив в системе WebTutor HCM
 */
interface Array<T> {
  [index: number]: T;
  /**
   * Возвращает количество элементов массива.
   */
  readonly length: number;

  /**
   * Возвращает индекс передаваемого элемента в массиве
   * @param {any} element
   */
  indexOf(element: any): number;

  /**
   * Преобразование всех элементов массива в объект String и соединяет их.
   * @param delimeter разделитель между элементами (String). Не обязательный аргумент.
   * @returns {string}
   * @example arrayobj.join(delimeter)
   */
  join(delimeter: string): string;

  /**
   * Добавляет элементы в конец массива.
   * Добавляет элементы, начиная с текущей длинны length и возвращает новую, увеличенную длунну массива.
   * @param {any} element аргумент который следует добавить в массив. Обязательный.
   * @param {...args} аргументы которые следует добавить в массив. Необязательный.
   * @returns {number}
   */
  push(...args: T[]): number;

  /**
   * Удаляет часть массива.
   * @param index индекс в массив, с которого нужно начинать удаление.
   * @param number количество элементов, которое нужно удалить, начиная с индеса arg1.
   */
  splice(index: number, number: number): void;
}

interface ArrayConstructor {
  new(...arg: any): any[];
  (...arg: any): any[];
}

declare const Array: ArrayConstructor;

interface String {
  /**
   * Возвращает длину строки в байтах.
   * Рекомендуется использовать аналогичную функцию StrLen().
   */
  length: number;

  /**
   * Устанавливает длину строкового объекта. Если новая длина больше текущей,
   * содержимое добавленной части строки неопределено.
   * Метод обычно используется для передачи возвращаемых строковых аргументов
   * в методы DllWrapper.
   * @param newLen - Новая длинна строки в байтах (Integer).
   */
  Allocate(newLen: number): void;

  /**
   * Возвращает символ с указанной позиции в виде односимвольной строки.
   * Если указать index превышающий количество символов в строке, возвратит пустую строку.
   * @param index - Номер позиции в строке (Integer).
   */
  charAt(index: number): string;

  /**
   * Возвращает код указанного символа.
   * @param index - Отсчитаваемый с нуля индекс для символа (Integer).
   */
  charCodeAt(index: number): number;

  /**
   * Создание строки из кода символа.
   * @param substring
   * @param startPosition
   */
  fromCharCode(code: number): string;

  /**
   * Поиск первого месторасположения подстроки в пределах объекта String.
   * Если подстрока не найдена, возвращается -1.
   * @param substring - Подстрока для поиска (String).
   * @param startPosition - Целое значение, указывающее индекс начала поиска (Integer).
   * Необязательный аргумент.
   */
  indexOf(substring: string, startPosition?: number): number;

  /**
   * Поиск последнего местонахождения подстроки в пределах объекта String.
   * Если подстрока не найдена, возвращается -1.
   * @param substring - Подстрока для поиска (String).
   * @param startPosition - Целое число, указывающее на индекс для начала поиска (Integer).
   * Необязательный аргумент.
   */
  lastIndexOf(substring: string, startPosition?: number): number;

  /**
   * Возвращает фрагмент строки.
   * @param start - Индекс начала указанной части строки (Integer).
   * @param end - Индекс конца указанной части строки (Integer). Необязательный аргумент.
   * Рекомендуется использовать аналогичные функции StrRangePos() и StrLeftRange().
   */
  slice(start: number, end?: number): string;

  /**
   * Разделяет строку на массив строк.
   * @param separator - Строка, которая показывает, где делить (String).
   */
  split(separator: string): string[];

  /**
   * Метод конструирует и возвращает новую строку, содержащую указанное количество
   * соединённых вместе копий строки, на которой он был вызван.
   * @param number - Целое число, определяющее число повторений строки во вновь
   * создаваемой и возвращаемой строке.
   */
  repeat(number: number): string;

  /**
   * Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.
   * @param substr - Строка, заменяемая на newSubStr.
   * @param newSubstr - Строка, заменяющая подстроку из первого параметра.
   * @return {string}
   */
  replace(substr: string, newSubstr: string): string;

  /**
   * Возвращает подстроку, начинающуюся с указанного месторасположения и имеющую указанную длину.
   * @param start - Начальное положение в строке (Integer).
   * @param length - Количество символов в возвращаемой строке (Integer). Необязательный аргумент.
   * Рекомендуется использовать аналогичную функцию StrRightRangePos().
   */
  substr(start: number, length?: number): string;

  /**
   * Перевод текста в нижний регистр
   * Рекомендуется использовать аналогичную функцию StrLowerCase().
   */
  toLowerCase(): string;
}

interface StringConstructor {
  new(value?: unknown): string;
  (value?: unknown): string;
  fromCharCode(charCode: number): string;
}

declare const String: StringConstructor;

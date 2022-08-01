/**
 * Конструктор объекта javascript. Создает новый объект.
 * По умолчанию для объекта определен атрибут HasProperty и методы
 * AddProperty , SetProperty , GetProperty , GetOptProperty .
 */
interface Object {
  [key: string]: unknown;

  /**
   * Выдает true, если атрубут с заданным наименованием существует,
   * и false - если не существует. Смотри также GetOptProperty, 
   * GetOptProperty и SetProperty.
   * @param key наименование атрибута объекта
   */
  HasProperty(key: string): boolean;

  /**
   * Добавляет в объект (javascript object) новый атрибут, и присваивает ему значение.
   * @param key наименование атрибута (string)
   * @param name значение атрибута (variant)
   */
  AddProperty(key: string, name: unknown): void;

  /**
   * Возвращает значение атрибута объекта. Если атрубут отсутствует, выдает undefined.
   * @param {string} key - наименование атрибута объекта.
   * @param defaultValue - значение по умолчанию, возращаемое в случае
   * отстутвия атрибута (Any). Необязятельный аргумент. По умолчанию равен undefined.
   */
  GetOptProperty(key: string, defaultValue?: unknown): unknown | undefined;

  /**
   * Выдает значение атрибута объекта. Если атрибут отсутствует, выдает ошибку.
   * Смотри также GetOptProperty() и SetProperty.
   * @param key наименование атрибута объекта
   * @example AppConfig.GetProperty( 'alt-app-name' );
   * @throws {Error}
   */
  GetProperty(key: string): unknown | never;

  /**
   * Устанавливает значение атрибута объекта. Если атрубут отсутствует,
   * добавляет его. Смотри также GetOptProperty() и GetProperty.
   * @param key наименование атрибута объекта.
   * @param value значение атрибута объекта.
   */
  SetProperty(key: string, value: any): void;
}

interface ObjectConstructor {
  new(value?: any): Object;
  (value?: any): Object;
  (): Object;
}

declare const Object: ObjectConstructor;

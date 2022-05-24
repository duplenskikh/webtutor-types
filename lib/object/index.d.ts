/**
 * Тип объект в системе WebTutor HCM
 */
interface Object {
  [key: string]: any;

  /**
   * Возвращает значение атрибута объекта. Если атрубут отсутствует, выдает undefined.
   * @param {string} propertyName - наименование атрибута объекта.
   * @param defaultValue - значение по умолчани, возращаемое в случае отстутвия атрибута (Any). Необязятельный аргумент. По умолчанию равен undefined.
   * @returns any
   */
  GetOptProperty?(propertyName: string, defaultPropertyValue?: any): any;

  GetProperty?(propertyName: string): any;

  SetProperty?(propertyName: string, propertyValue: any): void;

  HasProperty?(propertyName: string): boolean;
}

interface ObjectConstructor {
  new(value?: any): Object;
  (): Object;
  (value?: any): Object;
}

declare var Object: ObjectConstructor;

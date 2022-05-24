/**
 * Предназначен для хранения бинарных данных,
 * в том числе бинарных данных большого размера.
 * Объект активно использовался в прошлом,
 * когда строки не могли содержать в себе бинарные данные,
 * либо для особых случаев, таких как многократная запись
 * информации в большую строки маленькими кусочками
 * (это необходимо, например, при генерации больших HTML).
 * Поскольку добавление к строке большого количества маленьких
 * кусочков в цикле существенно медленнее,
 * чем запись в Binary, то для подобных случаем использовался
 * именно объект Binary, который потом преобразовывался в строку.
 * В настоящее время этот метод также явячется устаревшим,
 * поскольку появился отдельный объект, WriteBuffStream.
 */
interface Binary {
  /**
   * Размер содержимого бинарного объекта в байтах.
   */
  Size: number;
  /**
   * Поток, в который можно писать данные любыми функциями,
   * которые работают с потоками. Данные из потока попадают в объект.
   */
  WriteStream: unknown;

  AppendBinary(): any;
  AppendStr(): any;
  AssignBinary(): any;
  AssignStr(): any;
  GetStr(): any;
  LoadFromUrl(): any;
  PrepareWriteSpace(): any;
  PutToUrl(): any;
}

interface BinaryConstructor {
  new(...arg: any): Array<any>;
  (...arg: any): Array<any>;
}

declare var Binary: BinaryConstructor;

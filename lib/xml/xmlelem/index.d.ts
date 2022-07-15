interface XmMultiElem<T> {
  [index: number]: T;
  HasValue: boolean;
  Name: string;
  /**
   * 
   * Добавляет дочерний элемент и возвращает указатель на него.
   * Если текущий элемент создан по форме, то он должен быть простым массивом. При этом аргументы для вызова функции не требуются.
   * Если текущий элемент является динамическим (т.е. построенным без формы), то добавляется дочерний динамический элемент с именем и типом, указанных в качестве аргументов.   

   * @param {string} name - имя дочернего элемента (String). Необязательный аргумент
   * @param {string} type - тип дочернего элемента (String). Необязательный аргумент
   * @returns {XmlElem<T>}
   */
  Add(): XmlElem<T>;
  AddChild(name?: string, type?: string): XmlElem<T>;
  AssignElem(element: unknown): void;
  ByValueExists(value: unknown): Boolean;
  Child(index: string | number): XmlElem<T>;
  Clear(): void;
  DeleteChildByKey(keyValue: unknown, keyName?: string): void;
  DeleteChildren(condition: string): void;
  GetChildByKey(keyValue: unknown, keyName?: string): XmlElem<T>;
  GetOptChildByKey(keyValue: unknown, keyName?: string): XmlElem<T>;
  ObtainByValue(value: any): XmlElem<T>;
  ObtainChildByKey(keyValue: unknown, keyName?: string): XmlElem<T>;
  OptChild(name: string): XmlElem<T>;
}

type XmlMultiElem<T> = XmMultiElem<T> & T;

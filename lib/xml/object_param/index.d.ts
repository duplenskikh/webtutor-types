type ObjectParamDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  Doc: ObjectParamDocument;
  id: XmlElem<number | null>;
  /** Активное уведомление */
  is_enabled: XmlElem<boolean>;
  /** Начало */
  start_date: XmlElem<Date | null>;
  sec_object_code: XmlElem<string | null>;
  base_object: XmlElem<ObjectTypeBase | null>;
  params_block: XmlElem<WebVariablesBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
};

type ObjectParamDocument = XmlDocument & {
  TopElem: ObjectParamDocumentTopElem;
  object_param: ObjectParamDocumentTopElem;
  OnBeforeSave(): void;
  OnCreate(): void;
  DocDesc(): string;
};

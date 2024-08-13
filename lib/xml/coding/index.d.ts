type CodingDocumentTopElem = XmlTopElem & {
  Doc: CodingDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Префикс */
  prefix: XmlElem<string | null>;
  /** Индекс */
  next_index: XmlElem<number>;
  /** Количество символов */
  digits_num: XmlElem<number>;
  /** Поле */
  field_name: XmlElem<string>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  obtain_code(): string;
};

type CodingDocument = XmlDocument & {
  TopElem: CodingDocumentTopElem;
  coding: CodingDocumentTopElem;
  DocDesc(): string;
};

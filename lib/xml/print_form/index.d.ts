type PrintFormDocumentTopElem = XmlTopElem &
InsertFileBase & {
  Doc: PrintFormDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.print_form_types>;
  /** Кодировка */
  file_encoding: XmlElem<string | null, typeof common.encoding_types>;
  orientation: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type PrintFormDocument = XmlDocument & {
  TopElem: PrintFormDocumentTopElem;
  print_form: PrintFormDocumentTopElem;
  DocDesc(): string;
};

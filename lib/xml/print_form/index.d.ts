type PrintFormDocumentTopElem = XmlTopElem &
InsertFileBase & {
  Doc: PrintFormDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.print_form_types>;
  file_encoding: XmlElem<string | null, typeof common.encoding_types>;
  orientation: XmlElem<number | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  role_id: XmlMultiElemObject<number | null>;
};

type PrintFormDocument = XmlDocument & {
  TopElem: PrintFormDocumentTopElem;
  print_form: PrintFormDocumentTopElem;
  DocDesc(): string;
};

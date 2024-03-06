type PrintFormDocumentTopElem = XmlTopElem &
InsertFileBase & {
  Doc: PrintFormDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.print_form_types>;
  file_encoding: XmlElem<string, typeof common.encoding_types>;
  orientation: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  object_name: XmlElem<string, typeof common.exchange_object_types>;
  role_id: XmlMultiElemObject<number>;
};

type PrintFormDocument = XmlDocument & {
  TopElem: PrintFormDocumentTopElem;
  print_form: PrintFormDocumentTopElem;
  DocDesc(): unknown;
};

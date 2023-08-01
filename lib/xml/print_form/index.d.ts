type PrintFormDocumentTopElem = XmlTopElem & { Doc: PrintFormDocument } & 
InsertFileBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  file_encoding: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  object_name: XmlElem<string>;
  role_id: XmlMultiElem<number>;
};

type PrintFormDocument = XmlDocument & {
  TopElem: PrintFormDocumentTopElem;
};

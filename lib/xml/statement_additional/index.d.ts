type StatementAdditionalDocumentTopElem = XmlTopElem & { Doc: StatementAdditionalDocument } & {
  id: XmlElem<number>;
  path: XmlElem<string>;
  name: XmlElem<string>;
  value: XmlElem<string>;
  statement_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
}

type StatementAdditionalDocument = XmlDocument & {
  TopElem: StatementAdditionalDocumentTopElem;
};

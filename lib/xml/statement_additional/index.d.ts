type StatementAdditionalDocumentTopElem = XmlTopElem & {
  Doc: StatementAdditionalDocument;
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementAdditionalDocument = XmlDocument & {
  TopElem: StatementAdditionalDocumentTopElem;
  statement_additional: StatementAdditionalDocumentTopElem;
};

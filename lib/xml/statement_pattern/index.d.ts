type StatementPatternDocumentTopElem = XmlTopElem & {
  Doc: StatementPatternDocument;
  id: XmlElem<number>;
  path: XmlElem<string>;
  value: XmlElem<string>;
  statement_id: XmlElem<number, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
};

type StatementPatternDocument = XmlDocument & {
  TopElem: StatementPatternDocumentTopElem;
  statement_pattern: StatementPatternDocumentTopElem;

};

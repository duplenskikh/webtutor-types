type StatementPatternDocumentTopElem = XmlTopElem & {
  Doc: StatementPatternDocument;
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  value: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementPatternDocument = XmlDocument & {
  TopElem: StatementPatternDocumentTopElem;
  statement_pattern: StatementPatternDocumentTopElem;
};

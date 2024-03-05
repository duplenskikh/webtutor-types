type StatementObjectDocumentTopElem = XmlTopElem & {
  Doc: StatementObjectDocument;
  id: XmlElem<number>;
  path: XmlElem<string>;
  object_id: XmlElem<string>;
  object_type: XmlElem<string>;
  statement_id: XmlElem<number, StatementCatalogDocumentTopElem>;
  definition_type: XmlElem<string>;
  definition_more_info: XmlElem<string>;
  definition_interaction_type: XmlElem<string>;
  context_activity_type: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type StatementObjectDocument = XmlDocument & {
  TopElem: StatementObjectDocumentTopElem;
};

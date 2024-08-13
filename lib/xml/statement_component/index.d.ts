type StatementComponentDocumentTopElem = XmlTopElem & {
  Doc: StatementComponentDocument;
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  property_name: XmlElem<string | null, typeof common.statement_component_propertys>;
  component_id: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementComponentDocument = XmlDocument & {
  TopElem: StatementComponentDocumentTopElem;
  statement_component: StatementComponentDocumentTopElem;
};

type StatementComponentDocumentTopElem = XmlTopElem & {
  Doc: StatementComponentDocument;
  id: XmlElem<number>;
  path: XmlElem<string>;
  property_name: XmlElem<string, typeof common.statement_component_propertys>;
  component_id: XmlElem<string>;
  statement_id: XmlElem<number, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
};

type StatementComponentDocument = XmlDocument & {
  TopElem: StatementComponentDocumentTopElem;
  statement_component: StatementComponentDocumentTopElem;
};

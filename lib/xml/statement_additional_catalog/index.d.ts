type StatementAdditionalCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  path: XmlElem<string>;
  name: XmlElem<string>;
  value: XmlElem<string>;
  statement_id: XmlElem<number, StatementCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

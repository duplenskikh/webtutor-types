type StatementComponentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  property_name: XmlElem<string | null, typeof common.statement_component_propertys>;
  component_id: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

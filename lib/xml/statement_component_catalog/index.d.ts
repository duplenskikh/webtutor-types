type StatementComponentCatalogDocumentTopElem = XmlTopElem & { Doc: StatementComponentCatalogDocument } & {
  id: XmlElem<number>;
  path: XmlElem<string>;
  property_name: XmlElem<string>;
  component_id: XmlElem<string>;
  statement_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type StatementComponentCatalogDocument = XmlDocument & { TopElem: StatementComponentCatalogDocumentTopElem; };

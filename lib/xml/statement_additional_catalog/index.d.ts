type StatementAdditionalCatalogDocumentTopElem = XmlTopElem & { Doc: StatementAdditionalCatalogDocument } & {
  id: XmlElem<number>;
  path: XmlElem<string>;
  name: XmlElem<string>;
  value: XmlElem<string>;
  statement_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type StatementAdditionalCatalogDocument = XmlDocument & { TopElem: StatementAdditionalCatalogDocumentTopElem; };

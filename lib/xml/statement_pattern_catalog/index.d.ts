type StatementPatternCatalogDocumentTopElem = XmlTopElem & { Doc: StatementPatternCatalogDocument } & {
  id: XmlElem<number>;
  path: XmlElem<string>;
  value: XmlElem<string>;
  statement_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type StatementPatternCatalogDocument = XmlDocument & { TopElem: StatementPatternCatalogDocumentTopElem; };

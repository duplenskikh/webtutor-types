type StatementPatternCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  value: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

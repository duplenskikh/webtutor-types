type StatementAdditionalCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

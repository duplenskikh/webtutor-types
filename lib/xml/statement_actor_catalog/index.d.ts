type StatementActorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  mbox: XmlElem<string | null>;
  mbox_sha1sum: XmlElem<string | null>;
  openid: XmlElem<string | null>;
  account_home_page: XmlElem<string | null>;
  account_name: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

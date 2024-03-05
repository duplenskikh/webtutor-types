type StatementActorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  path: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  statement_id: XmlElem<number, StatementCatalogDocumentTopElem>;
  mbox: XmlElem<string>;
  mbox_sha1sum: XmlElem<string>;
  openid: XmlElem<string>;
  account_home_page: XmlElem<string>;
  account_name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

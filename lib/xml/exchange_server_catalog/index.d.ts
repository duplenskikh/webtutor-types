type ExchangeServerCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  last_upload_date: XmlElem<Date>;
  last_download_date: XmlElem<Date>;
  server_version: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

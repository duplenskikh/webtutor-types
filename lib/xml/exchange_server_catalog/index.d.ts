type ExchangeServerCatalogDocumentTopElem = XmlTopElem & { Doc: ExchangeServerCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  last_upload_date: XmlElem<Date>;
  last_download_date: XmlElem<Date>;
  server_version: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ExchangeServerCatalogDocument = XmlDocument & { TopElem: ExchangeServerCatalogDocumentTopElem; };

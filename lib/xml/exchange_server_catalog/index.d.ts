type ExchangeServerCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_active: XmlElem<boolean>;
  last_upload_date: XmlElem<Date | null>;
  last_download_date: XmlElem<Date | null>;
  server_version: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

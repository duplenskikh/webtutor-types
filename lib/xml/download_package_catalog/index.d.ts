type DownloadPackageCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  package_id: XmlElem<string>;
  exchange_server_id: XmlElem<number, ExchangeServerCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.package_types>;
  status: XmlElem<string, typeof common.package_status_types>;
  package_date: XmlElem<Date>;
  create_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

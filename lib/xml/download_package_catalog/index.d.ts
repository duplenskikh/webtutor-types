type DownloadPackageCatalogDocumentTopElem = XmlTopElem & { Doc: DownloadPackageCatalogDocument } & {
  id: XmlElem<number>;
  package_id: XmlElem<string>;
  exchange_server_id: XmlElem<number>;
  type: XmlElem<string>;
  status: XmlElem<string>;
  package_date: XmlElem<Date>;
  create_date: XmlElem<Date>;
}

type DownloadPackageCatalogDocument = XmlDocument & { TopElem: DownloadPackageCatalogDocumentTopElem; };

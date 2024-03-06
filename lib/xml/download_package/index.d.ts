type DownloadPackageDocumentTopElem = XmlTopElem &
DownloadPackageLogBase & {
  Doc: DownloadPackageDocument;
  package_id: XmlElem<string>;
  exchange_server_id: XmlElem<number, ExchangeServerCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.package_types>;
  base_url: XmlElem<string>;
  url: XmlElem<string>;
  status: XmlElem<string, typeof common.package_status_types>;
  local_file_url: XmlElem<string>;
  create_date: XmlElem<Date>;
  download_date: XmlElem<Date>;
  package_date: XmlElem<Date>;
  application_code: XmlElem<string>;
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DownloadPackageDocument = XmlDocument & {
  TopElem: DownloadPackageDocumentTopElem;
  download_package: DownloadPackageDocumentTopElem;
  DocDesc(): unknown;
};

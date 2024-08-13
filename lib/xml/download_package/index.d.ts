type DownloadPackageDocumentTopElem = XmlTopElem &
DownloadPackageLogBase & {
  Doc: DownloadPackageDocument;
  package_id: XmlElem<string | null>;
  exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
  type: XmlElem<string | null, typeof common.package_types>;
  base_url: XmlElem<string | null>;
  url: XmlElem<string | null>;
  status: XmlElem<string, typeof common.package_status_types>;
  local_file_url: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  download_date: XmlElem<Date | null>;
  package_date: XmlElem<Date | null>;
  application_code: XmlElem<string | null>;
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DownloadPackageDocument = XmlDocument & {
  TopElem: DownloadPackageDocumentTopElem;
  download_package: DownloadPackageDocumentTopElem;
  DocDesc(): string;
};

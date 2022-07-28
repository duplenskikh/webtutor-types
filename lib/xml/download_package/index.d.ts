type DownloadPackageDocumentTopElem = XmlTopElem & { Doc: DownloadPackageDocument } & 
  DownloadPackageLogBase & {
  package_id: XmlElem<string>;
  exchange_server_id: XmlElem<number>;
  type: XmlElem<string>;
  url: XmlElem<string>;
  status: XmlElem<string>;
  local_file_url: XmlElem<string>;
  create_date: XmlElem<Date>;
  download_date: XmlElem<Date>;
  package_date: XmlElem<Date>;
  application_code: XmlElem<string>;
  application_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type DownloadPackageDocument = XmlDocument & { TopElem: DownloadPackageDocumentTopElem; };

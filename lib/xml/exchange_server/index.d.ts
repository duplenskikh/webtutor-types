type ExchangeServerDocumentTopElem = XmlTopElem & { Doc: ExchangeServerDocument } &
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  server_password: XmlElem<string>;
  is_active: XmlElem<boolean>;
  update_exist_package_obj: XmlElem<boolean>;
  auto_publish_test: XmlElem<boolean>;
  last_upload_date: XmlElem<Date>;
  last_download_date: XmlElem<Date>;
  server_version: XmlElem<string>;
  allow_receive_data: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
};

type ExchangeServerDocument = XmlDocument & {
  TopElem: ExchangeServerDocumentTopElem;
};

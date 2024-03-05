type ActionReportDocumentTopElem = XmlTopElem & {
  Doc: ActionReportDocument;
  type: XmlElem<string, typeof common.action_report_types>;
  status: XmlElem<string, typeof common.action_status_types>;
  completed: XmlElem<boolean>;
  finished: XmlElem<boolean>;
  exchange_server_id: XmlElem<number, ExchangeServerCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  last_upload_date: XmlElem<Date>;
  report_text: XmlElem<string>;
  data_file_url: XmlElem<string>;
  server_version: XmlElem<string>;
  report_json: XmlElem<string>;
  create_date: XmlElem<Date>;
  doc_info: XmlElem<DocInfoBase>;
};

type ActionReportDocument = XmlDocument & {
  TopElem: ActionReportDocumentTopElem;
};

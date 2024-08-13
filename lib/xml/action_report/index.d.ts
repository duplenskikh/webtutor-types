type ActionReportDocumentTopElem = XmlTopElem & {
  Doc: ActionReportDocument;
  type: XmlElem<string | null, typeof common.action_report_types>;
  status: XmlElem<string | null, typeof common.action_status_types>;
  completed: XmlElem<boolean>;
  finished: XmlElem<boolean>;
  exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  last_upload_date: XmlElem<Date | null>;
  report_text: XmlElem<string | null>;
  data_file_url: XmlElem<string | null>;
  server_version: XmlElem<string | null>;
  report_json: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ActionReportDocument = XmlDocument & {
  TopElem: ActionReportDocumentTopElem;
  action_report: ActionReportDocumentTopElem;
  DocDesc(): string;
};

type ActionReportCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  type: XmlElem<string | null, typeof common.action_report_types>;
  status: XmlElem<string | null, typeof common.action_status_types>;
  completed: XmlElem<boolean>;
  exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  data_file_url: XmlElem<string | null>;
  last_upload_date: XmlElem<Date | null>;
  create_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

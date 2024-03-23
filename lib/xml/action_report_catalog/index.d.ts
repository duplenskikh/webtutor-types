type ActionReportCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  type: XmlElem<string, typeof common.action_report_types>;
  status: XmlElem<string, typeof common.action_status_types>;
  completed: XmlElem<boolean>;
  exchange_server_id: XmlElem<number, ExchangeServerCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  data_file_url: XmlElem<string>;
  last_upload_date: XmlElem<Date>;
  create_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

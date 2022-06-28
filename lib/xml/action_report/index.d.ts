interface IWTActionReportTopElem {
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  completed?: XmlElem<boolean>;
  finished?: XmlElem<boolean>;
  exchange_server_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  last_upload_date?: XmlElem<Date>;
  report_text?: XmlElem<string>;
  data_file_url?: XmlElem<string>;
  server_version?: XmlElem<string>;
  create_date?: XmlElem<Date>;
}

type IWTActionReportDocument = IWTXmlDocument<IWTActionReportTopElem>;

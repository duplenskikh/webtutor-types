type ViewServerLogReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewServerLogReportDocument;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  type_id: XmlElem<string>;
  show_alert: XmlElem<boolean>;
  data: XmlElem<TableDataBase>;
};

type ViewServerLogReportDocument = XmlDocument & {
  TopElem: ViewServerLogReportDocumentTopElem;
  view_server_log_report: ViewServerLogReportDocumentTopElem;
  OnInit(): void;
};

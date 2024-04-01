type ViewProfilingReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewProfilingReportDocument;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  data: XmlElem<TableDataBase>;
};

type ViewProfilingReportDocument = XmlDocument & {
  TopElem: ViewProfilingReportDocumentTopElem;
  view_profiling_report: ViewProfilingReportDocumentTopElem;
  OnInit(): void;
};

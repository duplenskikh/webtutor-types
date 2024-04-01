interface ViewResponseAnalysisReportDocumentQuestionAnswer {
  value: XmlElem<string>;
  count: XmlElem<number>;
  count_percent: XmlElem<number>;
}

interface ViewResponseAnalysisReportDocumentQuestion {
  question_id: XmlElem<string>;
  name: XmlElem<string>;
  count: XmlElem<number>;
  answers: XmlMultiElem<ViewResponseAnalysisReportDocumentQuestionAnswer>;
}

type ViewResponseAnalysisReportDocumentTopElem = XmlTopElem & {
  Doc: ViewResponseAnalysisReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  date_start: XmlElem<Date>;
  date_end: XmlElem<Date>;
  questions: XmlMultiElem<ViewResponseAnalysisReportDocumentQuestion>;
};

type ViewResponseAnalysisReportDocument = XmlDocument & {
  TopElem: ViewResponseAnalysisReportDocumentTopElem;
  view_response_analysis_report: ViewResponseAnalysisReportDocumentTopElem;
};

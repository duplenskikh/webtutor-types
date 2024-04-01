type ViewAssessmentAppraiseCompetenceReportDocumentTopElem = XmlTopElem &
ViewAssessmentAppraiseCompetenceReportBase & {
  Doc: ViewAssessmentAppraiseCompetenceReportDocument;
  sort_type_id: XmlElem<string>;
};

type ViewAssessmentAppraiseCompetenceReportDocument = XmlDocument & {
  TopElem: ViewAssessmentAppraiseCompetenceReportDocumentTopElem;
  view_assessment_appraise_competence_report: ViewAssessmentAppraiseCompetenceReportDocumentTopElem;
};

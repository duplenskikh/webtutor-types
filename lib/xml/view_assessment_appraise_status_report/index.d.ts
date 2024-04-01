interface ViewAssessmentAppraiseStatusReportDocumentPaData {
  pa_id: XmlElem<number, PaCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_appraise_name: XmlElem<string>;
  assessment_appraise_type: XmlElem<string, typeof common.assessment_appraise_participants>;
  assessment_appraise_type_name: XmlElem<string>;
  status: XmlElem<string, typeof common.assessment_appraise_participants>;
  status_name: XmlElem<string>;
  count: XmlElem<number>;
}

type ViewAssessmentAppraiseStatusReportDocumentTopElem = XmlTopElem & {
  Doc: ViewAssessmentAppraiseStatusReportDocument;
  pa_id: XmlElem<number, PaCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_appraise_name: XmlElem<string>;
  assessment_appraise_type: XmlElem<string, typeof common.assessment_appraise_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.assessment_appraise_participants>;
  is_done: XmlElem<boolean>;
  pa_datas: XmlMultiElem<ViewAssessmentAppraiseStatusReportDocumentPaData>;
  sort_type_id: XmlElem<string>;
};

type ViewAssessmentAppraiseStatusReportDocument = XmlDocument & {
  TopElem: ViewAssessmentAppraiseStatusReportDocumentTopElem;
  view_assessment_appraise_status_report: ViewAssessmentAppraiseStatusReportDocumentTopElem;
};

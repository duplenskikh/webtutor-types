interface ViewAssessmentAppraisesDocumentWizardParticipant {
  participant_id: XmlElem<string, typeof common.assessment_appraise_participants>;
  name: XmlElem<string>;
}

interface ViewAssessmentAppraisesDocumentWizardAssessmentAppraiseType {
  assessment_appraise_type_id: XmlElem<string, typeof common.assessment_appraise_types>;
  name: XmlElem<string>;
}

interface ViewAssessmentAppraisesDocumentWizardSource {
  path: XmlElem<string>;
  value: XmlElem<string>;
  participant_corr: XmlElem<string>;
  assessment_appraise_type_corr: XmlElem<string>;
}

interface ViewAssessmentAppraisesDocumentWizard {
  participants: XmlMultiElem<ViewAssessmentAppraisesDocumentWizardParticipant>;
  assessment_appraise_types: XmlMultiElem<ViewAssessmentAppraisesDocumentWizardAssessmentAppraiseType>;
  sources: XmlMultiElem<ViewAssessmentAppraisesDocumentWizardSource>;
}

type ViewAssessmentAppraisesDocumentTopElem = XmlTopElem &
MsViewCatalogBase & {
  Doc: ViewAssessmentAppraisesDocument;
  select_type_id: XmlElem<string>;
  select_mode: XmlElem<string>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string, gridItemName: string): number;
  wizard: XmlElem<ViewAssessmentAppraisesDocumentWizard>;
};

type ViewAssessmentAppraisesDocument = XmlDocument & {
  TopElem: ViewAssessmentAppraisesDocumentTopElem;
  view_assessment_appraises: ViewAssessmentAppraisesDocumentTopElem;
  OnInit(): void;
};

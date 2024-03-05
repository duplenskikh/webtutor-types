type PositionAssessmentFormCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  is_done: XmlElem<boolean>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  scale: XmlElem<number>;
  grade_id: XmlElem<number, GradeCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

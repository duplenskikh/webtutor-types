type PositionAssessmentFormCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  is_done: XmlElem<boolean>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  scale: XmlElem<number | null>;
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

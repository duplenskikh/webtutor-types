type PositionAssessmentFormDocumentTopElem = XmlTopElem &
SupplementaryQuestionsBase &
CustomElemsBase & {
  Doc: PositionAssessmentFormDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  is_done: XmlElem<boolean>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  scale: XmlElem<number>;
  grade_id: XmlElem<number, GradeCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type PositionAssessmentFormDocument = XmlDocument & {
  TopElem: PositionAssessmentFormDocumentTopElem;
  position_assessment_form: PositionAssessmentFormDocumentTopElem;
  DocDesc(): string;
};

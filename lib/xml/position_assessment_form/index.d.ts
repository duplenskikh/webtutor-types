type PositionAssessmentFormDocumentTopElem = XmlTopElem &
SupplementaryQuestionsBase &
CustomElemsBase & {
  Doc: PositionAssessmentFormDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  is_done: XmlElem<boolean>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  scale: XmlElem<number | null>;
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PositionAssessmentFormDocument = XmlDocument & {
  TopElem: PositionAssessmentFormDocumentTopElem;
  position_assessment_form: PositionAssessmentFormDocumentTopElem;
  DocDesc(): string;
};

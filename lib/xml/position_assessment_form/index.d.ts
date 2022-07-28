type PositionAssessmentFormDocumentTopElem = XmlTopElem & { Doc: PositionAssessmentFormDocument } & 
  SupplementaryQuestionsBase &
  CustomElemsBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  position_common_id?: XmlElem<number>;
  is_done?: XmlElem<boolean>;
  assessment_appraise_id?: XmlElem<number>;
  scale?: XmlElem<number>;
  grade_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type PositionAssessmentFormDocument = XmlDocument & { TopElem: PositionAssessmentFormDocumentTopElem; };

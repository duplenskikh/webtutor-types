type PositionAssessmentFormCatalogDocumentTopElem = XmlTopElem & { Doc: PositionAssessmentFormCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  position_common_id: XmlElem<number>;
  is_done: XmlElem<boolean>;
  assessment_appraise_id: XmlElem<number>;
  scale: XmlElem<number>;
  grade_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PositionAssessmentFormCatalogDocument = XmlDocument & { TopElem: PositionAssessmentFormCatalogDocumentTopElem; };

type EventAssessmentPlanCatalogDocumentTopElem = XmlTopElem & { Doc: EventAssessmentPlanCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  event_id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  expert_person_id: XmlElem<number>;
  expert_person_fullname: XmlElem<string>;
  expert_person_position_name: XmlElem<string>;
  date_start: XmlElem<Date>;
  is_done: XmlElem<boolean>;
  assessment_type: XmlElem<string>;
  assessment_type_id: XmlElem<string>;
  status: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type EventAssessmentPlanCatalogDocument = XmlDocument & { TopElem: EventAssessmentPlanCatalogDocumentTopElem; };

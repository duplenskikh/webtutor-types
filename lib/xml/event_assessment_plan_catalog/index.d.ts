type EventAssessmentPlanCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  expert_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  expert_person_fullname: XmlElem<string>;
  expert_person_position_name: XmlElem<string>;
  date_start: XmlElem<Date>;
  is_done: XmlElem<boolean>;
  assessment_type: XmlElem<string>;
  assessment_type_id: XmlElem<string>;
  status: XmlElem<string, typeof common.assessment_appraise_participants>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

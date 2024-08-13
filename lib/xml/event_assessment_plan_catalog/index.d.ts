type EventAssessmentPlanCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  expert_person_fullname: XmlElem<string | null>;
  expert_person_position_name: XmlElem<string | null>;
  date_start: XmlElem<Date | null>;
  is_done: XmlElem<boolean>;
  assessment_type: XmlElem<string | null>;
  assessment_type_id: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

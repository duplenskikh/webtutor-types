interface CollaboratorScheduleDocumentPeriod extends ObjectTypeBase, CustomElemsBase {
  id: XmlElem<string>;
  presence_state_id: XmlElem<number, PresenceStateCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof lists.person_states>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
  comment: XmlElem<string>;
}

type CollaboratorScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: CollaboratorScheduleDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
  presence_state_id: XmlElem<number, PresenceStateCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number, ScheduleTypeCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.agreement_status_types>;
  approval_date: XmlElem<Date>;
  approval_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  rest_collaborator_schedule_id: XmlElem<number, RestrictingCollaboratorScheduleCatalogDocumentTopElem>;
  interval_schedule_id: XmlElem<number, IntervalScheduleCatalogDocumentTopElem>;
  schedule_day_id: XmlElem<number, ScheduleDayCatalogDocumentTopElem>;
  periods: XmlMultiElem<CollaboratorScheduleDocumentPeriod>;
  reason_comment: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type CollaboratorScheduleDocument = XmlDocument & {
  TopElem: CollaboratorScheduleDocumentTopElem;
  collaborator_schedule: CollaboratorScheduleDocumentTopElem;
};

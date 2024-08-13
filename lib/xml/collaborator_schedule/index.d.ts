interface CollaboratorScheduleDocumentPeriod extends ObjectTypeBase, CustomElemsBase {
  id: XmlElem<string | null>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof lists.person_states>;
  start_time: XmlElem<string | null>;
  finish_time: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

type CollaboratorScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: CollaboratorScheduleDocument;
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  start_time: XmlElem<string | null>;
  finish_time: XmlElem<string | null>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.agreement_status_types>;
  approval_date: XmlElem<Date | null>;
  approval_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  rest_collaborator_schedule_id: XmlElem<number | null, RestrictingCollaboratorScheduleCatalogDocumentTopElem>;
  interval_schedule_id: XmlElem<number | null, IntervalScheduleCatalogDocumentTopElem>;
  schedule_day_id: XmlElem<number | null, ScheduleDayCatalogDocumentTopElem>;
  periods: XmlMultiElem<CollaboratorScheduleDocumentPeriod | null>;
  reason_comment: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type CollaboratorScheduleDocument = XmlDocument & {
  TopElem: CollaboratorScheduleDocumentTopElem;
  collaborator_schedule: CollaboratorScheduleDocumentTopElem;
};

type CollaboratorScheduleCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
  presence_state_id: XmlElem<number, PresenceStateCatalogDocumentTopElem>;
  schedule_day_id: XmlElem<number, ScheduleDayCatalogDocumentTopElem>;
  interval_schedule_id: XmlElem<number, IntervalScheduleCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number, ScheduleTypeCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.agreement_status_types>;
  approval_date: XmlElem<Date>;
  approval_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  rest_collaborator_schedule_id: XmlElem<number, RestrictingCollaboratorScheduleCatalogDocumentTopElem>;
  reason_comment: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

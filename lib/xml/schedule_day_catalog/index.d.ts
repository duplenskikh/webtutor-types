type ScheduleDayCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  schedule_type_id: XmlElem<number, ScheduleTypeCatalogDocumentTopElem>;
  schedule_type_name: XmlElem<string>;
  rest_collaborator_schedule_id: XmlElem<number, RestrictingCollaboratorScheduleCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

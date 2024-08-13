type ScheduleDayDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ScheduleDayDocument;
  id: XmlElem<number | null>;
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  schedule_type_name: XmlElem<string | null>;
  rest_collaborator_schedule_id: XmlElem<number | null, RestrictingCollaboratorScheduleCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  start_time: XmlElem<string | null>;
  finish_time: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ScheduleDayDocument = XmlDocument & {
  TopElem: ScheduleDayDocumentTopElem;
  schedule_day: ScheduleDayDocumentTopElem;
  OnBeforeSave(): void;
};

type ScheduleDayDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ScheduleDayDocument;
  id: XmlElem<number | null>;
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  schedule_type_name: XmlElem<string | null>;
  rest_collaborator_schedule_id: XmlElem<number | null, RestrictingCollaboratorScheduleCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Дата начала */
  start_time: XmlElem<string | null>;
  /** Дата окончания */
  finish_time: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ScheduleDayDocument = XmlDocument & {
  TopElem: ScheduleDayDocumentTopElem;
  schedule_day: ScheduleDayDocumentTopElem;
  OnBeforeSave(): void;
};

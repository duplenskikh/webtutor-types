type AbsenceReserveDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: AbsenceReserveDocument;
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  num_days: XmlElem<number | null>;
  calculation_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type AbsenceReserveDocument = XmlDocument & {
  TopElem: AbsenceReserveDocumentTopElem;
  absence_reserve: AbsenceReserveDocumentTopElem;
};

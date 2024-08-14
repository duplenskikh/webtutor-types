type AbsenceReserveCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  num_days: XmlElem<number | null>;
  calculation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

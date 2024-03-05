type AbsenceReserveCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  presence_state_id: XmlElem<number, PresenceStateCatalogDocumentTopElem>;
  num_days: XmlElem<number>;
  calculation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

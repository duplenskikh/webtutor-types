type AbsenceReserveDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: AbsenceReserveDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  presence_state_id: XmlElem<number, PresenceStateCatalogDocumentTopElem>;
  num_days: XmlElem<number>;
  calculation_date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type AbsenceReserveDocument = XmlDocument & {
  TopElem: AbsenceReserveDocumentTopElem;
};

type AbsenceReserveCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: AbsenceReserveCatalogDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  presence_state_id: XmlElem<number>;
  num_days: XmlElem<number>;
  calculation_date: XmlElem<Date>;
};

type AbsenceReserveCatalogDocument = XmlDocument & {
  TopElem: AbsenceReserveCatalogDocumentTopElem;
};

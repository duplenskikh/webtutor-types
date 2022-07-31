type AbsenceReserveDocumentTopElem = XmlTopElem &
  PersonFillingBase & {
  Doc: AbsenceReserveDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  presence_state_id: XmlElem<number>;
  num_days: XmlElem<number>;
  calculation_date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type AbsenceReserveDocument = XmlDocument & {
  TopElem: AbsenceReserveDocumentTopElem;
};

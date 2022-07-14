interface AbsenceReserveTopElem extends XmlTopElem<AbsenceReserveDocument>,
  IWTPersonFillingBase {
  id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  presence_state_id?: XmlElem<number>;
  num_days?: XmlElem<number>;
  calculation_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

type AbsenceReserveDocument = XmlDocument<AbsenceReserveTopElem>;

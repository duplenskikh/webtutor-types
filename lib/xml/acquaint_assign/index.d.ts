interface AcquaintAssignQuestion {
  id?: XmlElem<string>;
  answer?: XmlElem<string>;
}

interface AcquaintAssignTopElem extends XmlTopElem<AcquaintAssignDocument> {
  code?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  normative_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  reacquaintance_period?: XmlElem<number>;
  person_id?: XmlElem<number>;
  acquaint_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
  attempt_num?: XmlElem<number>;
  questions?: XmlMultiElem<AcquaintAssignQuestion>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

type AcquaintAssignDocument = XmlDocument<AcquaintAssignTopElem>;

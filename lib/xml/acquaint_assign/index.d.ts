interface AcquaintAssignQuestion {
  id?: XmlElem<string>;
  answer?: XmlElem<string>;
}

interface AcquaintAssignView {
  acquaint_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
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
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  questions?: XmlMultiElem<AcquaintAssignQuestion>;
  view?: XmlElem<AcquaintAssignView>;
}

type AcquaintAssignDocument = XmlDocument<AcquaintAssignTopElem>;

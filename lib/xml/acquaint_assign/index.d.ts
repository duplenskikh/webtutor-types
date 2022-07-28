interface AcquaintAssignDocumentQuestion {
  id?: XmlElem<string>;
  answer?: XmlElem<string>;
}

type AcquaintAssignDocumentTopElem = XmlTopElem & { Doc: AcquaintAssignDocument } & {
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
  questions?: XmlMultiElem<AcquaintAssignDocumentQuestion>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type AcquaintAssignDocument = XmlDocument & { TopElem: AcquaintAssignDocumentTopElem; };

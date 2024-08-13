interface AcquaintAssignDocumentQuestion {
  id: XmlElem<string | null>;
  answer: XmlElem<string | null>;
}

type AcquaintAssignDocumentTopElem = XmlTopElem & {
  Doc: AcquaintAssignDocument;
  code: XmlElem<string | null>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  normative_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  reacquaintance_period: XmlElem<number>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  acquaint_id: XmlElem<number | null, AcquaintCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.acquaint_states>;
  attempt_num: XmlElem<number>;
  questions: XmlMultiElem<AcquaintAssignDocumentQuestion | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type AcquaintAssignDocument = XmlDocument & {
  TopElem: AcquaintAssignDocumentTopElem;
  acquaint_assign: AcquaintAssignDocumentTopElem;
  DocDesc(): string;
};

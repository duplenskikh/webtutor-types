type AcquaintAssignCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  normative_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  reacquaintance_period: XmlElem<number>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  acquaint_id: XmlElem<number | null, AcquaintCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.acquaint_states>;
  attempt_num: XmlElem<number>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};

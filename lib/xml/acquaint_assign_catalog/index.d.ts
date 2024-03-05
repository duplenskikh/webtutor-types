type AcquaintAssignCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  normative_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  reacquaintance_period: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  acquaint_id: XmlElem<number, AcquaintCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.acquaint_states>;
  attempt_num: XmlElem<number>;
  modification_date: XmlElem<Date>;
  OnBuild(): unknown;
};

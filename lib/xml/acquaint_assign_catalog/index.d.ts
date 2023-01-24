type AcquaintAssignCatalogDocumentTopElem = XmlTopElem & { Doc: AcquaintAssignCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_name: XmlElem<string>;
  normative_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  reacquaintance_period: XmlElem<number>;
  person_id: XmlElem<number>;
  acquaint_id: XmlElem<number>;
  state_id: XmlElem<string>;
  attempt_num: XmlElem<number>;
  modification_date: XmlElem<Date>;
}

type AcquaintAssignCatalogDocument = XmlDocument & { TopElem: AcquaintAssignCatalogDocumentTopElem; };

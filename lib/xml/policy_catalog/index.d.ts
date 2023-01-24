type PolicyCatalogDocumentTopElem = XmlTopElem & { Doc: PolicyCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  number: XmlElem<string>;
  policy_type_id: XmlElem<number>;
  state_id: XmlElem<string>;
}

type PolicyCatalogDocument = XmlDocument & { TopElem: PolicyCatalogDocumentTopElem; };

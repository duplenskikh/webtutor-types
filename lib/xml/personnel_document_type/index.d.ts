interface PersonnelDocumentTypeDocumentOrgSignatureGroup {
  group_id?: XmlElem<number>;
  signature_num?: XmlElem<number>;
  org_id?: XmlElem<number>;
}

type PersonnelDocumentTypeDocumentTopElem = XmlTopElem & { Doc: PersonnelDocumentTypeDocument } & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  org_signature_types?: XmlMultiElem<string>;
  person_signature_types?: XmlMultiElem<string>;
  person_first_signature?: XmlElem<boolean>;
  print_form_id?: XmlElem<number>;
  org_signature_groups?: XmlMultiElem<PersonnelDocumentTypeDocumentOrgSignatureGroup>;
  role_id?: XmlMultiElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
}

type PersonnelDocumentTypeDocument = XmlDocument & { TopElem: PersonnelDocumentTypeDocumentTopElem; };

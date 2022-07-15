interface PersonnelDocumentTypeOrgSignatureGroup {
  group_id?: XmlElem<number>;
  signature_num?: XmlElem<number>;
  org_id?: XmlElem<number>;
}

interface PersonnelDocumentTypeTopElem extends XmlTopElem<PersonnelDocumentTypeDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  person_first_signature?: XmlElem<boolean>;
  print_form_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  org_signature_types?: XmlMultiElem<string>;
  person_signature_types?: XmlMultiElem<string>;
  role_id?: XmlMultiElem<number>;
  org_signature_groups?: XmlMultiElem<PersonnelDocumentTypeOrgSignatureGroup>;
}

type PersonnelDocumentTypeDocument = XmlDocument<PersonnelDocumentTypeTopElem>;

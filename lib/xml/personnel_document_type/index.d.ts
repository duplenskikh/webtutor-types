interface PersonnelDocumentTypeDocumentOrgSignatureGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  signature_num: XmlElem<number>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  essential_id: XmlElem<string>;
}

type PersonnelDocumentTypeDocumentTopElem = XmlTopElem & {
  Doc: PersonnelDocumentTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  org_signature_types: XmlMultiElemObject<string, typeof common.signature_types>;
  person_first_signature: XmlElem<boolean>;
  person_signature_types: XmlMultiElemObject<string, typeof common.signature_types>;
  print_form_id: XmlElem<number, PrintFormCatalogDocumentTopElem>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  personnel_event_code: XmlElem<string>;
  org_signature_groups: XmlMultiElem<PersonnelDocumentTypeDocumentOrgSignatureGroup>;
  role_id: XmlMultiElemObject<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type PersonnelDocumentTypeDocument = XmlDocument & {
  TopElem: PersonnelDocumentTypeDocumentTopElem;
  personnel_document_type: PersonnelDocumentTypeDocumentTopElem;
  DocDesc(): string;
};

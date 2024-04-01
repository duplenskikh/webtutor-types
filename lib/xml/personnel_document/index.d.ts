interface PersonnelDocumentDocumentSignatureAttorney {
  attorney_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  file_url: XmlElem<string>;
  sig_file_url: XmlElem<string>;
}

interface PersonnelDocumentDocumentSignature extends PersonFillingBase {
  id: XmlElem<string>;
  serialnumber: XmlElem<string>;
  signature: XmlElem<string>;
  signature_date: XmlElem<Date>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  check_in_sig: XmlElem<boolean>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  essential_id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  signature_file_id: XmlElem<string>;
  signature_type: XmlElem<string>;
  attorney: XmlElem<PersonnelDocumentDocumentSignatureAttorney>;
}

interface PersonnelDocumentDocumentSignatureFile {
  id: XmlElem<string>;
  file_name: XmlElem<string>;
  file_url: XmlElem<string>;
  size: XmlElem<number>;
  sig_file_url: XmlElem<string>;
}

type PersonnelDocumentDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: PersonnelDocumentDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  number: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  create_date: XmlElem<Date>;
  acquaint_date: XmlElem<Date>;
  sign_date: XmlElem<Date>;
  state_id: XmlElem<string, typeof common.personnel_document_states>;
  personnel_document_type_id: XmlElem<number, PersonnelDocumentTypeCatalogDocumentTopElem>;
  signature: XmlElem<string>;
  smime_file_url: XmlElem<string>;
  signatures: XmlMultiElem<PersonnelDocumentDocumentSignature>;
  signature_files: XmlMultiElem<PersonnelDocumentDocumentSignatureFile>;
  wredc_data_url: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type PersonnelDocumentDocument = XmlDocument & {
  TopElem: PersonnelDocumentDocumentTopElem;
  personnel_document: PersonnelDocumentDocumentTopElem;
  DocDesc(): string;
};

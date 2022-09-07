interface PersonnelDocumentDocumentSignature extends PersonFillingBase {
  id: XmlElem<string>;
  signature: XmlElem<string>;
  signature_date: XmlElem<Date>;
  org_id: XmlElem<number>;
  person_id: XmlElem<number>;
  signature_type: XmlElem<string>;
}

interface PersonnelDocumentDocumentSignatureFile {
  id: XmlElem<string>;
  file_name: XmlElem<string>;
  file_url: XmlElem<string>;
  size: XmlElem<number>;
}

type PersonnelDocumentDocumentTopElem = XmlTopElem & { Doc: PersonnelDocumentDocument } & 
PersonFillingBase &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  person_id: XmlElem<number>;
  create_date: XmlElem<Date>;
  state_id: XmlElem<string>;
  personnel_document_type_id: XmlElem<number>;
  signature: XmlElem<string>;
  smime_file_url: XmlElem<string>;
  signatures: XmlMultiElem<PersonnelDocumentDocumentSignature>;
  signature_files: XmlMultiElem<PersonnelDocumentDocumentSignatureFile>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
}

type PersonnelDocumentDocument = XmlDocument & { TopElem: PersonnelDocumentDocumentTopElem; };

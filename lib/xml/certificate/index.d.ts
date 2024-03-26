type CertificateDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CertificateDocument;
  serial: XmlElem<string>;
  number: XmlElem<string>;
  type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
  type_name: XmlElem<string>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  delivery_date: XmlElem<Date>;
  expire_date: XmlElem<Date>;
  valid: XmlElem<boolean>;
  signed_by_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  signed_by_name: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  update_expire_date(): void;
  role_id: XmlMultiElemObject<number>;
};

type CertificateDocument = XmlDocument & {
  TopElem: CertificateDocumentTopElem;
  certificate: CertificateDocumentTopElem;
  OnCreate(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};

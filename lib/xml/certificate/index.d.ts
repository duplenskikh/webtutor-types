type CertificateDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CertificateDocument;
  serial: XmlElem<string | null>;
  number: XmlElem<string | null>;
  type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  type_name: XmlElem<string | null>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  delivery_date: XmlElem<Date | null>;
  expire_date: XmlElem<Date | null>;
  valid: XmlElem<boolean>;
  signed_by_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  signed_by_name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  update_expire_date(): void;
  role_id: XmlMultiElemObject<number | null>;
};

type CertificateDocument = XmlDocument & {
  TopElem: CertificateDocumentTopElem;
  certificate: CertificateDocumentTopElem;
  OnCreate(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};

type CertificateCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  serial: XmlElem<string | null>;
  number: XmlElem<string | null>;
  type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  type_name: XmlElem<string | null>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  valid: XmlElem<boolean | null>;
  delivery_date: XmlElem<Date | null>;
  expire_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};

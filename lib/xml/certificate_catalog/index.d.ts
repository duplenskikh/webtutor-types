type CertificateCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  serial: XmlElem<string>;
  number: XmlElem<string>;
  type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
  type_name: XmlElem<string>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  valid: XmlElem<boolean>;
  delivery_date: XmlElem<Date>;
  expire_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): unknown;
};

type CertificateCatalogDocumentTopElem = XmlTopElem & { Doc: CertificateCatalogDocument } & 
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  serial: XmlElem<string>;
  number: XmlElem<string>;
  type_id: XmlElem<number>;
  type_name: XmlElem<string>;
  education_org_id: XmlElem<number>;
  event_id: XmlElem<number>;
  qualification_id: XmlElem<number>;
  person_id: XmlElem<number>;
  valid: XmlElem<boolean>;
  delivery_date: XmlElem<Date>;
  expire_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type CertificateCatalogDocument = XmlDocument & { TopElem: CertificateCatalogDocumentTopElem; };

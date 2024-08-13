type CertificateTypeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  required_quantity: XmlElem<number | null>;
  duration: XmlElem<number | null>;
  forever: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

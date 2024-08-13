type VendorStateCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  vendor_status_type_id: XmlElem<string, typeof common.vendor_status_types>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

type OrgVendorStateCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  vendor_status_id: XmlElem<number | null, VendorStateCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  vendor_status_type_id: XmlElem<string, typeof common.vendor_status_types>;
  start_date: XmlElem<Date | null>;
  recertification_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

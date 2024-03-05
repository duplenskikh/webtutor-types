type VendorStateCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  vendor_status_type_id: XmlElem<string, typeof common.vendor_status_types>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

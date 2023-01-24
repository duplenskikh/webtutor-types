type OrgVendorStateCatalogDocumentTopElem = XmlTopElem & { Doc: OrgVendorStateCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  vendor_status_id: XmlElem<number>;
  education_org_id: XmlElem<number>;
  org_id: XmlElem<number>;
  vendor_status_type_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  recertification_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type OrgVendorStateCatalogDocument = XmlDocument & { TopElem: OrgVendorStateCatalogDocumentTopElem; };

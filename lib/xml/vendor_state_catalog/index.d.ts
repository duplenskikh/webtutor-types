type VendorStateCatalogDocumentTopElem = XmlTopElem & { Doc: VendorStateCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  vendor_status_type_id: XmlElem<string>;
  education_org_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type VendorStateCatalogDocument = XmlDocument & { TopElem: VendorStateCatalogDocumentTopElem; };

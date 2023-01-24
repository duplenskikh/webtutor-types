type ApplicationCatalogDocumentTopElem = XmlTopElem & { Doc: ApplicationCatalogDocument } & 
ObjectCodeNameBase & {
  type: XmlElem<string>;
  list_xms_url: XmlElem<string>;
  default_xms_url: XmlElem<string>;
  web_mode_id: XmlMultiElem<number>;
  vendor: XmlElem<string>;
  vendor_library: XmlElem<string>;
  lic_type: XmlElem<string>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ApplicationCatalogDocument = XmlDocument & { TopElem: ApplicationCatalogDocumentTopElem; };

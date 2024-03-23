type ApplicationCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  type: XmlElem<string, typeof common.application_types>;
  list_xms_url: XmlElem<string>;
  default_xms_url: XmlElem<string>;
  web_mode_id: XmlMultiElemObject<number, WebModeCatalogDocumentTopElem>;
  vendor: XmlElem<string>;
  vendor_library: XmlElem<string>;
  lic_type: XmlElem<string>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

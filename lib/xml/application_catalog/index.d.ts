type ApplicationCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  type: XmlElem<string, typeof common.application_types>;
  list_xms_url: XmlElem<string | null>;
  default_xms_url: XmlElem<string | null>;
  web_mode_id: XmlMultiElemObject<number | null, WebModeCatalogDocumentTopElem>;
  vendor: XmlElem<string | null>;
  vendor_library: XmlElem<string | null>;
  lic_type: XmlElem<string | null>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

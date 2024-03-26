type WebModeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_default: XmlElem<boolean>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  placeholder_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  use_fcache: XmlElem<boolean>;
  searchable_portal: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): void;
};

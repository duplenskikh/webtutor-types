type WebModeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_default: XmlElem<boolean>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  placeholder_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  use_fcache: XmlElem<boolean | null>;
  searchable_portal: XmlElem<boolean | null>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};

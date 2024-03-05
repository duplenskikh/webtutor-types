type OverrideWebTemplateCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number, OverrideWebTemplateCatalogDocumentTopElem>;
  mode: XmlElem<string>;
  mode_exception: XmlElem<string>;
  zone: XmlElem<string>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  custom_web_template_name: XmlElem<string>;
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  weight: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  is_enabled: XmlElem<boolean>;
  wvars_num: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

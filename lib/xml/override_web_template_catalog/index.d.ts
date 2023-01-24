type OverrideWebTemplateCatalogDocumentTopElem = XmlTopElem & { Doc: OverrideWebTemplateCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
  mode: XmlElem<string>;
  mode_exception: XmlElem<string>;
  zone: XmlElem<string>;
  custom_web_template_id: XmlElem<number>;
  custom_web_template_name: XmlElem<string>;
  web_design_id: XmlElem<number>;
  site_id: XmlElem<number>;
  weight: XmlElem<number>;
  is_enabled: XmlElem<boolean>;
  wvars_num: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type OverrideWebTemplateCatalogDocument = XmlDocument & { TopElem: OverrideWebTemplateCatalogDocumentTopElem; };

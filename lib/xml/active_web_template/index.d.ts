interface ActiveWebTemplateDocumentOverrideWebTemplate extends WebVariablesBase {
  override_web_template_id: XmlElem<number>;
  mode: XmlElem<string>;
  access_mode: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  custom_web_template_id: XmlElem<number>;
  zone: XmlElem<string>;
  cache_static: XmlElem<string>;
  cache_dynamic: XmlElem<string>;
  cache_html: XmlElem<string>;
  cache_vars: XmlElem<string>;
}

interface ActiveWebTemplateDocumentCustomWebTemplate extends WebVariablesBase, ZonesBase {
  custom_web_template_id: XmlElem<number>;
  saved: XmlElem<boolean>;
  out_type: XmlElem<string, typeof common.out_types>;
  cwt_type: XmlElem<string, typeof common.cwt_types>;
  use_session_cache: XmlElem<boolean>;
  web_page: XmlElem<string>;
  html: XmlElem<string>;
}

type ActiveWebTemplateDocumentTopElem = XmlTopElem & {
  Doc: ActiveWebTemplateDocument;
  name(): string;
  access_level: XmlElem<number>;
  access_role: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  mode: XmlElem<string>;
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  hash(): string;
  override_web_templates: XmlMultiElem<ActiveWebTemplateDocumentOverrideWebTemplate>;
  custom_web_templates: XmlMultiElem<ActiveWebTemplateDocumentCustomWebTemplate>;
  counter_template: XmlElem<number>;
  counter_saved_template: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type ActiveWebTemplateDocument = XmlDocument & {
  TopElem: ActiveWebTemplateDocumentTopElem;
  active_web_template: ActiveWebTemplateDocumentTopElem;
  DocDesc(): string;
};

interface ActiveWebTemplateDocumentOverrideWebTemplate extends WebVariablesBase {
  override_web_template_id: XmlElem<number | null>;
  mode: XmlElem<string | null>;
  access_mode: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  custom_web_template_id: XmlElem<number | null>;
  zone: XmlElem<string | null>;
  cache_static: XmlElem<string | null>;
  cache_dynamic: XmlElem<string | null>;
  cache_html: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
}

interface ActiveWebTemplateDocumentCustomWebTemplate extends WebVariablesBase, ZonesBase {
  custom_web_template_id: XmlElem<number | null>;
  saved: XmlElem<boolean>;
  out_type: XmlElem<string, typeof common.out_types>;
  cwt_type: XmlElem<string, typeof common.cwt_types>;
  use_session_cache: XmlElem<boolean>;
  web_page: XmlElem<string | null>;
  html: XmlElem<string | null>;
}

type ActiveWebTemplateDocumentTopElem = XmlTopElem & {
  Doc: ActiveWebTemplateDocument;
  name(): string;
  access_level: XmlElem<number | null>;
  access_role: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
  mode: XmlElem<string | null>;
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  hash(): string;
  override_web_templates: XmlMultiElem<ActiveWebTemplateDocumentOverrideWebTemplate | null>;
  custom_web_templates: XmlMultiElem<ActiveWebTemplateDocumentCustomWebTemplate | null>;
  counter_template: XmlElem<number>;
  counter_saved_template: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ActiveWebTemplateDocument = XmlDocument & {
  TopElem: ActiveWebTemplateDocumentTopElem;
  active_web_template: ActiveWebTemplateDocumentTopElem;
  DocDesc(): string;
};

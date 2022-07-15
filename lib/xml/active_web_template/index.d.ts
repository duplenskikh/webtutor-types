interface ActiveWebTemplateOverrideWebTemplate extends WebVariablesBase {
  override_web_template_id?: XmlElem<number>;
  mode?: XmlElem<string>;
  access_mode?: XmlElem<string>;
  custom_web_template_id?: XmlElem<number>;
  zone?: XmlElem<string>;
  cache_static?: XmlElem<string>;
  cache_dynamic?: XmlElem<string>;
  cache_html?: XmlElem<string>;
  cache_vars?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
}

interface ActiveWebTemplateCustomWebTemplate extends WebVariablesBase, ZonesBase {
  custom_web_template_id?: XmlElem<number>;
  saved?: XmlElem<boolean>;
  out_type?: XmlElem<string>;
  cwt_type?: XmlElem<string>;
  use_session_cache?: XmlElem<boolean>;
  web_page?: XmlElem<string>;
  html?: XmlElem<string>;
}

interface ActiveWebTemplateTopElem extends XmlTopElem<ActiveWebTemplateDocument> {
  access_level?: XmlElem<number>;
  access_role?: XmlElem<string>;
  mode?: XmlElem<string>;
  web_design_id?: XmlElem<number>;
  site_id?: XmlElem<number>;
  counter_template?: XmlElem<number>;
  counter_saved_template?: XmlElem<number>;
  counter_saved_return?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  override_web_templates?: XmlMultiElem<ActiveWebTemplateOverrideWebTemplate>;
  custom_web_templates?: XmlMultiElem<ActiveWebTemplateCustomWebTemplate>;
  name?(): string;
  hash?(): any;
}

type ActiveWebTemplateDocument = XmlDocument<ActiveWebTemplateTopElem>;

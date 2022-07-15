interface CustomWebTemplateIncludeCustomWebTemplate {
  include_custom_web_template_id?: XmlElem<number>;
}

interface CustomWebTemplateTuning {
  height?: XmlElem<number>;
}

interface CustomWebTemplateView extends DescBase {
}

interface CustomWebTemplateTopElem extends XmlTopElem<CustomWebTemplateDocument>, ObjectCodeNameBase, ExecCodeBase, ZonesBase, WebVariablesBase {
  category?: XmlElem<string>;
  html?: XmlElem<string>;
  url?: XmlElem<string>;
  use_session_cache?: XmlElem<boolean>;
  cwt_type?: XmlElem<string>;
  out_type?: XmlElem<string>;
  mode?: XmlElem<string>;
  template?: XmlElem<string>;
  zone_selector?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  converter?: XmlElem<boolean>;
  is_enabled?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
  include_custom_web_templates?: XmlMultiElem<CustomWebTemplateIncludeCustomWebTemplate>;
  tuning?: XmlElem<CustomWebTemplateTuning>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<CustomWebTemplateView>;
}

type CustomWebTemplateDocument = XmlDocument<CustomWebTemplateTopElem>;

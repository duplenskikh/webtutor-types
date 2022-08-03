interface CustomWebTemplateDocumentIncludeCustomWebTemplate {
  include_custom_web_template_id: XmlElem<number>;
}

interface CustomWebTemplateDocumentTuning {
  height: XmlElem<number>;
}

type CustomWebTemplateDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
ZonesBase &
WebVariablesBase & {
  Doc: CustomWebTemplateDocument;
  category: XmlElem<string>;
  html: XmlElem<string>;
  url: XmlElem<string>;
  use_session_cache: XmlElem<boolean>;
  cwt_type: XmlElem<string>;
  out_type: XmlElem<string>;
  mode: XmlElem<string>;
  template: XmlElem<string>;
  tuning: XmlElem<CustomWebTemplateDocumentTuning>;
  include_custom_web_templates: XmlMultiElem<CustomWebTemplateDocumentIncludeCustomWebTemplate>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  is_enabled: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
}

type CustomWebTemplateDocument = XmlDocument & {
  TopElem: CustomWebTemplateDocumentTopElem;
};

interface CustomWebTemplateDocumentTuning {
  height: XmlElem<number | null>;
}

interface CustomWebTemplateDocumentIncludeCustomWebTemplate {
  include_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
}

type CustomWebTemplateDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
ZonesBase &
I18nBase &
WebVariablesBase & {
  Doc: CustomWebTemplateDocument;
  category: XmlElem<string | null>;
  html: XmlElem<string | null>;
  url: XmlElem<string | null>;
  use_session_cache: XmlElem<boolean>;
  cwt_type: XmlElem<string, typeof common.cwt_types>;
  out_type: XmlElem<string, typeof common.out_types>;
  mode: XmlElem<string | null>;
  template: XmlElem<string | null>;
  tuning: XmlElem<CustomWebTemplateDocumentTuning | null>;
  include_custom_web_templates: XmlMultiElem<CustomWebTemplateDocumentIncludeCustomWebTemplate | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  is_enabled: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number | null>;
};

type CustomWebTemplateDocument = XmlDocument & {
  TopElem: CustomWebTemplateDocumentTopElem;
  custom_web_template: CustomWebTemplateDocumentTopElem;
  DocDesc(): string;
};

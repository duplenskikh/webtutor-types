type OverrideWebTemplateDocumentTopElem = XmlTopElem & { Doc: OverrideWebTemplateDocument } & 
WebVariablesBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
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
  cache_static: XmlElem<string>;
  cache_dynamic: XmlElem<string>;
  cache_html: XmlElem<string>;
  cache_vars: XmlElem<string>;
  cache_refresh: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type OverrideWebTemplateDocument = XmlDocument & {
  TopElem: OverrideWebTemplateDocumentTopElem;
};

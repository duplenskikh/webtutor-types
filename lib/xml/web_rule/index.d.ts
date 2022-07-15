interface WebRuleTopElem extends XmlTopElem<WebRuleDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_pattern?: XmlElem<boolean>;
  use_matches?: XmlElem<boolean>;
  url?: XmlElem<string>;
  script?: XmlElem<string>;
  is_enabled?: XmlElem<boolean>;
  redirect_url?: XmlElem<string>;
  redirect_type?: XmlElem<number>;
  redirect_web_mode_id?: XmlElem<number>;
  web_design_id?: XmlElem<number>;
  site_id?: XmlElem<number>;
  weight?: XmlElem<number>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  script_validate?(): any;
}

type WebRuleDocument = XmlDocument<WebRuleTopElem>;

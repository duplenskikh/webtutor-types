interface WebDesignTopElem extends XmlTopElem<WebDesignDocument>, WebVariablesBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  css_custom_web_template_id?: XmlElem<number>;
  default_custom_web_template_id?: XmlElem<number>;
  home_custom_web_template_id?: XmlElem<number>;
  resources_url?: XmlElem<string>;
  xaml_interpreter_id?: XmlElem<string>;
  xaml_interpreter_css_template_id?: XmlElem<number>;
  additional_css_template_id?: XmlElem<number>;
  lp_custom_web_template_id?: XmlElem<number>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type WebDesignDocument = XmlDocument<WebDesignTopElem>;

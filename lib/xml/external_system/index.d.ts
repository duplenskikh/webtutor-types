interface ExternalSystemKnowledgeUrlPair {
  code?: XmlElem<string>;
  knowledge_part_id?: XmlElem<number>;
}

interface ExternalSystemSettings {
  float_button_title?: XmlElem<string>;
  list_web_template_id?: XmlElem<number>;
  bubble_web_template_id?: XmlElem<number>;
  custom_web_template_id?: XmlElem<number>;
  list_web_template_params?: XmlElem<WebVariablesBase>;
  bubble_web_template_params?: XmlElem<WebVariablesBase>;
  custom_web_template_params?: XmlElem<WebVariablesBase>;
}

interface ExternalSystemView {
  selector?: XmlElem<string>;
}

interface ExternalSystemTopElem extends XmlTopElem<ExternalSystemDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  anonymous_user_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  knowledge_url_pairs?: XmlMultiElem<ExternalSystemKnowledgeUrlPair>;
  settings?: XmlElem<ExternalSystemSettings>;
  view?: XmlElem<ExternalSystemView>;
}

type ExternalSystemDocument = XmlDocument<ExternalSystemTopElem>;

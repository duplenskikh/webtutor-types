interface CustomChatbotTemplateIncludeCustomChatbotTemplate {
  include_custom_chatbot_template_id?: XmlElem<number>;
}

interface CustomChatbotTemplateView extends DescBase {
  selector?: XmlElem<string>;
}

interface CustomChatbotTemplateTopElem extends XmlTopElem<CustomChatbotTemplateDocument>, ExecCodeBase, MsParametersBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  eval_str?: XmlElem<string>;
  url?: XmlElem<string>;
  out_type?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
  include_custom_chatbot_templates?: XmlMultiElem<CustomChatbotTemplateIncludeCustomChatbotTemplate>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<CustomChatbotTemplateView>;
}

type CustomChatbotTemplateDocument = XmlDocument<CustomChatbotTemplateTopElem>;

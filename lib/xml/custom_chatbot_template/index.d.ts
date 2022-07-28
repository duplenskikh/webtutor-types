interface CustomChatbotTemplateDocumentIncludeCustomChatbotTemplate {
  include_custom_chatbot_template_id?: XmlElem<number>;
}

type CustomChatbotTemplateDocumentTopElem = XmlTopElem & { Doc: CustomChatbotTemplateDocument } & 
  ExecCodeBase &
  MsParametersBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  eval_str?: XmlElem<string>;
  url?: XmlElem<string>;
  out_type?: XmlElem<string>;
  include_custom_chatbot_templates?: XmlMultiElem<CustomChatbotTemplateDocumentIncludeCustomChatbotTemplate>;
  access?: XmlElem<AccessDocBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
}

type CustomChatbotTemplateDocument = XmlDocument & { TopElem: CustomChatbotTemplateDocumentTopElem; };

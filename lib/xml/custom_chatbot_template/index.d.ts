interface CustomChatbotTemplateDocumentIncludeCustomChatbotTemplate {
  include_custom_chatbot_template_id: XmlElem<number, CustomChatbotTemplateCatalogDocumentTopElem>;
}

type CustomChatbotTemplateDocumentTopElem = XmlTopElem &
ExecCodeBase &
MsParametersBase & {
  Doc: CustomChatbotTemplateDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  eval_str: XmlElem<string>;
  url: XmlElem<string>;
  out_type: XmlElem<string, typeof common.chatbot_out_types>;
  include_custom_chatbot_templates: XmlMultiElem<CustomChatbotTemplateDocumentIncludeCustomChatbotTemplate>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
};

type CustomChatbotTemplateDocument = XmlDocument & {
  TopElem: CustomChatbotTemplateDocumentTopElem;
  custom_chatbot_template: CustomChatbotTemplateDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

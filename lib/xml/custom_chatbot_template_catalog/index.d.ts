type CustomChatbotTemplateCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  url: XmlElem<string>;
  out_type: XmlElem<string, typeof common.chatbot_out_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): unknown;
};

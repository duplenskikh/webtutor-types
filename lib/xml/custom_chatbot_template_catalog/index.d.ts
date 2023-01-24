type CustomChatbotTemplateCatalogDocumentTopElem = XmlTopElem & { Doc: CustomChatbotTemplateCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  url: XmlElem<string>;
  out_type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
}

type CustomChatbotTemplateCatalogDocument = XmlDocument & { TopElem: CustomChatbotTemplateCatalogDocumentTopElem; };

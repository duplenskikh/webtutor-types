type ChatbotCatalogDocumentTopElem = XmlTopElem & { Doc: ChatbotCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  start_chatbot_stage_id: XmlElem<number>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  create_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ChatbotCatalogDocument = XmlDocument & { TopElem: ChatbotCatalogDocumentTopElem; };

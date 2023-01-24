type ChatbotChatCatalogDocumentTopElem = XmlTopElem & { Doc: ChatbotChatCatalogDocument } & 
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  last_message_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  bot_id: XmlElem<string>;
  chatbot_stage_id: XmlElem<number>;
  chatbot_type_id: XmlElem<number>;
  chatbot_id: XmlElem<number>;
  conversation_id: XmlElem<number>;
  state_id: XmlElem<string>;
  person_id: XmlElem<number>;
}

type ChatbotChatCatalogDocument = XmlDocument & { TopElem: ChatbotChatCatalogDocumentTopElem; };

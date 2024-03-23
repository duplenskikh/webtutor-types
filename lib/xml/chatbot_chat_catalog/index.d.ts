type ChatbotChatCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  last_message_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  bot_id: XmlElem<string>;
  chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  chatbot_type_id: XmlElem<number, ChatbotTypeCatalogDocumentTopElem>;
  chatbot_id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.conversation_participant_states>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  use_escalation: XmlElem<boolean>;
  escalation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

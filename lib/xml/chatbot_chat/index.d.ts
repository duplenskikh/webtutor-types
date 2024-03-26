interface ChatbotChatDocumentMessage {
  id: XmlElem<string>;
  date: XmlElem<Date>;
  text: XmlElem<string>;
  last_chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  next_chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
}

interface ChatbotChatDocumentTempValue {
  id: XmlElem<string>;
  value: XmlElem<string>;
}

interface ChatbotChatDocumentAimlData {
  custom_chatbot_template_id: XmlElem<number, CustomChatbotTemplateCatalogDocumentTopElem>;
  data: XmlElem<string>;
}

interface ChatbotChatDocumentEscalationWorkedEscalationStage {
  escalation_id: XmlElem<string>;
}

interface ChatbotChatDocumentEscalation {
  start_date: XmlElem<Date>;
  escalation_date: XmlElem<Date>;
  use_escalation: XmlElem<boolean>;
  worked_escalation_stages: XmlMultiElem<ChatbotChatDocumentEscalationWorkedEscalationStage>;
}

type ChatbotChatDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: ChatbotChatDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  bot_id: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  chatbot_type_id: XmlElem<number, ChatbotTypeCatalogDocumentTopElem>;
  chatbot_id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.conversation_participant_states>;
  lng_id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  json_string: XmlElem<string>;
  messages: XmlMultiElem<ChatbotChatDocumentMessage>;
  temp_values: XmlMultiElem<ChatbotChatDocumentTempValue>;
  aiml_datas: XmlMultiElem<ChatbotChatDocumentAimlData>;
  escalation: XmlElem<ChatbotChatDocumentEscalation>;
  last_message_id: XmlElem<string>;
  last_message_xml: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  calculate_escalation_date(stageTopElem: unknown): boolean;
};

type ChatbotChatDocument = XmlDocument & {
  TopElem: ChatbotChatDocumentTopElem;
  chatbot_chat: ChatbotChatDocumentTopElem;
  DocDesc(): string;
};

interface ChatbotChatDocumentMessage {
  id?: XmlElem<string>;
  date?: XmlElem<Date>;
  text?: XmlElem<string>;
  last_chatbot_stage_id?: XmlElem<number>;
  next_chatbot_stage_id?: XmlElem<number>;
}

interface ChatbotChatDocumentTempValue {
  id?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface ChatbotChatDocumentAimlData {
  custom_chatbot_template_id?: XmlElem<number>;
  data?: XmlElem<string>;
}

type ChatbotChatDocumentTopElem = XmlTopElem & { Doc: ChatbotChatDocument } & 
PersonFillingBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  bot_id?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  chatbot_stage_id?: XmlElem<number>;
  chatbot_type_id?: XmlElem<number>;
  chatbot_id?: XmlElem<number>;
  conversation_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
  lng_id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  messages?: XmlMultiElem<ChatbotChatDocumentMessage>;
  temp_values?: XmlMultiElem<ChatbotChatDocumentTempValue>;
  aiml_datas?: XmlMultiElem<ChatbotChatDocumentAimlData>;
  last_message_id?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ChatbotChatDocument = XmlDocument & { TopElem: ChatbotChatDocumentTopElem; };

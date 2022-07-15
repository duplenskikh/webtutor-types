interface ChatbotChatMessage {
  id?: XmlElem<string>;
  date?: XmlElem<Date>;
  text?: XmlElem<string>;
  last_chatbot_stage_id?: XmlElem<number>;
  next_chatbot_stage_id?: XmlElem<number>;
}

interface ChatbotChatTempValue {
  id?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface ChatbotChatAimlData {
  custom_chatbot_template_id?: XmlElem<number>;
  data?: XmlElem<string>;
}

interface ChatbotChatTopElem extends XmlTopElem<ChatbotChatDocument>, PersonFillingBase, CustomElemsBase {
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
  last_message_id?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  messages?: XmlMultiElem<ChatbotChatMessage>;
  temp_values?: XmlMultiElem<ChatbotChatTempValue>;
  aiml_datas?: XmlMultiElem<ChatbotChatAimlData>;
}

type ChatbotChatDocument = XmlDocument<ChatbotChatTopElem>;

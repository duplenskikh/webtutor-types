interface ChatbotDocumentChatbotType {
  bot_id: XmlElem<string>;
  chatbot_type_id: XmlElem<number>;
  webhook_url: XmlElem<string>;
  host_id: XmlElem<number>;
  chatbot_code: XmlElem<string>;
}

interface ChatbotDocumentUniversalCommand {
  id: XmlElem<string>;
  is_inline_keyboard: XmlElem<boolean>;
  name: XmlElem<string>;
  inline_keyboard_id: XmlElem<string>;
  condition_eval: XmlElem<string>;
  chatbot_stage_id: XmlElem<number>;
}

type ChatbotDocumentTopElem = XmlTopElem & { Doc: ChatbotDocument } & 
  WebVariablesBase &
  CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  start_chatbot_stage_id: XmlElem<number>;
  chatbot_types: XmlMultiElem<ChatbotDocumentChatbotType>;
  command_eval_str: XmlElem<string>;
  unknow_command_text: XmlElem<string>;
  is_eval_unknow_command: XmlElem<boolean>;
  unknow_command_chatbot_stage_id: XmlElem<number>;
  universal_commands: XmlMultiElem<ChatbotDocumentUniversalCommand>;
  regular_eval_str: XmlElem<string>;
  write_to_messages: XmlElem<boolean>;
  logged: XmlElem<boolean>;
  text_area: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
}

type ChatbotDocument = XmlDocument & { TopElem: ChatbotDocumentTopElem; };

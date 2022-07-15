interface ChatbotChatbotType {
  bot_id?: XmlElem<string>;
  chatbot_type_id?: XmlElem<number>;
  webhook_url?: XmlElem<string>;
  host_id?: XmlElem<number>;
  chatbot_code?: XmlElem<string>;
}

interface ChatbotUniversalCommand {
  id?: XmlElem<string>;
  is_inline_keyboard?: XmlElem<boolean>;
  name?: XmlElem<string>;
  inline_keyboard_id?: XmlElem<string>;
  condition_eval?: XmlElem<string>;
  chatbot_stage_id?: XmlElem<number>;
}

interface ChatbotView extends DescBase {
}

interface ChatbotTopElem extends XmlTopElem<ChatbotDocument>, WebVariablesBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  start_chatbot_stage_id?: XmlElem<number>;
  command_eval_str?: XmlElem<string>;
  unknow_command_text?: XmlElem<string>;
  is_eval_unknow_command?: XmlElem<boolean>;
  unknow_command_chatbot_stage_id?: XmlElem<number>;
  regular_eval_str?: XmlElem<string>;
  write_to_messages?: XmlElem<boolean>;
  logged?: XmlElem<boolean>;
  text_area?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  chatbot_types?: XmlMultiElem<ChatbotChatbotType>;
  universal_commands?: XmlMultiElem<ChatbotUniversalCommand>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ChatbotView>;
}

type ChatbotDocument = XmlDocument<ChatbotTopElem>;

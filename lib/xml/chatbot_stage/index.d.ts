interface ChatbotStageDocumentInlineKeyboard {
  id?: XmlElem<string>;
  text?: XmlElem<string>;
  callback_data?: XmlElem<string>;
  next_row?: XmlElem<boolean>;
  url?: XmlElem<string>;
  rows?: XmlElem<number>;
  columns?: XmlElem<number>;
}

interface ChatbotStageDocumentKeyboard {
  id?: XmlElem<string>;
  text?: XmlElem<string>;
  request_contact?: XmlElem<boolean>;
  request_location?: XmlElem<boolean>;
  next_row?: XmlElem<boolean>;
  rows?: XmlElem<number>;
  columns?: XmlElem<number>;
}

interface ChatbotStageDocumentCommand {
  id?: XmlElem<string>;
  is_inline_keyboard?: XmlElem<boolean>;
  name?: XmlElem<string>;
  inline_keyboard_id?: XmlElem<string>;
  condition_eval?: XmlElem<string>;
  chatbot_stage_id?: XmlElem<number>;
}

type ChatbotStageDocumentTopElem = XmlTopElem & { Doc: ChatbotStageDocument } & 
  MsParametersBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  chatbot_id?: XmlElem<number>;
  is_use_universal_commands?: XmlElem<boolean>;
  is_write_message?: XmlElem<boolean>;
  send_text?: XmlElem<string>;
  action_type?: XmlElem<string>;
  is_eval_send_text?: XmlElem<boolean>;
  custom_chatbot_template_id?: XmlElem<number>;
  keyboard_type?: XmlElem<string>;
  is_eval_generate_keyboard?: XmlElem<boolean>;
  eval_generate_keyboard?: XmlElem<string>;
  unknow_command_text?: XmlElem<string>;
  is_send_before_standart_command?: XmlElem<boolean>;
  is_eval_unknow_command?: XmlElem<boolean>;
  unknow_command_chatbot_stage_id?: XmlElem<number>;
  inline_keyboards?: XmlMultiElem<ChatbotStageDocumentInlineKeyboard>;
  keyboards?: XmlMultiElem<ChatbotStageDocumentKeyboard>;
  command_eval_str?: XmlElem<string>;
  commands?: XmlMultiElem<ChatbotStageDocumentCommand>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ChatbotStageDocument = XmlDocument & { TopElem: ChatbotStageDocumentTopElem; };

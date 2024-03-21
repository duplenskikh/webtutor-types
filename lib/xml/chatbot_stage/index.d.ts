interface ChatbotStageDocumentSendTextLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentEvalGenerateKeyboardLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentUnknowCommandTextLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentUnknowCommandChatbotStageUnknowCommandChatbotStageUnknowCommandTextLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentUnknowCommandChatbotStageUnknowCommandChatbotStage extends MsCodeLibraryCondition {
  id: XmlElem<string>;
  condition_eval: XmlElem<string>;
  unknow_command_text: XmlElem<string>;
  is_send_before_standart_command: XmlElem<boolean>;
  is_eval_unknow_command: XmlElem<boolean>;
  unknow_command_chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  unknow_command_text_library: XmlElem<ChatbotStageDocumentUnknowCommandChatbotStageUnknowCommandChatbotStageUnknowCommandTextLibrary>;
}

interface ChatbotStageDocumentUnknowCommandChatbotStage {
  unknow_command_chatbot_stages: XmlMultiElem<ChatbotStageDocumentUnknowCommandChatbotStageUnknowCommandChatbotStage>;
}

interface ChatbotStageDocumentInlineKeyboard extends MsCodeLibraryCondition {
  id: XmlElem<string>;
  text: XmlElem<string>;
  callback_data: XmlElem<string>;
  next_row: XmlElem<boolean>;
  url: XmlElem<string>;
  rows: XmlElem<number>;
  columns: XmlElem<number>;
  button_type_id: XmlElem<string, typeof common.chatbot_button_types>;
  perfom_condition: XmlElem<string>;
}

interface ChatbotStageDocumentKeyboard extends MsCodeLibraryCondition {
  id: XmlElem<string>;
  text: XmlElem<string>;
  request_contact: XmlElem<boolean>;
  request_location: XmlElem<boolean>;
  next_row: XmlElem<boolean>;
  rows: XmlElem<number>;
  columns: XmlElem<number>;
  perfom_condition: XmlElem<string>;
}

interface ChatbotStageDocumentCommandEvalLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentCommandCommandActionLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentCommand extends MsCodeLibraryCondition {
  id: XmlElem<string>;
  is_inline_keyboard: XmlElem<boolean>;
  name: XmlElem<string>;
  inline_keyboard_id: XmlElem<string>;
  condition_eval: XmlElem<string>;
  chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  command_action: XmlElem<string>;
  command_action_library: XmlElem<ChatbotStageDocumentCommandCommandActionLibrary>;
}

interface ChatbotStageDocumentEscalationEscalationStageEscalationCommandTextLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentEscalationEscalationStageEscalationActionLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentEscalationEscalationStage extends MsCodeLibraryCondition {
  id: XmlElem<string>;
  escalation_hour: XmlElem<number>;
  escalation_command_text: XmlElem<string>;
  is_eval_escalation_command: XmlElem<boolean>;
  condition_eval: XmlElem<string>;
  is_inline_keyboard: XmlElem<boolean>;
  inline_keyboard_id: XmlElem<string>;
  escalation_command_text_library: XmlElem<ChatbotStageDocumentEscalationEscalationStageEscalationCommandTextLibrary>;
  escalation_action: XmlElem<string>;
  escalation_action_library: XmlElem<ChatbotStageDocumentEscalationEscalationStageEscalationActionLibrary>;
  chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentEscalation {
  escalation_stages: XmlMultiElem<ChatbotStageDocumentEscalationEscalationStage>;
}

interface ChatbotStageDocumentTileBlockTileButtonsBlockButton {
  id: XmlElem<string>;
  title: XmlElem<string>;
  button_type_id: XmlElem<string, typeof common.chatbot_button_types>;
  type: XmlElem<string>;
  action_type_id: XmlElem<string, typeof common.chatbot_action_types>;
  url: XmlElem<string>;
  callback_data: XmlElem<string>;
}

interface ChatbotStageDocumentTileBlockTileButtonsBlock {
  buttons: XmlMultiElem<ChatbotStageDocumentTileBlockTileButtonsBlockButton>;
}

interface ChatbotStageDocumentTileBlockTile {
  id: XmlElem<string>;
  title: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  icon_url: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  type_id: XmlElem<string, typeof common.chatbot_tile_types>;
  buttons_block: XmlElem<ChatbotStageDocumentTileBlockTileButtonsBlock>;
}

interface ChatbotStageDocumentTileBlock {
  tiles: XmlMultiElem<ChatbotStageDocumentTileBlockTile>;
}

type ChatbotStageDocumentTopElem = XmlTopElem &
MsParametersBase & {
  Doc: ChatbotStageDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  chatbot_id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
  is_use_universal_commands: XmlElem<boolean>;
  is_write_message: XmlElem<boolean>;
  send_text: XmlElem<string>;
  send_text_library: XmlElem<ChatbotStageDocumentSendTextLibrary>;
  action_type: XmlElem<string>;
  is_eval_send_text: XmlElem<boolean>;
  custom_chatbot_template_id: XmlElem<number, CustomChatbotTemplateCatalogDocumentTopElem>;
  keyboard_type: XmlElem<string, typeof common.keyboard_types>;
  is_eval_generate_keyboard: XmlElem<boolean>;
  eval_generate_keyboard: XmlElem<string>;
  eval_generate_keyboard_library: XmlElem<ChatbotStageDocumentEvalGenerateKeyboardLibrary>;
  unknow_command_text: XmlElem<string>;
  is_send_before_standart_command: XmlElem<boolean>;
  is_eval_unknow_command: XmlElem<boolean>;
  unknow_command_text_library: XmlElem<ChatbotStageDocumentUnknowCommandTextLibrary>;
  unknow_command_chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  unknow_command_chatbot_stage: XmlElem<ChatbotStageDocumentUnknowCommandChatbotStage>;
  inline_keyboards: XmlMultiElem<ChatbotStageDocumentInlineKeyboard>;
  keyboards: XmlMultiElem<ChatbotStageDocumentKeyboard>;
  command_eval_str: XmlElem<string>;
  command_eval_library: XmlElem<ChatbotStageDocumentCommandEvalLibrary>;
  commands: XmlMultiElem<ChatbotStageDocumentCommand>;
  escalation: XmlElem<ChatbotStageDocumentEscalation>;
  tile_block: XmlElem<ChatbotStageDocumentTileBlock>;
  auto_chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type ChatbotStageDocument = XmlDocument & {
  TopElem: ChatbotStageDocumentTopElem;
  chatbot_stage: ChatbotStageDocumentTopElem;
  DocDesc(): unknown;
};

interface ChatbotDocumentChatbotType {
  bot_id: XmlElem<string>;
  chatbot_type_id: XmlElem<number, ChatbotTypeCatalogDocumentTopElem>;
  webhook_url: XmlElem<string>;
  host_id: XmlElem<number, HostCatalogDocumentTopElem>;
  chatbot_code: XmlElem<string>;
}

interface ChatbotDocumentCommandEvalLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotDocumentUnknowCommandTextLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotDocumentUniversalCommand extends MsCodeLibraryCondition {
  id: XmlElem<string>;
  is_inline_keyboard: XmlElem<boolean>;
  name: XmlElem<string>;
  inline_keyboard_id: XmlElem<string>;
  condition_eval: XmlElem<string>;
  chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
}

interface ChatbotDocumentUnknowCommandChatbotStageUnknowCommandChatbotStageUnknowCommandTextLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotDocumentUnknowCommandChatbotStageUnknowCommandChatbotStage extends MsCodeLibraryCondition {
  id: XmlElem<string>;
  condition_eval: XmlElem<string>;
  unknow_command_text: XmlElem<string>;
  is_send_before_standart_command: XmlElem<boolean>;
  is_eval_unknow_command: XmlElem<boolean>;
  unknow_command_chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  unknow_command_text_library: XmlElem<ChatbotDocumentUnknowCommandChatbotStageUnknowCommandChatbotStageUnknowCommandTextLibrary>;
}

interface ChatbotDocumentUnknowCommandChatbotStage {
  unknow_command_chatbot_stages: XmlMultiElem<ChatbotDocumentUnknowCommandChatbotStageUnknowCommandChatbotStage>;
}

interface ChatbotDocumentRegularEvalLibrary extends MsCodeLibraryConditionBase {
  eval_code_type: XmlElem<string, typeof common.eval_code_types>;
  classification_model_id: XmlElem<number, ClassificationModelCatalogDocumentTopElem>;
}

type ChatbotDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase & {
  Doc: ChatbotDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  disp_name: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  start_chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  usage_object_type: XmlElem<string, typeof common.usage_object_types>;
  chatbot_types: XmlMultiElem<ChatbotDocumentChatbotType>;
  command_eval_str: XmlElem<string>;
  command_eval_library: XmlElem<ChatbotDocumentCommandEvalLibrary>;
  unknow_command_text: XmlElem<string>;
  is_eval_unknow_command: XmlElem<boolean>;
  unknow_command_chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  unknow_command_text_library: XmlElem<ChatbotDocumentUnknowCommandTextLibrary>;
  universal_commands: XmlMultiElem<ChatbotDocumentUniversalCommand>;
  unknow_command_chatbot_stage: XmlElem<ChatbotDocumentUnknowCommandChatbotStage>;
  regular_eval_str: XmlElem<string>;
  regular_eval_library: XmlElem<ChatbotDocumentRegularEvalLibrary>;
  write_to_messages: XmlElem<boolean>;
  logged: XmlElem<boolean>;
  text_area: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElemObject<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type ChatbotDocument = XmlDocument & {
  TopElem: ChatbotDocumentTopElem;
  chatbot: ChatbotDocumentTopElem;
  DocDesc(): unknown;
};

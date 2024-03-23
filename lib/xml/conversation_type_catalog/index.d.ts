type ConversationTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  visible_type_id: XmlElem<string, typeof common.conversation_visible_types>;
  use_open_script: XmlElem<boolean>;
  use_additional_info_script: XmlElem<boolean>;
  prohibit_write: XmlElem<boolean>;
  can_call: XmlElem<boolean>;
  can_change_participant: XmlElem<boolean>;
  can_show_additional_info: XmlElem<boolean>;
  open_additional_info: XmlElem<boolean>;
  chatbot_id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

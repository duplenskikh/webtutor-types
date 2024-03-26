interface ConversationTypeDocumentDispRole {
  id: XmlElem<string>;
  name: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
}

interface ConversationTypeDocumentCustomState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

type ConversationTypeDocumentTopElem = XmlTopElem &
FuncManagersBase & {
  Doc: ConversationTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  visible_type_id: XmlElem<string, typeof common.conversation_visible_types>;
  disp_roles: XmlMultiElem<ConversationTypeDocumentDispRole>;
  custom_states: XmlMultiElem<ConversationTypeDocumentCustomState>;
  prohibit_write: XmlElem<boolean>;
  can_call: XmlElem<boolean>;
  can_change_participant: XmlElem<boolean>;
  can_show_additional_info: XmlElem<boolean>;
  open_additional_info: XmlElem<boolean>;
  chatbot_id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
  open_script: XmlElem<string>;
  additional_info_script: XmlElem<string>;
  additional_info_script_url: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ConversationTypeDocument = XmlDocument & {
  TopElem: ConversationTypeDocumentTopElem;
  conversation_type: ConversationTypeDocumentTopElem;
};

interface ConversationDocumentParticipant extends ObjectTypeBase {
  id: XmlElem<string>;
  state_id: XmlElem<string, typeof common.conversation_participant_states>;
  create_date: XmlElem<Date>;
  comment: XmlElem<string>;
}

interface ConversationDocumentProhibition {
  id: XmlElem<string>;
  type_id: XmlElem<string, typeof common.prohibition_types>;
  create_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface ConversationDocumentRelatedChat {
  related_chat_id: XmlElem<number, ChatbotChatCatalogDocumentTopElem>;
}

interface ConversationDocumentKeyboardsBlockKeyboard {
  id: XmlElem<string>;
  text: XmlElem<string>;
  request_contact: XmlElem<boolean>;
  request_location: XmlElem<boolean>;
  next_row: XmlElem<boolean>;
}

interface ConversationDocumentKeyboardsBlock {
  keyboards: XmlMultiElem<ConversationDocumentKeyboardsBlockKeyboard>;
}

type ConversationDocumentTopElem = XmlTopElem &
PersonFillingBase &
FuncManagersBase &
CustomElemsBase & {
  Doc: ConversationDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  create_date: XmlElem<Date>;
  conversation_type_id: XmlElem<number, ConversationTypeCatalogDocumentTopElem>;
  format_id: XmlElem<string, typeof common.conversation_formats>;
  state_id: XmlElem<string, typeof common.account_status_types>;
  custom_state_id: XmlElem<string>;
  is_public: XmlElem<boolean>;
  prohibit_write: XmlElem<boolean>;
  can_call: XmlElem<boolean>;
  can_change_participant: XmlElem<boolean>;
  can_show_additional_info: XmlElem<boolean>;
  created: XmlElem<boolean>;
  position_priority: XmlElem<number>;
  list_css: XmlElem<string>;
  desc: XmlElem<string>;
  participants: XmlMultiElem<ConversationDocumentParticipant>;
  prohibitions: XmlMultiElem<ConversationDocumentProhibition>;
  related_chats: XmlMultiElem<ConversationDocumentRelatedChat>;
  keyboards_block: XmlElem<ConversationDocumentKeyboardsBlock>;
  doc_info: XmlElem<DocInfoBase>;
  participants_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
};

type ConversationDocument = XmlDocument & {
  TopElem: ConversationDocumentTopElem;
  conversation: ConversationDocumentTopElem;
  OnBeforeSave(): void;
};

interface ConversationDocumentParticipant extends ObjectTypeBase {
  id: XmlElem<string>;
  state_id: XmlElem<string>;
  create_date: XmlElem<Date>;
  comment: XmlElem<string>;
}

interface ConversationDocumentProhibition {
  id: XmlElem<string>;
  type_id: XmlElem<string>;
  create_date: XmlElem<Date>;
  person_id: XmlElem<number>;
}

interface ConversationDocumentRelatedChat {
  related_chat_id: XmlElem<number>;
}

interface ConversationDocumentRecipient {
  person_id: XmlElem<number>;
  conversation_state: XmlElem<string>;
}

type ConversationDocumentTopElem = XmlTopElem & { Doc: ConversationDocument } & 
  PersonFillingBase &
  FuncManagersBase &
  CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  person_id: XmlElem<number>;
  create_date: XmlElem<Date>;
  conversation_type_id: XmlElem<number>;
  format_id: XmlElem<string>;
  state_id: XmlElem<string>;
  custom_state_id: XmlElem<string>;
  is_public: XmlElem<boolean>;
  created: XmlElem<boolean>;
  position_priority: XmlElem<number>;
  list_css: XmlElem<string>;
  participants: XmlMultiElem<ConversationDocumentParticipant>;
  prohibitions: XmlMultiElem<ConversationDocumentProhibition>;
  related_chats: XmlMultiElem<ConversationDocumentRelatedChat>;
  recipients: XmlMultiElem<ConversationDocumentRecipient>;
  doc_info: XmlElem<DocInfoBase>;
  participants_id: XmlMultiElem<number>;
}

type ConversationDocument = XmlDocument & { TopElem: ConversationDocumentTopElem; };

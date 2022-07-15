interface ConversationParticipant extends ObjectTypeBase {
  id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
}

interface ConversationProhibition {
  id?: XmlElem<string>;
  type_id?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
}

interface ConversationRelatedChat {
  related_chat_id?: XmlElem<number>;
}

interface ConversationRecipient {
  person_id?: XmlElem<number>;
  conversation_state?: XmlElem<string>;
}

interface ConversationViewCollaborator {
  id?: XmlElem<number>;
}

interface ConversationView {
  collaborators?: XmlMultiElem<ConversationViewCollaborator>;
}

interface ConversationTopElem extends XmlTopElem<ConversationDocument>, PersonFillingBase, FuncManagersBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  conversation_type_id?: XmlElem<number>;
  format_id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  custom_state_id?: XmlElem<string>;
  is_public?: XmlElem<boolean>;
  created?: XmlElem<boolean>;
  position_priority?: XmlElem<number>;
  list_css?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  participants_id?: XmlMultiElem<number>;
  participants?: XmlMultiElem<ConversationParticipant>;
  prohibitions?: XmlMultiElem<ConversationProhibition>;
  related_chats?: XmlMultiElem<ConversationRelatedChat>;
  recipients?: XmlMultiElem<ConversationRecipient>;
  view?: XmlElem<ConversationView>;
}

type ConversationDocument = XmlDocument<ConversationTopElem>;

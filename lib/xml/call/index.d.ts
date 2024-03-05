interface CallDocumentParticipant {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.conversation_participant_states>;
  has_entered: XmlElem<boolean>;
  type: XmlElem<string>;
}

type CallDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: CallDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  plan_start_date: XmlElem<Date>;
  plan_end_date: XmlElem<Date>;
  duration: XmlElem<number>;
  state_id: XmlElem<string, typeof common.event_status_types>;
  participants: XmlMultiElem<CallDocumentParticipant>;
  entered_participants_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type CallDocument = XmlDocument & {
  TopElem: CallDocumentTopElem;
};

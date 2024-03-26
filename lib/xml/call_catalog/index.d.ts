type CallCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
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
  active_participants_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  participants_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  entered_participants_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  OnBuild(): void;
};

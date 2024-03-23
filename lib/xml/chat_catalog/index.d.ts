type ChatCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  is_personal: XmlElem<boolean>;
  is_multiplayer: XmlElem<boolean>;
  collaborators: XmlElem<string>;
  participant_ids: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

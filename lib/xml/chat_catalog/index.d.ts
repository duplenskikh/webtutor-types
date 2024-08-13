type ChatCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  is_personal: XmlElem<boolean | null>;
  is_multiplayer: XmlElem<boolean>;
  collaborators: XmlElem<string | null>;
  participant_ids: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

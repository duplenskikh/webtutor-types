type ChatCatalogDocumentTopElem = XmlTopElem & { Doc: ChatCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  is_personal: XmlElem<boolean>;
  is_multiplayer: XmlElem<boolean>;
  collaborators: XmlElem<string>;
  conversation_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ChatCatalogDocument = XmlDocument & { TopElem: ChatCatalogDocumentTopElem; };

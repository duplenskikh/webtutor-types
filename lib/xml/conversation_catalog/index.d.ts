type ConversationCatalogDocumentTopElem = XmlTopElem & { Doc: ConversationCatalogDocument } & 
PersonFillingBase & {
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
  position_priority: XmlElem<number>;
  list_css: XmlElem<string>;
  objects: XmlMultiElem<number>;
  active_object_type: XmlElem<string>;
  active_object_name: XmlElem<string>;
  active_object_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  participants_id: XmlMultiElem<number>;
}

type ConversationCatalogDocument = XmlDocument & { TopElem: ConversationCatalogDocumentTopElem; };

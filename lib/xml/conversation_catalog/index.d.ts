type ConversationCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
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
  position_priority: XmlElem<number>;
  list_css: XmlElem<string>;
  objects: XmlMultiElemObject<number>;
  active_object_type: XmlElem<string, typeof common.exchange_object_types>;
  active_object_name: XmlElem<string>;
  active_object_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  participants_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  prohibit_write: XmlElem<boolean>;
  can_call: XmlElem<boolean>;
  can_change_participant: XmlElem<boolean>;
  can_show_additional_info: XmlElem<boolean>;
  OnBuild(): unknown;
};

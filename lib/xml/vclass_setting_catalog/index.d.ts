type VclassSettingCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

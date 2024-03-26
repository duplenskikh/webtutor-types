type ChatbotStageCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  chatbot_id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
  action_type: XmlElem<string>;
  keyboard_type: XmlElem<string, typeof common.keyboard_types>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

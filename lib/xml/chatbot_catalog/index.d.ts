type ChatbotCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  start_chatbot_stage_id: XmlElem<number, ChatbotStageCatalogDocumentTopElem>;
  name: XmlElem<string>;
  disp_name: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  usage_object_type: XmlElem<string, typeof common.usage_object_types>;
  modification_date: XmlElem<Date>;
  create_date: XmlElem<Date>;
  role_id: XmlMultiElemObject<number>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

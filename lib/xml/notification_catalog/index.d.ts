type NotificationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  active: XmlElem<boolean | null>;
  active_chatbot_script: XmlElem<boolean>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  chatbot_id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

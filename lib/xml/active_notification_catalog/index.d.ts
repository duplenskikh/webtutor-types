type ActiveNotificationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  notification_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  subject: XmlElem<string>;
  create_date: XmlElem<Date>;
  last_send_date: XmlElem<Date>;
  send_date: XmlElem<Date>;
  recipient_person_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  is_custom: XmlElem<boolean>;
  status: XmlElem<string, typeof common.active_notification_status_types>;
  send_counter: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

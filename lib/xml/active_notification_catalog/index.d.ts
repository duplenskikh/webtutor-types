type ActiveNotificationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  notification_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  subject: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  last_send_date: XmlElem<Date | null>;
  send_date: XmlElem<Date | null>;
  recipient_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  is_custom: XmlElem<boolean>;
  status: XmlElem<string | null, typeof common.active_notification_status_types>;
  send_counter: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

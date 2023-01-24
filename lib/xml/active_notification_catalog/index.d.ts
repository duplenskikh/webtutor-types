type ActiveNotificationCatalogDocumentTopElem = XmlTopElem & { Doc: ActiveNotificationCatalogDocument } & {
  id: XmlElem<number>;
  notification_id: XmlElem<number>;
  object_id: XmlElem<number>;
  subject: XmlElem<string>;
  create_date: XmlElem<Date>;
  last_send_date: XmlElem<Date>;
  send_date: XmlElem<Date>;
  recipient_person_id: XmlMultiElem<number>;
  is_custom: XmlElem<boolean>;
  status: XmlElem<string>;
  send_counter: XmlElem<number>;
}

type ActiveNotificationCatalogDocument = XmlDocument & { TopElem: ActiveNotificationCatalogDocumentTopElem; };

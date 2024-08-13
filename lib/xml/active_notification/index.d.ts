interface ActiveNotificationDocumentSender {
  address: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ActiveNotificationDocumentAttachment {
  cid: XmlElem<string | null>;
  name: XmlElem<string | null>;
  data: XmlElem<Binary | null>;
}

interface ActiveNotificationDocumentRecipient {
  address: XmlElem<string | null>;
  mobile_phone: XmlElem<string | null>;
  name: XmlElem<string | null>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type ActiveNotificationDocumentTopElem = XmlTopElem & {
  Doc: ActiveNotificationDocument;
  notification_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  sec_object_id: XmlElem<number | null>;
  text: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  last_send_date: XmlElem<Date | null>;
  send_date: XmlElem<Date | null>;
  is_custom: XmlElem<boolean>;
  status: XmlElem<string, typeof common.active_notification_status_types>;
  send_counter: XmlElem<number | null>;
  sender: XmlElem<ActiveNotificationDocumentSender | null>;
  date: XmlElem<Date | null>;
  subject: XmlElem<string | null>;
  body: XmlElem<string | null>;
  body_type: XmlElem<string | null>;
  attachments: XmlMultiElem<ActiveNotificationDocumentAttachment | null>;
  recipients: XmlMultiElem<ActiveNotificationDocumentRecipient | null>;
  notification_system_id: XmlElem<number | null, NotificationSystemCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ActiveNotificationDocument = XmlDocument & {
  TopElem: ActiveNotificationDocumentTopElem;
  active_notification: ActiveNotificationDocumentTopElem;
  DocDesc(): string;
};

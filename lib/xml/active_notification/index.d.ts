interface ActiveNotificationDocumentSender {
  address: XmlElem<string>;
  name: XmlElem<string>;
}

interface ActiveNotificationDocumentAttachment {
  name: XmlElem<string>;
  data: XmlElem<Binary>;
}

interface ActiveNotificationDocumentRecipient {
  address: XmlElem<string>;
  mobile_phone: XmlElem<string>;
  name: XmlElem<string>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

type ActiveNotificationDocumentTopElem = XmlTopElem & {
  Doc: ActiveNotificationDocument;
  notification_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  sec_object_id: XmlElem<number>;
  text: XmlElem<string>;
  create_date: XmlElem<Date>;
  last_send_date: XmlElem<Date>;
  send_date: XmlElem<Date>;
  is_custom: XmlElem<boolean>;
  status: XmlElem<string, typeof common.active_notification_status_types>;
  send_counter: XmlElem<number>;
  sender: XmlElem<ActiveNotificationDocumentSender>;
  date: XmlElem<Date>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  attachments: XmlMultiElem<ActiveNotificationDocumentAttachment>;
  recipients: XmlMultiElem<ActiveNotificationDocumentRecipient>;
  notification_system_id: XmlElem<number, NotificationSystemCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
};

type ActiveNotificationDocument = XmlDocument & {
  TopElem: ActiveNotificationDocumentTopElem;
  active_notification: ActiveNotificationDocumentTopElem;
  DocDesc(): string;
};

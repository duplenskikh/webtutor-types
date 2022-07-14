interface ActiveNotificationSender {
  address?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface ActiveNotificationAttachment {
  name?: XmlElem<string>;
  data?: XmlElem<Binary>;
}

interface ActiveNotificationRecipients {
  address?: XmlElem<string>;
  mobile_phone?: XmlElem<string>;
  name?: XmlElem<string>;
  collaborator_id?: XmlElem<number>;
}

interface ActiveNotificationTopElem extends XmlTopElem<ActiveNotificationDocument> {
  notification_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  sec_object_id?: XmlElem<number>;
  text?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  last_send_date?: XmlElem<Date>;
  send_date?: XmlElem<Date>;
  is_custom?: XmlElem<boolean>;
  status?: XmlElem<string>;
  send_counter?: XmlElem<number>;
  sender?: XmlElem<ActiveNotificationSender>;
  date?: XmlElem<Date>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  attachments?: XmlMultiElem<ActiveNotificationAttachment>;
  recipients?: XmlElem<ActiveNotificationRecipients>;
  notification_system_id?: XmlElem<number>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

type ActiveNotificationDocument = XmlDocument<ActiveNotificationTopElem>;

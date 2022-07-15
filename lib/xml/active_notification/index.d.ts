interface ActiveNotificationAttachment {
  name?: XmlElem<string>;
  data?: XmlElem<Binary>;
}

interface ActiveNotificationRecipient {
  address?: XmlElem<string>;
  mobile_phone?: XmlElem<string>;
  name?: XmlElem<string>;
  collaborator_id?: XmlElem<number>;
}

interface ActiveNotificationSender {
  address?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface ActiveNotificationView extends DescBase {
  selector?: XmlElem<string>;
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
  date?: XmlElem<Date>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  notification_system_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  attachments?: XmlMultiElem<ActiveNotificationAttachment>;
  recipients?: XmlMultiElem<ActiveNotificationRecipient>;
  sender?: XmlElem<ActiveNotificationSender>;
  view?: XmlElem<ActiveNotificationView>;
}

type ActiveNotificationDocument = XmlDocument<ActiveNotificationTopElem>;

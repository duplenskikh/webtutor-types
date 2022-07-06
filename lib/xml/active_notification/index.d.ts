type ActiveNotificationTopElem = {
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
  sender?: XmlElem<IWTActiveNotificationSender>;
  date?: XmlElem<Date>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  attachments?: XmlMultiElem<{
    name?: XmlElem<string>;
    data?: XmlElem<Binary>;
  }>;
  recipients?: XmlElem<IWTActiveNotificationRecipients>;
  notification_system_id?: XmlElem<number>;
}

type ActiveNotificationDocument = XmlDocument<ActiveNotificationTopElem>;

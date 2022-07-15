interface NotificationRecipient {
  recipient_type?: XmlElem<string>;
  func_manager_type_id?: XmlElem<number>;
  eval_str?: XmlElem<string>;
  eval_ids_str?: XmlElem<string>;
  notification_template_id?: XmlElem<number>;
}

interface NotificationNotificationSystem {
  notification_system_id?: XmlElem<number>;
}

interface NotificationView {
  selector?: XmlElem<string>;
}

interface NotificationTopElem extends XmlTopElem<NotificationDocument>, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  field_recipient_type?: XmlElem<string>;
  active?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  notification_template_id?: XmlElem<number>;
  date_shift_selector?: XmlElem<number>;
  date_shift?: XmlElem<number>;
  sender_selector?: XmlElem<number>;
  sender_email?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  recipients?: XmlMultiElem<NotificationRecipient>;
  notification_systems?: XmlMultiElem<NotificationNotificationSystem>;
  view?: XmlElem<NotificationView>;
}

type NotificationDocument = XmlDocument<NotificationTopElem>;

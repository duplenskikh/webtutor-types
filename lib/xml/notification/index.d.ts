interface NotificationDocumentRecipient {
  recipient_type: XmlElem<string>;
  func_manager_type_id: XmlElem<number>;
  eval_str: XmlElem<string>;
  eval_ids_str: XmlElem<string>;
  notification_template_id: XmlElem<number>;
}

interface NotificationDocumentNotificationSystem {
  notification_system_id: XmlElem<number>;
}

type NotificationDocumentTopElem = XmlTopElem & { Doc: NotificationDocument } & 
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  recipients: XmlMultiElem<NotificationDocumentRecipient>;
  field_recipient_type: XmlElem<string>;
  notification_systems: XmlMultiElem<NotificationDocumentNotificationSystem>;
  active: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  notification_template_id: XmlElem<number>;
  date_shift_selector: XmlElem<number>;
  date_shift: XmlElem<number>;
  sender_selector: XmlElem<number>;
  sender_email: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type NotificationDocument = XmlDocument & { TopElem: NotificationDocumentTopElem; };

interface NotificationDocumentRecipient {
  recipient_type: XmlElem<string, typeof common.recipient_types>;
  func_manager_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  eval_str: XmlElem<string>;
  eval_ids_str: XmlElem<string>;
  notification_template_id: XmlElem<number, NotificationTemplateCatalogDocumentTopElem>;
}

interface NotificationDocumentNotificationSystem {
  notification_system_id: XmlElem<number, NotificationSystemCatalogDocumentTopElem>;
}

type NotificationDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: NotificationDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  recipients: XmlMultiElem<NotificationDocumentRecipient>;
  field_recipient_type: XmlElem<string>;
  notification_systems: XmlMultiElem<NotificationDocumentNotificationSystem>;
  active: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  notification_template_id: XmlElem<number, NotificationTemplateCatalogDocumentTopElem>;
  date_shift_selector: XmlElem<number>;
  date_shift: XmlElem<number>;
  sender_selector: XmlElem<number>;
  sender_email: XmlElem<string>;
  chatbot_id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type NotificationDocument = XmlDocument & {
  TopElem: NotificationDocumentTopElem;
};

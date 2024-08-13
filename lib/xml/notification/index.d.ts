interface NotificationDocumentRecipient {
  recipient_type: XmlElem<string | null, typeof common.recipient_types>;
  func_manager_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  eval_str: XmlElem<string | null>;
  eval_ids_str: XmlElem<string | null>;
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
}

interface NotificationDocumentNotificationSystem {
  notification_system_id: XmlElem<number | null, NotificationSystemCatalogDocumentTopElem>;
}

type NotificationDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: NotificationDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  recipients: XmlMultiElem<NotificationDocumentRecipient | null>;
  field_recipient_type: XmlElem<string | null>;
  notification_systems: XmlMultiElem<NotificationDocumentNotificationSystem | null>;
  active: XmlElem<boolean>;
  active_chatbot_script: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  date_shift_selector: XmlElem<number>;
  date_shift: XmlElem<number>;
  sender_selector: XmlElem<number>;
  sender_email: XmlElem<string | null>;
  chatbot_id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type NotificationDocument = XmlDocument & {
  TopElem: NotificationDocumentTopElem;
  notification: NotificationDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

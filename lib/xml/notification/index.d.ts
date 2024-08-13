interface NotificationDocumentRecipient {
  /** Тип */
  recipient_type: XmlElem<string | null, typeof common.recipient_types>;
  /** Тип руководителя */
  func_manager_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  eval_str: XmlElem<string | null>;
  eval_ids_str: XmlElem<string | null>;
  /** Шаблон уведомления */
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
}

interface NotificationDocumentNotificationSystem {
  notification_system_id: XmlElem<number | null, NotificationSystemCatalogDocumentTopElem>;
}

type NotificationDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: NotificationDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Адресаты */
  recipients: XmlMultiElem<NotificationDocumentRecipient | null>;
  field_recipient_type: XmlElem<string | null>;
  notification_systems: XmlMultiElem<NotificationDocumentNotificationSystem | null>;
  /** Активное уведомление */
  active: XmlElem<boolean>;
  active_chatbot_script: XmlElem<boolean>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Шаблон уведомления */
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  date_shift_selector: XmlElem<number>;
  date_shift: XmlElem<number>;
  sender_selector: XmlElem<number>;
  sender_email: XmlElem<string | null>;
  chatbot_id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type NotificationDocument = XmlDocument & {
  TopElem: NotificationDocumentTopElem;
  notification: NotificationDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

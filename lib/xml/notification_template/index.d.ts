interface NotificationTemplateDocumentMainObject extends FieldNamesBase {
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  init_field_names(): unknown;
}

type NotificationTemplateDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: NotificationTemplateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тема */
  subject: XmlElem<string | null>;
  /** Сообщение */
  body: XmlElem<string | null>;
  /** Формат сообщения */
  body_type: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  main_object: XmlElem<NotificationTemplateDocumentMainObject | null>;
  add_text_to_edit(screen: unknown, text: string, field: Date): unknown;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type NotificationTemplateDocument = XmlDocument & {
  TopElem: NotificationTemplateDocumentTopElem;
  notification_template: NotificationTemplateDocumentTopElem;
  DocDesc(): string;
};

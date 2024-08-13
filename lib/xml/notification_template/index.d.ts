interface NotificationTemplateDocumentMainObject extends FieldNamesBase {
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  init_field_names(): unknown;
}

type NotificationTemplateDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: NotificationTemplateDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  subject: XmlElem<string | null>;
  body: XmlElem<string | null>;
  body_type: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  main_object: XmlElem<NotificationTemplateDocumentMainObject | null>;
  add_text_to_edit(screen: unknown, text: string, field: Date): unknown;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type NotificationTemplateDocument = XmlDocument & {
  TopElem: NotificationTemplateDocumentTopElem;
  notification_template: NotificationTemplateDocumentTopElem;
  DocDesc(): string;
};

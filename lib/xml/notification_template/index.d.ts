interface NotificationTemplateDocumentMainObject extends FieldNamesBase {
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  init_field_names(): unknown;
}

type NotificationTemplateDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: NotificationTemplateDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  main_object: XmlElem<NotificationTemplateDocumentMainObject>;
  add_text_to_edit(screen: unknown, text: string, field: Date): unknown;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type NotificationTemplateDocument = XmlDocument & {
  TopElem: NotificationTemplateDocumentTopElem;
  notification_template: NotificationTemplateDocumentTopElem;
  DocDesc(): string;
};

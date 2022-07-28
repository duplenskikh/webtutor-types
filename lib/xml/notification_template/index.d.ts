type NotificationTemplateDocumentTopElem = XmlTopElem & { Doc: NotificationTemplateDocument } & 
  CustomElemsBase &
  FileListBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  add_text_to_edit(): unknown;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type NotificationTemplateDocument = XmlDocument & { TopElem: NotificationTemplateDocumentTopElem; };

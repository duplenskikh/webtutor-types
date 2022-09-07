type NotificationSystemDocumentTopElem = XmlTopElem & { Doc: NotificationSystemDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  library_url: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type NotificationSystemDocument = XmlDocument & { TopElem: NotificationSystemDocumentTopElem; };

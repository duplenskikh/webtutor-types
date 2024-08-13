type NotificationSystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase & {
  Doc: NotificationSystemDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type NotificationSystemDocument = XmlDocument & {
  TopElem: NotificationSystemDocumentTopElem;
  notification_system: NotificationSystemDocumentTopElem;
  DocDesc(): string;
};

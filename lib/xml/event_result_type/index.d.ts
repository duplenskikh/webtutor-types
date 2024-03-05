type EventResultTypeDocumentTopElem = XmlTopElem & {
  Doc: EventResultTypeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
};

type EventResultTypeDocument = XmlDocument & {
  TopElem: EventResultTypeDocumentTopElem;
};

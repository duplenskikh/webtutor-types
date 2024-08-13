type EventResultTypeDocumentTopElem = XmlTopElem & {
  Doc: EventResultTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type EventResultTypeDocument = XmlDocument & {
  TopElem: EventResultTypeDocumentTopElem;
  event_result_type: EventResultTypeDocumentTopElem;
  DocDesc(): string;
};

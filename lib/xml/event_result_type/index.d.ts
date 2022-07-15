interface EventResultTypeTopElem extends XmlTopElem<EventResultTypeDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
}

type EventResultTypeDocument = XmlDocument<EventResultTypeTopElem>;

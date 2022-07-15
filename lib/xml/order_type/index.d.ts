interface OrderTypeView {
  name_start?: XmlElem<string>;
}

interface OrderTypeTopElem extends XmlTopElem<OrderTypeDocument> {
  code?: XmlElem<string>;
  number?: XmlElem<number>;
  name?: XmlElem<string>;
  prefix?: XmlElem<string>;
  suffix?: XmlElem<string>;
  default_flag?: XmlElem<boolean>;
  signing_person_id?: XmlElem<number>;
  responsible_person_id?: XmlElem<number>;
  performer_person_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<OrderTypeView>;
}

type OrderTypeDocument = XmlDocument<OrderTypeTopElem>;

type OrderTypeDocumentTopElem = XmlTopElem & { Doc: OrderTypeDocument } & {
  code: XmlElem<string>;
  number: XmlElem<number>;
  name: XmlElem<string>;
  prefix: XmlElem<string>;
  suffix: XmlElem<string>;
  default_flag: XmlElem<boolean>;
  signing_person_id: XmlElem<number>;
  responsible_person_id: XmlElem<number>;
  performer_person_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type OrderTypeDocument = XmlDocument & {
  TopElem: OrderTypeDocumentTopElem;
};

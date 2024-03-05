type WebPersonStateDocumentTopElem = XmlTopElem & {
  Doc: WebPersonStateDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type_id: XmlElem<string, typeof common.web_person_state_types>;
  doc_info: XmlElem<DocInfoBase>;
};

type WebPersonStateDocument = XmlDocument & {
  TopElem: WebPersonStateDocumentTopElem;
};

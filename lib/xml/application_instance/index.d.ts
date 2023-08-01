type ApplicationInstanceDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: ApplicationInstanceDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  application_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type ApplicationInstanceDocument = XmlDocument & {
  TopElem: ApplicationInstanceDocumentTopElem;
};

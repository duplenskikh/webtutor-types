type ChatbotTypeDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ChatbotTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  script_url: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type ChatbotTypeDocument = XmlDocument & {
  TopElem: ChatbotTypeDocumentTopElem;
};

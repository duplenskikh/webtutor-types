type ContactResultDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ContactResultDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
};

type ContactResultDocument = XmlDocument & {
  TopElem: ContactResultDocumentTopElem;
  contact_result: ContactResultDocumentTopElem;
  DocDesc(): string;
};

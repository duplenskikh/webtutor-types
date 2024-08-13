type ContactResultDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ContactResultDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
};

type ContactResultDocument = XmlDocument & {
  TopElem: ContactResultDocumentTopElem;
  contact_result: ContactResultDocumentTopElem;
  DocDesc(): string;
};

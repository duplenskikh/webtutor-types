type ContactTypeDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ContactTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
};

type ContactTypeDocument = XmlDocument & {
  TopElem: ContactTypeDocumentTopElem;
  contact_type: ContactTypeDocumentTopElem;
  DocDesc(): string;
};

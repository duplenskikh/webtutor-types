type ContactTypeDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ContactTypeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
};

type ContactTypeDocument = XmlDocument & {
  TopElem: ContactTypeDocumentTopElem;
  contact_type: ContactTypeDocumentTopElem;
  DocDesc(): string;
};

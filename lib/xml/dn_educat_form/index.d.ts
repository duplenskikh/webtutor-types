type DnEducatFormDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: DnEducatFormDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnEducatFormDocument = XmlDocument & {
  TopElem: DnEducatFormDocumentTopElem;
  dn_educat_form: DnEducatFormDocumentTopElem;
  DocDesc(): string;
};

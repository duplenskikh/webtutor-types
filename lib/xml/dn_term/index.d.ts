type DnTermDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DnTermDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  str_term: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnTermDocument = XmlDocument & {
  TopElem: DnTermDocumentTopElem;
  dn_term: DnTermDocumentTopElem;
  DocDesc(): string;
};

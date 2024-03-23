type DnTermDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DnTermDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  str_term: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnTermDocument = XmlDocument & {
  TopElem: DnTermDocumentTopElem;
  dn_term: DnTermDocumentTopElem;
  DocDesc(): string;
};

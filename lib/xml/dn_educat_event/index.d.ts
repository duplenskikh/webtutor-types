type DnEducatEventDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DnEducatEventDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnEducatEventDocument = XmlDocument & {
  TopElem: DnEducatEventDocumentTopElem;
  dn_educat_event: DnEducatEventDocumentTopElem;
  DocDesc(): string;
};

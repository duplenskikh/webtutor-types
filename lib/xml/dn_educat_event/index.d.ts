type DnEducatEventDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DnEducatEventDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnEducatEventDocument = XmlDocument & {
  TopElem: DnEducatEventDocumentTopElem;
  dn_educat_event: DnEducatEventDocumentTopElem;
  DocDesc(): unknown;
};

type WageSystemDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WageSystemDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type WageSystemDocument = XmlDocument & {
  TopElem: WageSystemDocumentTopElem;
  wage_system: WageSystemDocumentTopElem;
  DocDesc(): unknown;
};

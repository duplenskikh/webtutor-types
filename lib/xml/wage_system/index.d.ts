type WageSystemDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WageSystemDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type WageSystemDocument = XmlDocument & {
  TopElem: WageSystemDocumentTopElem;
  wage_system: WageSystemDocumentTopElem;
  DocDesc(): string;
};

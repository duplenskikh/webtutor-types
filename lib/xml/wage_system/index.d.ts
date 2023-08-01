type WageSystemDocumentTopElem = XmlTopElem & { Doc: WageSystemDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type WageSystemDocument = XmlDocument & {
  TopElem: WageSystemDocumentTopElem;
};

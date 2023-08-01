type SaleStatusDocumentTopElem = XmlTopElem & { Doc: SaleStatusDocument } & 
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SaleStatusDocument = XmlDocument & {
  TopElem: SaleStatusDocumentTopElem;
};

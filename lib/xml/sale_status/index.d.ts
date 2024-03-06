type SaleStatusDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SaleStatusDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SaleStatusDocument = XmlDocument & {
  TopElem: SaleStatusDocumentTopElem;
  sale_status: SaleStatusDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};

type SaleStatusDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SaleStatusDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SaleStatusDocument = XmlDocument & {
  TopElem: SaleStatusDocumentTopElem;
  sale_status: SaleStatusDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

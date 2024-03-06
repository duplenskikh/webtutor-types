type SaleContractTypeDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SaleContractTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SaleContractTypeDocument = XmlDocument & {
  TopElem: SaleContractTypeDocumentTopElem;
  sale_contract_type: SaleContractTypeDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};

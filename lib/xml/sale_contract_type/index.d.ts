interface SaleContractTypeTopElem extends XmlTopElem<SaleContractTypeDocument>, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type SaleContractTypeDocument = XmlDocument<SaleContractTypeTopElem>;

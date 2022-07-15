interface SaleStatusTopElem extends XmlTopElem<SaleStatusDocument>, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type SaleStatusDocument = XmlDocument<SaleStatusTopElem>;

interface SalaryPaymentTypeTopElem extends XmlTopElem<SalaryPaymentTypeDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type SalaryPaymentTypeDocument = XmlDocument<SalaryPaymentTypeTopElem>;

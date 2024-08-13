type SalaryPaymentTypeDocumentTopElem = XmlTopElem & {
  Doc: SalaryPaymentTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SalaryPaymentTypeDocument = XmlDocument & {
  TopElem: SalaryPaymentTypeDocumentTopElem;
  salary_payment_type: SalaryPaymentTypeDocumentTopElem;
};

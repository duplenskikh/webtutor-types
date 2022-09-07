type PaymentDocumentTopElem = XmlTopElem & { Doc: PaymentDocument } & 
PersonFillingBase &
ObjectTypeBase &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  pay_date: XmlElem<Date>;
  sum: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  person_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  payment_type_id: XmlElem<number>;
  budget_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type PaymentDocument = XmlDocument & {
  TopElem: PaymentDocumentTopElem;
};

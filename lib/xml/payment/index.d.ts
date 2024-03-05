type PaymentDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
CustomElemsBase & {
  Doc: PaymentDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.project_status_types>;
  pay_date: XmlElem<Date>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  sum: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  payment_type_id: XmlElem<number, PaymentTypeCatalogDocumentTopElem>;
  budget_id: XmlElem<number, BudgetCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type PaymentDocument = XmlDocument & {
  TopElem: PaymentDocumentTopElem;
};

type PaymentCatalogDocumentTopElem = XmlTopElem & { Doc: PaymentCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  pay_date: XmlElem<Date>;
  sum: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  payment_type_id: XmlElem<number>;
  budget_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PaymentCatalogDocument = XmlDocument & { TopElem: PaymentCatalogDocumentTopElem; };

type ExpenseCatalogDocumentTopElem = XmlTopElem & { Doc: ExpenseCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  pay_stage_id: XmlElem<number>;
  cost: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  number: XmlElem<string>;
  expense_create_date: XmlElem<Date>;
  is_formed: XmlElem<boolean>;
  payment_plan_date: XmlElem<Date>;
  is_paid: XmlElem<boolean>;
  payment_fact_date: XmlElem<Date>;
  bad_debt: XmlElem<boolean>;
  comment: XmlElem<string>;
  sent_date: XmlElem<Date>;
  recipient: XmlElem<string>;
  consignment_document_number: XmlElem<string>;
  is_received: XmlElem<boolean>;
  received_date: XmlElem<Date>;
  docs_comment: XmlElem<string>;
}

type ExpenseCatalogDocument = XmlDocument & { TopElem: ExpenseCatalogDocumentTopElem; };

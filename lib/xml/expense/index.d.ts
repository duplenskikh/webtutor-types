type ExpenseDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: ExpenseDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  pay_stage_id: XmlElem<number, PayStageCatalogDocumentTopElem>;
  cost: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  number: XmlElem<string>;
  expense_create_date: XmlElem<Date>;
  is_formed: XmlElem<boolean>;
  payment_plan_date: XmlElem<Date>;
  is_paid: XmlElem<boolean>;
  payment_fact_date: XmlElem<Date>;
  bad_debt: XmlElem<boolean>;
  sent_date: XmlElem<Date>;
  sent_type: XmlElem<string, typeof common.document_sent_types>;
  recipient: XmlElem<string>;
  consignment_document_number: XmlElem<string>;
  sent_messenger_service_id: XmlElem<number, MessengerServiceCatalogDocumentTopElem>;
  back_sent_type: XmlElem<string, typeof common.document_sent_types>;
  back_sent_messenger_service_id: XmlElem<number, MessengerServiceCatalogDocumentTopElem>;
  is_received: XmlElem<boolean>;
  received_date: XmlElem<Date>;
  docs_comment: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ExpenseDocument = XmlDocument & {
  TopElem: ExpenseDocumentTopElem;
  expense: ExpenseDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};

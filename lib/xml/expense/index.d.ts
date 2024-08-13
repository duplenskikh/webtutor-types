type ExpenseDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: ExpenseDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  pay_stage_id: XmlElem<number | null, PayStageCatalogDocumentTopElem>;
  cost: XmlElem<number | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  number: XmlElem<string | null>;
  expense_create_date: XmlElem<Date | null>;
  is_formed: XmlElem<boolean | null>;
  payment_plan_date: XmlElem<Date | null>;
  is_paid: XmlElem<boolean | null>;
  payment_fact_date: XmlElem<Date | null>;
  bad_debt: XmlElem<boolean | null>;
  sent_date: XmlElem<Date | null>;
  sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  recipient: XmlElem<string | null>;
  consignment_document_number: XmlElem<string | null>;
  sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  back_sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  back_sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  is_received: XmlElem<boolean | null>;
  received_date: XmlElem<Date | null>;
  docs_comment: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ExpenseDocument = XmlDocument & {
  TopElem: ExpenseDocumentTopElem;
  expense: ExpenseDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

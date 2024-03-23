interface ClosingDocumentDocumentExpense {
  expense_id: XmlElem<number, ExpenseCatalogDocumentTopElem>;
}

type ClosingDocumentDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: ClosingDocumentDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  pay_stage_id: XmlElem<number, PayStageCatalogDocumentTopElem>;
  type_id: XmlElem<string, typeof common.payment_types>;
  cost: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  number: XmlElem<string>;
  expense_create_date: XmlElem<Date>;
  is_formed: XmlElem<boolean>;
  expenses: XmlMultiElem<ClosingDocumentDocumentExpense>;
  sent_date: XmlElem<Date>;
  sent_type: XmlElem<string, typeof common.document_sent_types>;
  recipient: XmlElem<string>;
  consignment_document_number: XmlElem<string>;
  sent_messenger_service_id: XmlElem<number, MessengerServiceCatalogDocumentTopElem>;
  back_sent_type: XmlElem<string, typeof common.document_sent_types>;
  back_sent_messenger_service_id: XmlElem<number, MessengerServiceCatalogDocumentTopElem>;
  is_received: XmlElem<boolean>;
  receiving_status_id: XmlElem<number, ClosingDocumentStatusCatalogDocumentTopElem>;
  received_date: XmlElem<Date>;
  docs_comment: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ClosingDocumentDocument = XmlDocument & {
  TopElem: ClosingDocumentDocumentTopElem;
  closing_document: ClosingDocumentDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

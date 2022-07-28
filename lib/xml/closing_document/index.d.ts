interface ClosingDocumentDocumentExpense {
  expense_id: XmlElem<number>;
}

type ClosingDocumentDocumentTopElem = XmlTopElem & { Doc: ClosingDocumentDocument } & 
  FileListBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  pay_stage_id: XmlElem<number>;
  type_id: XmlElem<string>;
  cost: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  number: XmlElem<string>;
  expense_create_date: XmlElem<Date>;
  is_formed: XmlElem<boolean>;
  expenses: XmlMultiElem<ClosingDocumentDocumentExpense>;
  sent_date: XmlElem<Date>;
  sent_type: XmlElem<string>;
  recipient: XmlElem<string>;
  consignment_document_number: XmlElem<string>;
  sent_messenger_service_id: XmlElem<number>;
  back_sent_type: XmlElem<string>;
  back_sent_messenger_service_id: XmlElem<number>;
  is_received: XmlElem<boolean>;
  receiving_status_id: XmlElem<number>;
  received_date: XmlElem<Date>;
  docs_comment: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ClosingDocumentDocument = XmlDocument & { TopElem: ClosingDocumentDocumentTopElem; };

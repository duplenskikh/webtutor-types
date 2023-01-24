type ClosingDocumentCatalogDocumentTopElem = XmlTopElem & { Doc: ClosingDocumentCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  pay_stage_id: XmlElem<number>;
  type_id: XmlElem<string>;
  cost: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  number: XmlElem<string>;
  expense_create_date: XmlElem<Date>;
  is_formed: XmlElem<boolean>;
  sent_date: XmlElem<Date>;
  recipient: XmlElem<string>;
  consignment_document_number: XmlElem<string>;
  is_received: XmlElem<boolean>;
  receiving_status_id: XmlElem<number>;
  received_date: XmlElem<Date>;
  docs_comment: XmlElem<string>;
}

type ClosingDocumentCatalogDocument = XmlDocument & { TopElem: ClosingDocumentCatalogDocumentTopElem; };

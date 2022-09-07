interface SaleDocumentDocument {
  id: XmlElem<string>;
  name: XmlElem<string>;
  sent_by_us: XmlElem<boolean>;
  sent_date: XmlElem<Date>;
  sent_type: XmlElem<string>;
  sent_messenger_service_id: XmlElem<number>;
  back_sent_date: XmlElem<Date>;
  back_sent_type: XmlElem<string>;
  back_sent_messenger_service_id: XmlElem<number>;
  comment: XmlElem<string>;
}

type SaleDocumentTopElem = XmlTopElem & { Doc: SaleDocument } & 
FileListBase &
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  status_id: XmlElem<number>;
  number: XmlElem<string>;
  org_id: XmlElem<number>;
  client_org_id: XmlElem<number>;
  project_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  client_manager_id: XmlElem<number>;
  manager_id: XmlElem<number>;
  cost: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  documents: XmlMultiElem<SaleDocumentDocument>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type SaleDocument = XmlDocument & { TopElem: SaleDocumentTopElem; };

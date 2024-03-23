interface SaleDocumentDocument {
  id: XmlElem<string>;
  name: XmlElem<string>;
  sent_by_us: XmlElem<boolean>;
  sent_date: XmlElem<Date>;
  sent_type: XmlElem<string, typeof common.document_sent_types>;
  sent_messenger_service_id: XmlElem<number, MessengerServiceCatalogDocumentTopElem>;
  back_sent_date: XmlElem<Date>;
  back_sent_type: XmlElem<string, typeof common.document_sent_types>;
  back_sent_messenger_service_id: XmlElem<number, MessengerServiceCatalogDocumentTopElem>;
  comment: XmlElem<string>;
}

type SaleDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: SaleDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  status_id: XmlElem<number, SaleStatusCatalogDocumentTopElem>;
  number: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  project_id: XmlElem<number, ProjectCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  client_manager_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  manager_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  cost: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  documents: XmlMultiElem<SaleDocumentDocument>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SaleDocument = XmlDocument & {
  TopElem: SaleDocumentTopElem;
  sale: SaleDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

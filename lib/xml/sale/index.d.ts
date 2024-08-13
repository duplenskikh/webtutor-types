interface SaleDocumentDocument {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  sent_by_us: XmlElem<boolean | null>;
  sent_date: XmlElem<Date | null>;
  sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  back_sent_date: XmlElem<Date | null>;
  back_sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  back_sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
}

type SaleDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: SaleDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  status_id: XmlElem<number | null, SaleStatusCatalogDocumentTopElem>;
  number: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  client_manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  cost: XmlElem<number | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  documents: XmlMultiElem<SaleDocumentDocument | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SaleDocument = XmlDocument & {
  TopElem: SaleDocumentTopElem;
  sale: SaleDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

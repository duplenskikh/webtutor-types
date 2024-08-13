interface SaleContractDocumentCost {
  id: XmlElem<string | null>;
  cost_currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  cost_value: XmlElem<number | null>;
}

interface SaleContractDocumentPrice {
  id: XmlElem<string | null>;
  price_id: XmlElem<number | null, PriceCatalogDocumentTopElem>;
}

interface SaleContractDocumentProlongationInfo {
  id: XmlElem<string | null>;
  cost: XmlElem<number | null>;
  cost_currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
}

type SaleContractDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: SaleContractDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  state_id: XmlElem<number | null, ContractStateCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  is_agent_contract: XmlElem<boolean | null>;
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  parent_sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  number: XmlElem<string | null>;
  serial_number: XmlElem<string | null>;
  date_signature: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  subject_contract: XmlElem<string | null>;
  prev_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  contract_type: XmlElem<number | null, SaleContractTypeCatalogDocumentTopElem>;
  contract_signature: XmlElem<string | null>;
  client_legal: XmlElem<string | null>;
  provider_legal: XmlElem<string | null>;
  client_legal_name: XmlElem<string | null>;
  provider_legal_name: XmlElem<string | null>;
  bad_debt: XmlElem<boolean | null>;
  contract_cost: XmlElem<number | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  costs: XmlMultiElem<SaleContractDocumentCost | null>;
  prices: XmlMultiElem<SaleContractDocumentPrice | null>;
  prolongation_infos: XmlMultiElem<SaleContractDocumentProlongationInfo | null>;
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
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SaleContractDocument = XmlDocument & {
  TopElem: SaleContractDocumentTopElem;
  sale_contract: SaleContractDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

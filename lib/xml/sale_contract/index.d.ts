interface SaleContractDocumentCost {
  id: XmlElem<string>;
  cost_currency_type_id: XmlElem<string, typeof lists.currency_types>;
  cost_value: XmlElem<number>;
}

interface SaleContractDocumentPrice {
  id: XmlElem<string>;
  price_id: XmlElem<number, PriceCatalogDocumentTopElem>;
}

interface SaleContractDocumentProlongationInfo {
  id: XmlElem<string>;
  cost: XmlElem<number>;
  cost_currency_type_id: XmlElem<string, typeof lists.currency_types>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
}

type SaleContractDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: SaleContractDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  state_id: XmlElem<number, ContractStateCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  is_agent_contract: XmlElem<boolean>;
  agent_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  client_manager_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  manager_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  parent_sale_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  number: XmlElem<string>;
  serial_number: XmlElem<string>;
  date_signature: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  subject_contract: XmlElem<string>;
  prev_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  contract_type: XmlElem<number, SaleContractTypeCatalogDocumentTopElem>;
  contract_signature: XmlElem<string>;
  client_legal: XmlElem<string>;
  provider_legal: XmlElem<string>;
  client_legal_name: XmlElem<string>;
  provider_legal_name: XmlElem<string>;
  bad_debt: XmlElem<boolean>;
  contract_cost: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  costs: XmlMultiElem<SaleContractDocumentCost>;
  prices: XmlMultiElem<SaleContractDocumentPrice>;
  prolongation_infos: XmlMultiElem<SaleContractDocumentProlongationInfo>;
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
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SaleContractDocument = XmlDocument & {
  TopElem: SaleContractDocumentTopElem;
};

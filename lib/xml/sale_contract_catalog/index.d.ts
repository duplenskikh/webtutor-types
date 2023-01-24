type SaleContractCatalogDocumentTopElem = XmlTopElem & { Doc: SaleContractCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  state_id: XmlElem<number>;
  is_agent_contract: XmlElem<boolean>;
  agent_org_id: XmlElem<number>;
  org_id: XmlElem<number>;
  client_org_id: XmlElem<number>;
  client_manager_id: XmlElem<number>;
  manager_id: XmlElem<number>;
  parent_sale_contract_id: XmlElem<number>;
  number: XmlElem<string>;
  serial_number: XmlElem<string>;
  date_signature: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  client_legal: XmlElem<string>;
  provider_legal: XmlElem<string>;
  client_legal_name: XmlElem<string>;
  provider_legal_name: XmlElem<string>;
  bad_debt: XmlElem<boolean>;
  contract_cost: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  contract_signature: XmlElem<string>;
  prev_contract_id: XmlElem<number>;
  contract_type: XmlElem<number>;
  sent_date: XmlElem<Date>;
  recipient: XmlElem<string>;
  consignment_document_number: XmlElem<string>;
  is_received: XmlElem<boolean>;
  received_date: XmlElem<Date>;
  docs_comment: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SaleContractCatalogDocument = XmlDocument & { TopElem: SaleContractCatalogDocumentTopElem; };

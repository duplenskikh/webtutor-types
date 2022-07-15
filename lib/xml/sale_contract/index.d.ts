interface SaleContractCost {
  id?: XmlElem<string>;
  cost_currency_type_id?: XmlElem<string>;
  cost_value?: XmlElem<number>;
}

interface SaleContractPrice {
  id?: XmlElem<string>;
  price_id?: XmlElem<number>;
}

interface SaleContractTopElem extends XmlTopElem<SaleContractDocument>, FileListBase, CustomElemsBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  state_id?: XmlElem<number>;
  org_id?: XmlElem<number>;
  is_agent_contract?: XmlElem<boolean>;
  agent_org_id?: XmlElem<number>;
  client_org_id?: XmlElem<number>;
  client_manager_id?: XmlElem<number>;
  manager_id?: XmlElem<number>;
  parent_sale_contract_id?: XmlElem<number>;
  number?: XmlElem<string>;
  serial_number?: XmlElem<string>;
  date_signature?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  subject_contract?: XmlElem<string>;
  prev_contract_id?: XmlElem<number>;
  contract_type?: XmlElem<number>;
  contract_signature?: XmlElem<string>;
  client_legal?: XmlElem<string>;
  provider_legal?: XmlElem<string>;
  client_legal_name?: XmlElem<string>;
  provider_legal_name?: XmlElem<string>;
  bad_debt?: XmlElem<boolean>;
  contract_cost?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  sent_date?: XmlElem<Date>;
  sent_type?: XmlElem<string>;
  recipient?: XmlElem<string>;
  consignment_document_number?: XmlElem<string>;
  sent_messenger_service_id?: XmlElem<number>;
  back_sent_type?: XmlElem<string>;
  back_sent_messenger_service_id?: XmlElem<number>;
  is_received?: XmlElem<boolean>;
  received_date?: XmlElem<Date>;
  docs_comment?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  costs?: XmlMultiElem<SaleContractCost>;
  prices?: XmlMultiElem<SaleContractPrice>;
  access?: XmlElem<AccessDocBase>;
}

type SaleContractDocument = XmlDocument<SaleContractTopElem>;

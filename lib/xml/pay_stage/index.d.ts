interface PayStageDocumentCostMin {
  value: XmlElem<number>;
  date: XmlElem<Date>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  rate: XmlElem<number>;
}

interface PayStageDocumentCostMax {
  value: XmlElem<number>;
  date: XmlElem<Date>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  rate: XmlElem<number>;
}

interface PayStageDocumentCostFact {
  value: XmlElem<number>;
  date: XmlElem<Date>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  rate: XmlElem<number>;
}

interface PayStageDocumentCost {
  min: XmlElem<PayStageDocumentCostMin>;
  max: XmlElem<PayStageDocumentCostMax>;
  fact: XmlElem<PayStageDocumentCostFact>;
}

type PayStageDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: PayStageDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  sale_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  agent_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  is_agent_sale_contract: XmlElem<boolean>;
  agent_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  is_prepayment: XmlElem<boolean>;
  type_id: XmlElem<string>;
  closing_method: XmlElem<string>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  cost_type: XmlElem<string>;
  is_autoclosing: XmlElem<boolean>;
  autoclosing_period: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  cost: XmlElem<PayStageDocumentCost>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type PayStageDocument = XmlDocument & {
  TopElem: PayStageDocumentTopElem;
};

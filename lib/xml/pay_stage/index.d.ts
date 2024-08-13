interface PayStageDocumentCostMin {
  value: XmlElem<number | null>;
  date: XmlElem<Date | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  rate: XmlElem<number | null>;
}

interface PayStageDocumentCostMax {
  value: XmlElem<number | null>;
  date: XmlElem<Date | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  rate: XmlElem<number | null>;
}

interface PayStageDocumentCostFact {
  value: XmlElem<number | null>;
  date: XmlElem<Date | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  rate: XmlElem<number | null>;
}

interface PayStageDocumentCost {
  min: XmlElem<PayStageDocumentCostMin | null>;
  max: XmlElem<PayStageDocumentCostMax | null>;
  fact: XmlElem<PayStageDocumentCostFact | null>;
}

type PayStageDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: PayStageDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  agent_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  is_agent_sale_contract: XmlElem<boolean | null>;
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  is_prepayment: XmlElem<boolean | null>;
  type_id: XmlElem<string | null>;
  closing_method: XmlElem<string | null>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  cost_type: XmlElem<string | null>;
  is_autoclosing: XmlElem<boolean | null>;
  autoclosing_period: XmlElem<number | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  cost: XmlElem<PayStageDocumentCost | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type PayStageDocument = XmlDocument & {
  TopElem: PayStageDocumentTopElem;
  pay_stage: PayStageDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

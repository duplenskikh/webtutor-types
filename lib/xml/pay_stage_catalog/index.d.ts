type PayStageCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  agent_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  is_agent_sale_contract: XmlElem<boolean | null>;
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  is_prepayment: XmlElem<boolean | null>;
  cost_type: XmlElem<string | null>;
  min_cost: XmlElem<number | null>;
  max_cost: XmlElem<number | null>;
  fact_cost: XmlElem<number | null>;
  type_id: XmlElem<string | null>;
  closing_method: XmlElem<string | null>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  is_autoclosing: XmlElem<boolean | null>;
  autoclosing_period: XmlElem<number | null>;
  OnBuild(): void;
};

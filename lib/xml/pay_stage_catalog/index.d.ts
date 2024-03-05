type PayStageCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  sale_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  agent_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  is_agent_sale_contract: XmlElem<boolean>;
  agent_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_prepayment: XmlElem<boolean>;
  cost_type: XmlElem<string>;
  min_cost: XmlElem<number>;
  max_cost: XmlElem<number>;
  fact_cost: XmlElem<number>;
  type_id: XmlElem<string>;
  closing_method: XmlElem<string>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  is_autoclosing: XmlElem<boolean>;
  autoclosing_period: XmlElem<number>;
  OnBuild(): unknown;
};

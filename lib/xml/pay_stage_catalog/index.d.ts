type PayStageCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Договор */
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  agent_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  is_agent_sale_contract: XmlElem<boolean | null>;
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  is_prepayment: XmlElem<boolean | null>;
  cost_type: XmlElem<string | null>;
  min_cost: XmlElem<number | null>;
  max_cost: XmlElem<number | null>;
  fact_cost: XmlElem<number | null>;
  /** Тип */
  type_id: XmlElem<string | null>;
  closing_method: XmlElem<string | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  is_autoclosing: XmlElem<boolean | null>;
  autoclosing_period: XmlElem<number | null>;
  OnBuild(): void;
};

type BudgetCatalogDocumentTopElem = XmlTopElem &
CostCurrencyBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_approved: XmlElem<boolean>;
  type_id: XmlElem<number | null, BudgetTypeCatalogDocumentTopElem>;
  state: XmlElem<string | null, typeof common.budget_state_types>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

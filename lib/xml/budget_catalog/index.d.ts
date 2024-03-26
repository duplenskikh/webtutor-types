type BudgetCatalogDocumentTopElem = XmlTopElem &
CostCurrencyBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_approved: XmlElem<boolean>;
  type_id: XmlElem<number, BudgetTypeCatalogDocumentTopElem>;
  state: XmlElem<string, typeof common.budget_state_types>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  expense_item_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

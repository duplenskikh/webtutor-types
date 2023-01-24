type BudgetCatalogDocumentTopElem = XmlTopElem & { Doc: BudgetCatalogDocument } & 
CostCurrencyBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_approved: XmlElem<boolean>;
  type_id: XmlElem<number>;
  state: XmlElem<string>;
  cost_center_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  expense_item_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BudgetCatalogDocument = XmlDocument & { TopElem: BudgetCatalogDocumentTopElem; };

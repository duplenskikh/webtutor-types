interface BudgetDocumentTransfer {
  id: XmlElem<string | null>;
  budget_id: XmlElem<number | null, BudgetCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  login: XmlElem<string | null>;
  sum: XmlElem<number | null>;
  direction: XmlElem<boolean>;
  comment: XmlElem<string | null>;
}

type BudgetDocumentTopElem = XmlTopElem &
CostCurrencyBase &
CatalogListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: BudgetDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  state: XmlElem<string, typeof common.budget_state_types>;
  type_id: XmlElem<number | null, BudgetTypeCatalogDocumentTopElem>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  is_approved: XmlElem<boolean>;
  create_date: XmlElem<Date | null>;
  transfers: XmlMultiElem<BudgetDocumentTransfer | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type BudgetDocument = XmlDocument & {
  TopElem: BudgetDocumentTopElem;
  budget: BudgetDocumentTopElem;
  DocDesc(): string;
};

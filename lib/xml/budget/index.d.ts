interface BudgetDocumentTransfer {
  id: XmlElem<string>;
  budget_id: XmlElem<number, BudgetCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  login: XmlElem<string>;
  sum: XmlElem<number>;
  direction: XmlElem<boolean>;
  comment: XmlElem<string>;
}

type BudgetDocumentTopElem = XmlTopElem &
CostCurrencyBase &
CatalogListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: BudgetDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  state: XmlElem<string, typeof common.budget_state_types>;
  type_id: XmlElem<number, BudgetTypeCatalogDocumentTopElem>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  expense_item_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  is_approved: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  transfers: XmlMultiElem<BudgetDocumentTransfer>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type BudgetDocument = XmlDocument & {
  TopElem: BudgetDocumentTopElem;
  budget: BudgetDocumentTopElem;
  DocDesc(): string;
};

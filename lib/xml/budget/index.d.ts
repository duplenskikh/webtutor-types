interface BudgetDocumentTransfer {
  id: XmlElem<string>;
  budget_id: XmlElem<number>;
  date: XmlElem<Date>;
  login: XmlElem<string>;
  sum: XmlElem<number>;
  direction: XmlElem<boolean>;
  comment: XmlElem<string>;
}

type BudgetDocumentTopElem = XmlTopElem & { Doc: BudgetDocument } & 
  CostCurrencyBase &
  CatalogListBase &
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  state: XmlElem<string>;
  type_id: XmlElem<number>;
  cost_center_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  expense_item_id: XmlElem<number>;
  is_approved: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  transfers: XmlMultiElem<BudgetDocumentTransfer>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type BudgetDocument = XmlDocument & { TopElem: BudgetDocumentTopElem; };

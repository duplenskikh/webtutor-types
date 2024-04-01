type DlgNewBudgetTransferDocumentTopElem = XmlTopElem & {
  Doc: DlgNewBudgetTransferDocument;
  cur_budget_id: XmlElem<number>;
  cur_sum: XmlElem<number>;
  budget_id: XmlElem<number, BudgetCatalogDocumentTopElem>;
  sum: XmlElem<number>;
  comment: XmlElem<string>;
};

type DlgNewBudgetTransferDocument = XmlDocument & {
  TopElem: DlgNewBudgetTransferDocumentTopElem;
  dlg_new_budget_transfer: DlgNewBudgetTransferDocumentTopElem;
};

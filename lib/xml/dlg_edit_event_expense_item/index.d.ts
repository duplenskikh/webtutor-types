interface DlgEditEventExpenseItemDocumentWtvDlgEditEventExpenseItemExpenseItem {
  expense_item_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
}

interface DlgEditEventExpenseItemDocumentWtvDlgEditEventExpenseItem {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  expense_items: XmlMultiElem<DlgEditEventExpenseItemDocumentWtvDlgEditEventExpenseItemExpenseItem>;
}

type DlgEditEventExpenseItemDocumentTopElem = XmlTopElem & {
  Doc: DlgEditEventExpenseItemDocument;

};

type DlgEditEventExpenseItemDocument = XmlDocument & {
  TopElem: DlgEditEventExpenseItemDocumentTopElem;
  dlg_edit_event_expense_item: DlgEditEventExpenseItemDocumentTopElem;
  wtv_dlg_edit_event_expense_item: XmlElem<DlgEditEventExpenseItemDocumentWtvDlgEditEventExpenseItem>;
};

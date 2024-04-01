interface ViewTransactionReportDocumentTransaction {
  id: XmlElem<number, TransactionCatalogDocumentTopElem>;
  name: XmlElem<string>;
  date: XmlElem<string>;
  decrease_amount: XmlElem<string>;
  increase_amount: XmlElem<string>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string>;
}

type ViewTransactionReportDocumentTopElem = XmlTopElem & {
  Doc: ViewTransactionReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  is_subdivision_hierarchy: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  transactions: XmlMultiElem<ViewTransactionReportDocumentTransaction>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewTransactionReportDocument = XmlDocument & {
  TopElem: ViewTransactionReportDocumentTopElem;
  view_transaction_report: ViewTransactionReportDocumentTopElem;
  OnInit(): void;
};

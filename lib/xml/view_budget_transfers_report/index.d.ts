interface ViewBudgetTransfersReportDocumentTransfer {
  budget_id: XmlElem<number>;
  sum: XmlElem<string>;
  currency_name: XmlElem<string>;
  source_cost_center_name: XmlElem<string>;
  source_expense_item_name: XmlElem<string>;
  source_education_method_name: XmlElem<string>;
  recipient_cost_center_name: XmlElem<string>;
  recipient_expense_item_name: XmlElem<string>;
  recipient_education_method_name: XmlElem<string>;
  comment: XmlElem<string>;
  direction: XmlElem<number>;
  date: XmlElem<string>;
}

type ViewBudgetTransfersReportDocumentTopElem = XmlTopElem &
MsViewCatalogBase &
ViewColumnsBase & {
  Doc: ViewBudgetTransfersReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  error: XmlElem<number>;
  data: XmlElem<TableDataBase>;
  transfers: XmlMultiElem<ViewBudgetTransfersReportDocumentTransfer>;
};

type ViewBudgetTransfersReportDocument = XmlDocument & {
  TopElem: ViewBudgetTransfersReportDocumentTopElem;
  view_budget_transfers_report: ViewBudgetTransfersReportDocumentTopElem;
  OnInit(): void;
};

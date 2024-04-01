interface ViewRequestStatisticsReportDocumentRequest {
  id: XmlElem<number, RequestCatalogDocumentTopElem>;
  request_code: XmlElem<string>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string>;
  date: XmlElem<string>;
  amount: XmlElem<string>;
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  good_name: XmlElem<string>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
}

type ViewRequestStatisticsReportDocumentTopElem = XmlTopElem & {
  Doc: ViewRequestStatisticsReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  is_subdivision_hierarchy: XmlElem<boolean>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  requests: XmlMultiElem<ViewRequestStatisticsReportDocumentRequest>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewRequestStatisticsReportDocument = XmlDocument & {
  TopElem: ViewRequestStatisticsReportDocumentTopElem;
  view_request_statistics_report: ViewRequestStatisticsReportDocumentTopElem;
  OnInit(): void;
};

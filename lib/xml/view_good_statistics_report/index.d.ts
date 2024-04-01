interface ViewGoodStatisticsReportDocumentGood {
  id: XmlElem<number, GoodCatalogDocumentTopElem>;
  name: XmlElem<string>;
  basket_amount: XmlElem<string>;
  agreement_amount: XmlElem<string>;
  agreed_amount: XmlElem<string>;
  pay_amount: XmlElem<string>;
  cancel_amount: XmlElem<string>;
  reject_amount: XmlElem<string>;
}

type ViewGoodStatisticsReportDocumentTopElem = XmlTopElem & {
  Doc: ViewGoodStatisticsReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  is_subdivision_hierarchy: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  goods: XmlMultiElem<ViewGoodStatisticsReportDocumentGood>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewGoodStatisticsReportDocument = XmlDocument & {
  TopElem: ViewGoodStatisticsReportDocumentTopElem;
  view_good_statistics_report: ViewGoodStatisticsReportDocumentTopElem;
  OnInit(): void;
};

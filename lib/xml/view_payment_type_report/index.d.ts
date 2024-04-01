interface ViewPaymentTypeReportDocumentGood {
  id: XmlElem<number, GoodCatalogDocumentTopElem>;
  name: XmlElem<string>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string>;
  date: XmlElem<string>;
  amount: XmlElem<string>;
}

type ViewPaymentTypeReportDocumentTopElem = XmlTopElem & {
  Doc: ViewPaymentTypeReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  is_subdivision_hierarchy: XmlElem<boolean>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  payment_type_id: XmlElem<number, PaymentTypeCatalogDocumentTopElem>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  goods: XmlMultiElem<ViewPaymentTypeReportDocumentGood>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewPaymentTypeReportDocument = XmlDocument & {
  TopElem: ViewPaymentTypeReportDocumentTopElem;
  view_payment_type_report: ViewPaymentTypeReportDocumentTopElem;
  OnInit(): void;
};

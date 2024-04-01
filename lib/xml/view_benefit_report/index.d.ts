interface ViewBenefitReportDocumentGood {
  id: XmlElem<number, GoodCatalogDocumentTopElem>;
  name: XmlElem<string>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string>;
}

type ViewBenefitReportDocumentTopElem = XmlTopElem & {
  Doc: ViewBenefitReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  is_subdivision_hierarchy: XmlElem<boolean>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  benefit_id: XmlElem<number, BenefitCatalogDocumentTopElem>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  goods: XmlMultiElem<ViewBenefitReportDocumentGood>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewBenefitReportDocument = XmlDocument & {
  TopElem: ViewBenefitReportDocumentTopElem;
  view_benefit_report: ViewBenefitReportDocumentTopElem;
  OnInit(): void;
};

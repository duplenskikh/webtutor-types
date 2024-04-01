interface ViewPolicyTypeReportDocumentGood {
  id: XmlElem<number, GoodCatalogDocumentTopElem>;
  name: XmlElem<string>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string>;
}

type ViewPolicyTypeReportDocumentTopElem = XmlTopElem & {
  Doc: ViewPolicyTypeReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  is_subdivision_hierarchy: XmlElem<boolean>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  policy_type_id: XmlElem<number, PolicyTypeCatalogDocumentTopElem>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  goods: XmlMultiElem<ViewPolicyTypeReportDocumentGood>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewPolicyTypeReportDocument = XmlDocument & {
  TopElem: ViewPolicyTypeReportDocumentTopElem;
  view_policy_type_report: ViewPolicyTypeReportDocumentTopElem;
  OnInit(): void;
};

interface ViewSuccessorsReportDocumentComparisonSuccessorParam {
  code: XmlElem<string>;
  name: XmlElem<string>;
}

interface ViewSuccessorsReportDocumentStatus {
  id: XmlElem<string, typeof common.successor_status_types>;
}

interface ViewSuccessorsReportDocumentDevelopmentPotential {
  id: XmlElem<number, DevelopmentPotentialCatalogDocumentTopElem>;
}

interface ViewSuccessorsReportDocumentEfficiencyEstimation {
  id: XmlElem<number, EfficiencyEstimationCatalogDocumentTopElem>;
}

interface ViewSuccessorsReportDocumentReadinessLevel {
  id: XmlElem<number, ReadinessLevelCatalogDocumentTopElem>;
}

interface ViewSuccessorsReportDocumentSuccessor {
  id: XmlElem<number, SuccessorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  subdivision_id: XmlElem<number, SubCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  key_position_id: XmlElem<number, KeyPositionCatalogDocumentTopElem>;
  key_position_name: XmlElem<string>;
  key_position_sub_id: XmlElem<number, SubCatalogDocumentTopElem>;
  key_position_sub_name: XmlElem<string>;
  status: XmlElem<string>;
  development_potential_id: XmlElem<number, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number, EfficiencyEstimationCatalogDocumentTopElem>;
  readiness_level_id: XmlElem<number, ReadinessLevelCatalogDocumentTopElem>;
  sex: XmlElem<string>;
  age: XmlElem<string>;
  education: XmlElem<string>;
  exp_years_company: XmlElem<string>;
  exp_years_position: XmlElem<string>;
  exp_month_reserve: XmlElem<string>;
  efficiency: XmlElem<string>;
  pdp_score_summary: XmlElem<string>;
  efficiency_estimation_name: XmlElem<string>;
  development_potential_name: XmlElem<string>;
  readiness_level_name: XmlElem<string>;
  region_name: XmlElem<string>;
}

type ViewSuccessorsReportDocumentTopElem = XmlTopElem & {
  Doc: ViewSuccessorsReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  key_position_id: XmlElem<number, KeyPositionCatalogDocumentTopElem>;
  is_comparison_successor: XmlElem<boolean>;
  comparison_successor_params: XmlMultiElem<ViewSuccessorsReportDocumentComparisonSuccessorParam>;
  hier_show: XmlElem<boolean>;
  disp_tree_selector: XmlElem<boolean>;
  statuses: XmlMultiElem<ViewSuccessorsReportDocumentStatus>;
  development_potentials: XmlMultiElem<ViewSuccessorsReportDocumentDevelopmentPotential>;
  efficiency_estimations: XmlMultiElem<ViewSuccessorsReportDocumentEfficiencyEstimation>;
  readiness_levels: XmlMultiElem<ViewSuccessorsReportDocumentReadinessLevel>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  successors: XmlMultiElem<ViewSuccessorsReportDocumentSuccessor>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewSuccessorsReportDocument = XmlDocument & {
  TopElem: ViewSuccessorsReportDocumentTopElem;
  view_successors_report: ViewSuccessorsReportDocumentTopElem;
  OnInit(): void;
};

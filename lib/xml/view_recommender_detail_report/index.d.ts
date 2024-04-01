interface ViewRecommenderDetailReportDocumentRecommenderAlgorithm {
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
}

interface ViewRecommenderDetailReportDocumentRecommenderDetail {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_code: XmlElem<string>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_position_name: XmlElem<string>;
  name: XmlElem<string>;
  selected_date: XmlElem<string>;
  date_implemented: XmlElem<string>;
  base_object_type: XmlElem<string>;
  base_object_name: XmlElem<string>;
  selected_object_type: XmlElem<string>;
  selected_object_name: XmlElem<string>;
  implemented: XmlElem<string>;
}

type ViewRecommenderDetailReportDocumentTopElem = XmlTopElem &
ViewColumnsBase &
TableDataBaseExtended & {
  Doc: ViewRecommenderDetailReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  error: XmlElem<number>;
  is_web_client: XmlElem<boolean>;
  recommender_algorithms: XmlMultiElem<ViewRecommenderDetailReportDocumentRecommenderAlgorithm>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  param_panel_open: XmlElem<boolean>;
  show_alert: XmlElem<boolean>;
  graph_type: XmlElem<string>;
  sort_type_id: XmlElem<string>;
  recommender_details: XmlMultiElem<ViewRecommenderDetailReportDocumentRecommenderDetail>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
};

type ViewRecommenderDetailReportDocument = XmlDocument & {
  TopElem: ViewRecommenderDetailReportDocumentTopElem;
  view_recommender_detail_report: ViewRecommenderDetailReportDocumentTopElem;
  OnInit(): void;
};

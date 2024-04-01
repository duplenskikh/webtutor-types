interface ViewEventByDepartReportDocumentDataLearning {
  id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  score: XmlElem<number>;
  max_score: XmlElem<number>;
  per_cent: XmlElem<number>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  type_id: XmlElem<string, typeof common.event_types>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_method_name: XmlElem<string>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  education_org_name: XmlElem<string>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  place_name: XmlElem<string>;
  test_score_percent: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_code: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_list_staff: XmlElem<string>;
}

interface ViewEventByDepartReportDocumentDataLearningsAggregatedLearningAggregated {
  id: XmlElem<number>;
  obj_id: XmlElem<number>;
  name: XmlElem<string>;
  applied: XmlElem<number>;
  present: XmlElem<number>;
  obj_sub_path: XmlElem<string>;
  average_duration: XmlElem<number>;
  average_cost: XmlElem<number>;
  flag: XmlElem<boolean>;
}

interface ViewEventByDepartReportDocumentDataLearningsAggregated {
  learning_aggregated: XmlElem<ViewEventByDepartReportDocumentDataLearningsAggregatedLearningAggregated>;
}

interface ViewEventByDepartReportDocumentDataLearningsAggregatedTotalLearningAggregatedTotal {
  id: XmlElem<number>;
  obj_id: XmlElem<number>;
  name: XmlElem<string>;
  applied: XmlElem<number>;
  present: XmlElem<number>;
  obj_sub_path: XmlElem<string>;
  average_duration: XmlElem<number>;
  average_cost: XmlElem<number>;
  flag: XmlElem<boolean>;
}

interface ViewEventByDepartReportDocumentDataLearningsAggregatedTotal {
  learning_aggregated_total: XmlElem<ViewEventByDepartReportDocumentDataLearningsAggregatedTotalLearningAggregatedTotal>;
}

interface ViewEventByDepartReportDocumentData {
  learnings: XmlMultiElem<ViewEventByDepartReportDocumentDataLearning>;
  learnings_aggregated: XmlElem<ViewEventByDepartReportDocumentDataLearningsAggregated>;
  learnings_aggregated_total: XmlElem<ViewEventByDepartReportDocumentDataLearningsAggregatedTotal>;
}

type ViewEventByDepartReportDocumentTopElem = XmlTopElem & {
  Doc: ViewEventByDepartReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  sort_type_id: XmlElem<string>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  disp_average_duration: XmlElem<boolean>;
  disp_average_cost: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  view_sub_selector: XmlElem<number>;
  sort_type_aggregated_id: XmlElem<string>;
  data: XmlElem<ViewEventByDepartReportDocumentData>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
  disp_type_id: XmlElem<string, typeof common.event_types>;
};

type ViewEventByDepartReportDocument = XmlDocument & {
  TopElem: ViewEventByDepartReportDocumentTopElem;
  view_event_by_depart_report: ViewEventByDepartReportDocumentTopElem;
};

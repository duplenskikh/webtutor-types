interface ViewEventDepReportDocumentEventTypeDuration {
  id: XmlElem<number>;
  type: XmlElem<string, typeof common.event_types>;
  event_duration: XmlElem<number>;
}

interface ViewEventDepReportDocumentDataSubdivision {
  cur_id: XmlElem<number>;
  id: XmlElem<number>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  type: XmlElem<string>;
  person_count: XmlElem<number>;
  total_person_count: XmlElem<number>;
  is_main: XmlElem<boolean>;
  sub_collabor_in_event_count: XmlElem<number>;
  down_levels_collabor_in_event_count: XmlElem<number>;
  sub_collabor_in_event_count_unique: XmlElem<number>;
  down_levels_collabor_in_event_count_unique: XmlElem<number>;
  percent_total: XmlElem<number>;
  percent: XmlElem<number>;
  days_count_total: XmlElem<number>;
  days_count: XmlElem<number>;
  average_days_total: XmlElem<number>;
  average_days: XmlElem<number>;
}

interface ViewEventDepReportDocumentDataTotalSubdivision {
  cur_id: XmlElem<number>;
  name: XmlElem<string>;
  total_person_count: XmlElem<number>;
  total_collabor: XmlElem<number>;
  total_collabor_unique: XmlElem<number>;
  total_percent: XmlElem<number>;
  total_days_count: XmlElem<number>;
  total_average_days: XmlElem<number>;
}

interface ViewEventDepReportDocumentData {
  subdivisions: XmlMultiElem<ViewEventDepReportDocumentDataSubdivision>;
  total_subdivisions: XmlMultiElem<ViewEventDepReportDocumentDataTotalSubdivision>;
}

type ViewEventDepReportDocumentTopElem = XmlTopElem & {
  Doc: ViewEventDepReportDocument;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  use_fact_duration: XmlElem<boolean>;
  show_only_current_period_workers: XmlElem<boolean>;
  add_courses: XmlElem<boolean>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  uses_place_hier: XmlElem<boolean>;
  use_whole_staff: XmlElem<boolean>;
  count_training_days: XmlElem<boolean>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  show_all: XmlElem<boolean>;
  close_all: XmlElem<boolean>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  course_duration: XmlElem<number>;
  event_duration: XmlElem<number>;
  code_contain: XmlElem<string>;
  event_type_durations: XmlMultiElem<ViewEventDepReportDocumentEventTypeDuration>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  data: XmlElem<ViewEventDepReportDocumentData>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  disp_type_id: XmlElem<string, typeof common.event_types>;
};

type ViewEventDepReportDocument = XmlDocument & {
  TopElem: ViewEventDepReportDocumentTopElem;
  view_event_dep_report: ViewEventDepReportDocumentTopElem;
};

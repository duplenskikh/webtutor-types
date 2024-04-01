interface ViewExceedCourseReportDocumentLearningPart {
  code: XmlElem<string>;
  name: XmlElem<string>;
  course_name: XmlElem<string>;
  state_id: XmlElem<number, typeof common.learning_states>;
  state_name: XmlElem<string>;
  state_color: XmlElem<string>;
  score: XmlElem<number>;
  start_usage_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
  score_with_percent: XmlElem<string>;
}

interface ViewExceedCourseReportDocumentLearning {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_code: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_list_staff: XmlElem<string>;
  person_position_name: XmlElem<string>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  course_name: XmlElem<string>;
  start_usage_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
  max_end_date: XmlElem<Date>;
  score: XmlElem<number>;
  max_score: XmlElem<number>;
  score_with_percent: XmlElem<string>;
  state_id: XmlElem<number, typeof common.learning_states>;
  state_name: XmlElem<string>;
  state_color: XmlElem<string>;
  parent_id: XmlElem<number>;
  parts: XmlMultiElem<ViewExceedCourseReportDocumentLearningPart>;
}

type ViewExceedCourseReportDocumentTopElem = XmlTopElem & {
  Doc: ViewExceedCourseReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  param_panel_open: XmlElem<boolean>;
  param_additional_panel_open: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  exceed_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  learnings: XmlMultiElem<ViewExceedCourseReportDocumentLearning>;
  disp_parts: XmlElem<boolean>;
  disp_learning_type: XmlElem<string>;
  is_create: XmlElem<boolean>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewExceedCourseReportDocument = XmlDocument & {
  TopElem: ViewExceedCourseReportDocumentTopElem;
  view_exceed_course_report: ViewExceedCourseReportDocumentTopElem;
  OnInit(): void;
};

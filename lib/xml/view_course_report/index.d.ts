interface ViewCourseReportDocumentLearning {
  id: XmlElem<number>;
  start_usage_date: XmlElem<Date>;
  max_end_date: XmlElem<Date>;
  score: XmlElem<number>;
  state_id: XmlElem<number, typeof common.learning_states>;
  max_score: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_code: XmlElem<string>;
  person_fullname: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_position_name: XmlElem<string>;
  course_name: XmlElem<string>;
}

type ViewCourseReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewCourseReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  param_panel_open: XmlElem<boolean>;
  param_additional_panel_open: XmlElem<boolean>;
  disp_learning_prog: XmlElem<boolean>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  is_report_run: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_learning_type: XmlElem<string>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  excel_file_url: XmlElem<string>;
  disp_excel_file_open: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  error: XmlElem<number>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  data: XmlElem<TableDataBase>;
  learnings: XmlMultiElem<ViewCourseReportDocumentLearning>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewCourseReportDocument = XmlDocument & {
  TopElem: ViewCourseReportDocumentTopElem;
  view_course_report: ViewCourseReportDocumentTopElem;
  OnInit(): void;
};

interface ViewCourseModuleStatusReportDocumentModule {
  code: XmlElem<string>;
  name: XmlElem<string>;
}

interface ViewCourseModuleStatusReportDocumentVersion {
  code: XmlElem<string>;
  id: XmlElem<number>;
  obj_type: XmlElem<string>;
  name: XmlElem<string>;
}

interface ViewCourseModuleStatusReportDocumentAvailableVersion {
  code: XmlElem<string>;
  id: XmlElem<number>;
  name: XmlElem<string>;
  obj_type: XmlElem<string>;
}

interface ViewCourseModuleStatusReportDocumentDataCourseModuleStatus {
  module_name: XmlElem<string>;
  count: XmlElem<string>;
  status_completion_change: XmlElem<string>;
  status_completion_success: XmlElem<string>;
  time_completion_total: XmlElem<string>;
  point_change: XmlElem<string>;
  goal_count_change: XmlElem<string>;
  task_count_change: XmlElem<string>;
}

type ViewCourseModuleStatusReportDocumentTopElem = XmlTopElem &
ViewColumnsBase &
TableDataBaseExtended & {
  Doc: ViewCourseModuleStatusReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_learning_type: XmlElem<string>;
  course_obj: XmlElem<unknown>;
  disp_versions: XmlElem<boolean>;
  param_panel_open: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  modules: XmlMultiElem<ViewCourseModuleStatusReportDocumentModule>;
  versions: XmlMultiElem<ViewCourseModuleStatusReportDocumentVersion>;
  available_versions: XmlMultiElem<ViewCourseModuleStatusReportDocumentAvailableVersion>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  data_course_module_statuses: XmlMultiElem<ViewCourseModuleStatusReportDocumentDataCourseModuleStatus>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
  fnBuildVersions(): unknown;
};

type ViewCourseModuleStatusReportDocument = XmlDocument & {
  TopElem: ViewCourseModuleStatusReportDocumentTopElem;
  view_course_module_status_report: ViewCourseModuleStatusReportDocumentTopElem;
  OnInit(): void;
};

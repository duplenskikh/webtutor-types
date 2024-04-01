interface ViewCourseCommentReportDocumentModule {
  code: XmlElem<string>;
  name: XmlElem<string>;
}

interface ViewCourseCommentReportDocumentVersion {
  code: XmlElem<string>;
  id: XmlElem<number>;
  obj_type: XmlElem<string>;
  name: XmlElem<string>;
}

interface ViewCourseCommentReportDocumentAvailableVersion {
  code: XmlElem<string>;
  id: XmlElem<number>;
  name: XmlElem<string>;
  obj_type: XmlElem<string>;
}

type ViewCourseCommentReportDocumentTopElem = XmlTopElem &
ViewColumnsBase &
TableDataBaseExtended & {
  Doc: ViewCourseCommentReportDocument;
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
  modules: XmlMultiElem<ViewCourseCommentReportDocumentModule>;
  versions: XmlMultiElem<ViewCourseCommentReportDocumentVersion>;
  available_versions: XmlMultiElem<ViewCourseCommentReportDocumentAvailableVersion>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  is_web_client: XmlElem<boolean>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
  fnBuildVersions(): unknown;
};

type ViewCourseCommentReportDocument = XmlDocument & {
  TopElem: ViewCourseCommentReportDocumentTopElem;
  view_course_comment_report: ViewCourseCommentReportDocumentTopElem;
  OnInit(): void;
};

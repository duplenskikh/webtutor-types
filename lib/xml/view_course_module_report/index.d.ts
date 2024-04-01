interface ViewCourseModuleReportDocumentLearningInteractions {
  lines: XmlMultiElem<InteractionBase>;
}

interface ViewCourseModuleReportDocumentLearning {
  id: XmlElem<number>;
  course_start_usage_date: XmlElem<Date>;
  start_usage_date: XmlElem<Date>;
  score: XmlElem<number>;
  state_id: XmlElem<number, typeof common.learning_states>;
  max_score: XmlElem<number>;
  per_cent: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_code: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_list_staff: XmlElem<string>;
  interactions: XmlElem<ViewCourseModuleReportDocumentLearningInteractions>;
}

interface ViewCourseModuleReportDocumentInteraction {
  interaction_id: XmlElem<string>;
}

type ViewCourseModuleReportDocumentTopElem = XmlTopElem & {
  Doc: ViewCourseModuleReportDocument;
  error: XmlElem<number>;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  part_id: XmlElem<string>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  learnings: XmlMultiElem<ViewCourseModuleReportDocumentLearning>;
  interactions: XmlMultiElem<ViewCourseModuleReportDocumentInteraction>;
  course_obj: XmlElem<unknown>;
  disp_parts: XmlElem<boolean>;
  disp_learning_type: XmlElem<string>;
  is_create: XmlElem<boolean>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewCourseModuleReportDocument = XmlDocument & {
  TopElem: ViewCourseModuleReportDocumentTopElem;
  view_course_module_report: ViewCourseModuleReportDocumentTopElem;
};

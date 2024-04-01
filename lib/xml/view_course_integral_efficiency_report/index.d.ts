interface ViewCourseIntegralEfficiencyReportDocumentCourse {
  id: XmlElem<number, CourseCatalogDocumentTopElem>;
}

interface ViewCourseIntegralEfficiencyReportDocumentResponseTypeField {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
}

interface ViewCourseIntegralEfficiencyReportDocumentSelectedField {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
}

interface ViewCourseIntegralEfficiencyReportDocumentDataCourseIntegralEfficiency {
  person_fullname: XmlElem<string>;
  basic_score_field: XmlElem<string>;
}

type ViewCourseIntegralEfficiencyReportDocumentTopElem = XmlTopElem &
ViewColumnsBase &
TableDataBaseExtended & {
  Doc: ViewCourseIntegralEfficiencyReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  param_panel_open: XmlElem<boolean>;
  param_additional_panel_open: XmlElem<boolean>;
  courses: XmlMultiElem<ViewCourseIntegralEfficiencyReportDocumentCourse>;
  response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  response_type_fields: XmlMultiElem<ViewCourseIntegralEfficiencyReportDocumentResponseTypeField>;
  selected_fields: XmlMultiElem<ViewCourseIntegralEfficiencyReportDocumentSelectedField>;
  formula_column_value: XmlElem<string>;
  formula_column_title: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_learning_type: XmlElem<string>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  is_web_client: XmlElem<boolean>;
  show_alert: XmlElem<boolean>;
  graph_type: XmlElem<string>;
  data_course_integral_efficiencys: XmlMultiElem<ViewCourseIntegralEfficiencyReportDocumentDataCourseIntegralEfficiency>;
  add_text_to_edit(screen: unknown, text: string): unknown;
};

type ViewCourseIntegralEfficiencyReportDocument = XmlDocument & {
  TopElem: ViewCourseIntegralEfficiencyReportDocumentTopElem;
  view_course_integral_efficiency_report: ViewCourseIntegralEfficiencyReportDocumentTopElem;
  OnInit(): void;
};

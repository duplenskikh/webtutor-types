interface ViewLearningDynamicsReportDocumentReportCategory {
  id: XmlElem<string, typeof common.learning_dynamics_category_types>;
}

interface ViewLearningDynamicsReportDocumentDataLearningDynamic {
  period: XmlElem<string>;
  finished: XmlElem<string>;
  finished_in_time: XmlElem<string>;
  assigned: XmlElem<string>;
  not_finished_in_time: XmlElem<string>;
  passed: XmlElem<string>;
  passed_percent: XmlElem<string>;
  average_score: XmlElem<string>;
}

type ViewLearningDynamicsReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewLearningDynamicsReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  param_panel_open: XmlElem<boolean>;
  param_additional_panel_open: XmlElem<boolean>;
  block_name: XmlElem<string>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  time_period_type: XmlElem<string>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  show_alert: XmlElem<boolean>;
  graph_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  report_categorys: XmlMultiElem<ViewLearningDynamicsReportDocumentReportCategory>;
  data: XmlElem<TableDataBase>;
  data_learning_dynamics: XmlMultiElem<ViewLearningDynamicsReportDocumentDataLearningDynamic>;
  graph: XmlElem<string>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewLearningDynamicsReportDocument = XmlDocument & {
  TopElem: ViewLearningDynamicsReportDocumentTopElem;
  view_learning_dynamics_report: ViewLearningDynamicsReportDocumentTopElem;
  OnInit(): void;
};

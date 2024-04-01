interface ViewLearningStatisticsReportDocumentReportCategory {
  id: XmlElem<string, typeof common.learning_statistics_category_types>;
}

interface ViewLearningStatisticsReportDocumentDataLearningStatistic {
  test_name: XmlElem<string>;
  duration_days: XmlElem<string>;
  duration_hours: XmlElem<string>;
  finished: XmlElem<string>;
  finished_in_time: XmlElem<string>;
  course_requests: XmlElem<string>;
  assigned: XmlElem<string>;
  passed: XmlElem<string>;
  score: XmlElem<string>;
  popularity: XmlElem<string>;
  complexity: XmlElem<string>;
  training_success: XmlElem<string>;
}

type ViewLearningStatisticsReportDocumentTopElem = XmlTopElem &
TableDataBaseExtended &
ViewColumnsBase & {
  Doc: ViewLearningStatisticsReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
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
  disp_learning_type: XmlElem<string>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  report_categorys: XmlMultiElem<ViewLearningStatisticsReportDocumentReportCategory>;
  data_learning_statistics: XmlMultiElem<ViewLearningStatisticsReportDocumentDataLearningStatistic>;
};

type ViewLearningStatisticsReportDocument = XmlDocument & {
  TopElem: ViewLearningStatisticsReportDocumentTopElem;
  view_learning_statistics_report: ViewLearningStatisticsReportDocumentTopElem;
  OnInit(): void;
};

interface ViewQuestionsAnalyticsReportDocumentAssessment {
  id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface ViewQuestionsAnalyticsReportDocumentRole {
  id: XmlElem<number>;
}

interface ViewQuestionsAnalyticsReportDocumentItem {
  id: XmlElem<number>;
}

interface ViewQuestionsAnalyticsReportDocumentSelectedItem {
  id: XmlElem<number>;
}

interface ViewQuestionsAnalyticsReportDocumentDataQuestionsAnalytic {
  question_name: XmlElem<string>;
  question_name_bg: XmlElem<string>;
  test_count: XmlElem<number>;
  test_count_bg: XmlElem<string>;
  test_purpose: XmlElem<number>;
  test_purpose_bg: XmlElem<string>;
  type: XmlElem<string>;
  type_bg: XmlElem<string>;
  weight: XmlElem<number>;
  weight_bg: XmlElem<string>;
  answered: XmlElem<number>;
  answered_bg: XmlElem<string>;
  correctly: XmlElem<string>;
  correctly_bg: XmlElem<string>;
  incorrect: XmlElem<string>;
  incorrect_bg: XmlElem<string>;
  score_average: XmlElem<string>;
  score_average_bg: XmlElem<string>;
  response_time_minimum: XmlElem<string>;
  response_time_minimum_bg: XmlElem<string>;
  response_time_maximum: XmlElem<string>;
  response_time_maximum_bg: XmlElem<string>;
  response_time_average: XmlElem<string>;
  response_time_average_bg: XmlElem<string>;
  time_didn_have: XmlElem<string>;
  time_didn_have_bg: XmlElem<string>;
  response_time_limit: XmlElem<string>;
  response_time_limit_bg: XmlElem<string>;
  attempt_counts_possible_maximum: XmlElem<string>;
  attempt_counts_possible_maximum_bg: XmlElem<string>;
  attempt_counts_maximum: XmlElem<string>;
  attempt_counts_maximum_bg: XmlElem<string>;
  attempt_counts_average: XmlElem<string>;
  attempt_counts_average_bg: XmlElem<string>;
  coefficient: XmlElem<string>;
  coefficient_bg: XmlElem<string>;
  dispersion: XmlElem<string>;
  dispersion_bg: XmlElem<string>;
  problem: XmlElem<string>;
  problem_bg: XmlElem<string>;
}

interface ViewQuestionsAnalyticsReportDocumentQuestionVariant {
  ident: XmlElem<string>;
  correct: XmlElem<string>;
  text: XmlElem<string>;
  num: XmlElem<number>;
}

interface ViewQuestionsAnalyticsReportDocumentQuestionR {
  v: XmlElem<number>;
  tv: XmlElem<number>;
}

interface ViewQuestionsAnalyticsReportDocumentQuestionAS {
  id: XmlElem<string>;
  title: XmlElem<string>;
}

interface ViewQuestionsAnalyticsReportDocumentQuestionA {
  id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  title: XmlElem<string>;
  scount: XmlElem<number>;
  ss: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentQuestionAS>;
}

interface ViewQuestionsAnalyticsReportDocumentQuestion {
  ident: XmlElem<string>;
  qtype: XmlElem<string, typeof common.annals_item_types>;
  state: XmlElem<string, typeof common.annals_states>;
  maxweight: XmlElem<string>;
  text: XmlElem<string>;
  count: XmlElem<number>;
  test_count: XmlElem<number>;
  timer: XmlElem<number>;
  passed_count: XmlElem<number>;
  duration: XmlElem<number>;
  mintime: XmlElem<number>;
  maxtime: XmlElem<number>;
  min_attempt: XmlElem<number>;
  max_attempt: XmlElem<number>;
  max_q_attempt: XmlElem<number>;
  elapsed_count: XmlElem<number>;
  total_attempts: XmlElem<number>;
  has_problems: XmlElem<boolean>;
  problems_text: XmlElem<string>;
  problems_columns: XmlElem<string>;
  variants: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentQuestionVariant>;
  acount: XmlElem<number>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  incorrect_num: XmlElem<number>;
  incorrect_per_cent: XmlElem<number>;
  elapsed_percent: XmlElem<number>;
  avg_score: XmlElem<number>;
  avg_time: XmlElem<number>;
  avg_attempt: XmlElem<number>;
  correlation_coefficient: XmlElem<number>;
  variance: XmlElem<number>;
  rs: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentQuestionR>;
  as: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentQuestionA>;
}

type ViewQuestionsAnalyticsReportDocumentTopElem = XmlTopElem &
ViewColumnsBase &
TableDataBaseExtended & {
  Doc: ViewQuestionsAnalyticsReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  assessments: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentAssessment>;
  roles: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentRole>;
  items: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentItem>;
  selected_items: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentSelectedItem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  hier_role_select: XmlElem<boolean>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  param_panel_open: XmlElem<boolean>;
  percent_difficult: XmlElem<number>;
  percent_simple: XmlElem<number>;
  elapsed_percent: XmlElem<number>;
  correlation_coefficient: XmlElem<number>;
  variance: XmlElem<number>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  data_questions_analytics: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentDataQuestionsAnalytic>;
  questions: XmlMultiElem<ViewQuestionsAnalyticsReportDocumentQuestion>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  fnGetItemsByRoles(): unknown;
};

type ViewQuestionsAnalyticsReportDocument = XmlDocument & {
  TopElem: ViewQuestionsAnalyticsReportDocumentTopElem;
  view_questions_analytics_report: ViewQuestionsAnalyticsReportDocumentTopElem;
  OnInit(): void;
};

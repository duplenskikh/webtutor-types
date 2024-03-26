interface FuncParamsDocumentProcessPackage {
  list_count: XmlElem<number>;
  progress_count: XmlElem<number>;
}

interface FuncParamsDocumentCourseReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentCourseReport {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_learning_type: XmlElem<string>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentCourseReportColumn>;
}

interface FuncParamsDocumentCompetenceByDepartReport {
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  participant_type: XmlElem<string>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  disp_all_comp_list: XmlElem<boolean>;
  disp_ideal_profile_mark: XmlElem<boolean>;
  process_only_done: XmlElem<boolean>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_inds: XmlElem<boolean>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  disp_comp_mark_name: XmlElem<boolean>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  view_sub_selector: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
}

interface FuncParamsDocumentEventDepReportEventTypeDuration {
  id: XmlElem<number>;
  type: XmlElem<string, typeof common.event_types>;
  event_duration: XmlElem<number>;
}

interface FuncParamsDocumentEventDepReport {
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
  event_type_durations: XmlMultiElem<FuncParamsDocumentEventDepReportEventTypeDuration>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  disp_type_id: XmlElem<string, typeof common.event_types>;
}

interface FuncParamsDocumentBudgetReportCostCenter {
  id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
}

interface FuncParamsDocumentBudgetReport {
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.event_status_types>;
  disp_expense_items: XmlElem<boolean>;
  cost_centers: XmlMultiElem<FuncParamsDocumentBudgetReportCostCenter>;
}

interface FuncParamsDocumentRequestReport {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.request_status_types>;
}

interface FuncParamsDocumentServerLogReport {
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  type_id: XmlElem<string>;
  show_alert: XmlElem<boolean>;
}

interface FuncParamsDocumentEducationMethodReportEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

interface FuncParamsDocumentEducationMethodReport {
  education_methods: XmlMultiElem<FuncParamsDocumentEducationMethodReportEducationMethod>;
  education_method_selector: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
}

interface FuncParamsDocumentViewEventByDepartReport {
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  sort_type_id: XmlElem<string>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  disp_average_duration: XmlElem<boolean>;
  disp_average_cost: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  view_sub_selector: XmlElem<number>;
  sort_type_aggregated_id: XmlElem<string>;
  disp_type_id: XmlElem<string, typeof common.event_types>;
}

interface FuncParamsDocumentViewCourseByDepartReportPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewCourseByDepartReportOrg {
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewCourseByDepartReportSubdivision {
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewCourseByDepartReportColumn {
  name: XmlElem<string>;
}

interface FuncParamsDocumentViewCourseByDepartReport {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  persons: XmlMultiElem<FuncParamsDocumentViewCourseByDepartReportPerson>;
  orgs: XmlMultiElem<FuncParamsDocumentViewCourseByDepartReportOrg>;
  subdivisions: XmlMultiElem<FuncParamsDocumentViewCourseByDepartReportSubdivision>;
  disp_only_exceeded: XmlElem<boolean>;
  exceed_date: XmlElem<Date>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  view_sub_selector: XmlElem<number>;
  disp_learning_type: XmlElem<string>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  columns: XmlMultiElem<FuncParamsDocumentViewCourseByDepartReportColumn>;
}

interface FuncParamsDocumentViewTestByDepartReportPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewTestByDepartReportOrg {
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewTestByDepartReportSubdivision {
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewTestByDepartReportColumn {
  name: XmlElem<string>;
}

interface FuncParamsDocumentViewTestByDepartReport {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  persons: XmlMultiElem<FuncParamsDocumentViewTestByDepartReportPerson>;
  orgs: XmlMultiElem<FuncParamsDocumentViewTestByDepartReportOrg>;
  subdivisions: XmlMultiElem<FuncParamsDocumentViewTestByDepartReportSubdivision>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  view_sub_selector: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  sort_type_aggregated_id: XmlElem<string>;
  disp_only_exceeded: XmlElem<boolean>;
  exceed_date: XmlElem<Date>;
  disp_learning_type: XmlElem<string>;
  columns: XmlMultiElem<FuncParamsDocumentViewTestByDepartReportColumn>;
}

interface FuncParamsDocumentCertificateTypeReport {
  certificate_type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
}

interface FuncParamsDocumentTestReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentTestReport {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_learning_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  columns: XmlMultiElem<FuncParamsDocumentTestReportColumn>;
}

interface FuncParamsDocumentViewQuestionByDepartReport {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  view_sub_selector: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_learning_type: XmlElem<string>;
  expanded_all: XmlElem<boolean>;
}

interface FuncParamsDocumentEventPersonReport extends ViewColumnsBase {
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  disp_type_id: XmlElem<string, typeof common.event_types>;
  disp_status_id: XmlElem<string, typeof common.event_status_types>;
  is_web_client: XmlElem<boolean>;
}

interface FuncParamsDocumentProfilingReport {
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
}

interface FuncParamsDocumentLearningDynamicsReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentLearningDynamicsReport {
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
  graph_type: XmlElem<string>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentLearningDynamicsReportColumn>;
}

interface FuncParamsDocumentLearningStatisticsReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentLearningStatisticsReport {
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
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentLearningStatisticsReportColumn>;
}

interface FuncParamsDocumentCourseIntegralEfficiencyReportCourse {
  id: XmlElem<number, CourseCatalogDocumentTopElem>;
}

interface FuncParamsDocumentCourseIntegralEfficiencyReportSelectedField {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
}

interface FuncParamsDocumentCourseIntegralEfficiencyReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentCourseIntegralEfficiencyReport {
  courses: XmlMultiElem<FuncParamsDocumentCourseIntegralEfficiencyReportCourse>;
  response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  selected_fields: XmlMultiElem<FuncParamsDocumentCourseIntegralEfficiencyReportSelectedField>;
  formula_column_value: XmlElem<string>;
  formula_column_title: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  show_alert: XmlElem<boolean>;
  graph_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentCourseIntegralEfficiencyReportColumn>;
}

interface FuncParamsDocumentQuestionsAnalyticsReportAssessment {
  id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface FuncParamsDocumentQuestionsAnalyticsReportSelectedItem {
  id: XmlElem<number>;
}

interface FuncParamsDocumentQuestionsAnalyticsReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
  sort_field: XmlElem<string>;
}

interface FuncParamsDocumentQuestionsAnalyticsReport {
  assessments: XmlMultiElem<FuncParamsDocumentQuestionsAnalyticsReportAssessment>;
  selected_items: XmlMultiElem<FuncParamsDocumentQuestionsAnalyticsReportSelectedItem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  hier_role_select: XmlElem<boolean>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
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
  columns: XmlMultiElem<FuncParamsDocumentQuestionsAnalyticsReportColumn>;
}

interface FuncParamsDocumentStatisticReportStatisticRec {
  statistic_rec_id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
}

interface FuncParamsDocumentStatisticReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentStatisticReport {
  statistic_recs: XmlMultiElem<FuncParamsDocumentStatisticReportStatisticRec>;
  period_type: XmlElem<string, typeof common.perioditys>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  show_alert: XmlElem<boolean>;
  graph_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentStatisticReportColumn>;
}

interface FuncParamsDocumentCourseCommentReportModule {
  code: XmlElem<string>;
}

interface FuncParamsDocumentCourseCommentReportVersion {
  code: XmlElem<string>;
  name: XmlElem<string>;
}

interface FuncParamsDocumentCourseCommentReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentCourseCommentReport {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_learning_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  modules: XmlMultiElem<FuncParamsDocumentCourseCommentReportModule>;
  versions: XmlMultiElem<FuncParamsDocumentCourseCommentReportVersion>;
  columns: XmlMultiElem<FuncParamsDocumentCourseCommentReportColumn>;
}

interface FuncParamsDocumentCourseModuleStatusReportModule {
  code: XmlElem<string>;
}

interface FuncParamsDocumentCourseModuleStatusReportVersion {
  code: XmlElem<string>;
  name: XmlElem<string>;
}

interface FuncParamsDocumentCourseModuleStatusReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentCourseModuleStatusReport {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_learning_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  modules: XmlMultiElem<FuncParamsDocumentCourseModuleStatusReportModule>;
  versions: XmlMultiElem<FuncParamsDocumentCourseModuleStatusReportVersion>;
  columns: XmlMultiElem<FuncParamsDocumentCourseModuleStatusReportColumn>;
}

interface FuncParamsDocumentCareerReserveReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentCareerReserveReport {
  type: XmlElem<string>;
  position_type: XmlElem<string>;
  target_position_name: XmlElem<string>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  readiness_date_start: XmlElem<Date>;
  readiness_date_finish: XmlElem<Date>;
  status: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentCareerReserveReportColumn>;
}

interface FuncParamsDocumentRecommenderUseReportRecommenderAlgorithm {
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
}

interface FuncParamsDocumentRecommenderUseReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentRecommenderUseReport {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  recommender_algorithms: XmlMultiElem<FuncParamsDocumentRecommenderUseReportRecommenderAlgorithm>;
  graph_type: XmlElem<string>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentRecommenderUseReportColumn>;
}

interface FuncParamsDocumentRecommenderCompareReportRecommenderAlgorithm {
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
}

interface FuncParamsDocumentRecommenderCompareReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
}

interface FuncParamsDocumentRecommenderCompareReport {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  recommender_algorithms: XmlMultiElem<FuncParamsDocumentRecommenderCompareReportRecommenderAlgorithm>;
  graph_type: XmlElem<string>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentRecommenderCompareReportColumn>;
}

interface FuncParamsDocumentRecommenderDetailReportRecommenderAlgorithm {
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
}

interface FuncParamsDocumentRecommenderDetailReportColumn {
  name: XmlElem<string>;
  const: XmlElem<string>;
  sort_field: XmlElem<string>;
}

interface FuncParamsDocumentRecommenderDetailReport {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  recommender_algorithms: XmlMultiElem<FuncParamsDocumentRecommenderDetailReportRecommenderAlgorithm>;
  graph_type: XmlElem<string>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  sort_type_id: XmlElem<string>;
  columns: XmlMultiElem<FuncParamsDocumentRecommenderDetailReportColumn>;
}

type FuncParamCatalogDocumentTopElem = XmlTopElem & {
  process_package: XmlElem<FuncParamsDocumentProcessPackage>;
  course_report: XmlElem<FuncParamsDocumentCourseReport>;
  competence_by_depart_report: XmlElem<FuncParamsDocumentCompetenceByDepartReport>;
  event_dep_report: XmlElem<FuncParamsDocumentEventDepReport>;
  budget_report: XmlElem<FuncParamsDocumentBudgetReport>;
  request_report: XmlElem<FuncParamsDocumentRequestReport>;
  server_log_report: XmlElem<FuncParamsDocumentServerLogReport>;
  education_method_report: XmlElem<FuncParamsDocumentEducationMethodReport>;
  view_event_by_depart_report: XmlElem<FuncParamsDocumentViewEventByDepartReport>;
  view_course_by_depart_report: XmlElem<FuncParamsDocumentViewCourseByDepartReport>;
  view_test_by_depart_report: XmlElem<FuncParamsDocumentViewTestByDepartReport>;
  budget_transfers_report: XmlElem<MsViewCatalogBase>;
  certificate_type_report: XmlElem<FuncParamsDocumentCertificateTypeReport>;
  test_report: XmlElem<FuncParamsDocumentTestReport>;
  view_question_by_depart_report: XmlElem<FuncParamsDocumentViewQuestionByDepartReport>;
  event_person_report: XmlElem<FuncParamsDocumentEventPersonReport>;
  profiling_report: XmlElem<FuncParamsDocumentProfilingReport>;
  learning_dynamics_report: XmlElem<FuncParamsDocumentLearningDynamicsReport>;
  learning_statistics_report: XmlElem<FuncParamsDocumentLearningStatisticsReport>;
  course_integral_efficiency_report: XmlElem<FuncParamsDocumentCourseIntegralEfficiencyReport>;
  questions_analytics_report: XmlElem<FuncParamsDocumentQuestionsAnalyticsReport>;
  statistic_report: XmlElem<FuncParamsDocumentStatisticReport>;
  course_comment_report: XmlElem<FuncParamsDocumentCourseCommentReport>;
  course_module_status_report: XmlElem<FuncParamsDocumentCourseModuleStatusReport>;
  career_reserve_report: XmlElem<FuncParamsDocumentCareerReserveReport>;
  recommender_use_report: XmlElem<FuncParamsDocumentRecommenderUseReport>;
  recommender_compare_report: XmlElem<FuncParamsDocumentRecommenderCompareReport>;
  recommender_detail_report: XmlElem<FuncParamsDocumentRecommenderDetailReport>;
  error_text: XmlElem<string>;
  error_const: XmlElem<string>;
  application: XmlElem<string>;
};


interface CommonRequestStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonEventStatusType {
  id: string;
  name: string;
  text_color: string;
  bk_color: string;
}

interface CommonLearningState {
  id: XmlElem<number>;
  name: XmlElem<string>;
  short_descriptor: XmlElem<string>;
  long_descriptor: XmlElem<string>;
  text_color: XmlElem<string>;
  lpe_color: XmlElem<string>;
}

interface CommonResourceType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  ext: XmlElem<string>;
  is_media: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
}

interface CommonExchangeObjectType {
  name: XmlElem<string>;
  disp_name: XmlElem<string>;
  title: XmlElem<string>;
  web_title: XmlElem<string>;
  web_template: XmlElem<string>;
  web_const: XmlElem<string>;
  is_hier: XmlElem<boolean>;
  is_custom: XmlElem<boolean>;
  form_url: XmlElem<string>;
  form_type: XmlElem<number>;
  max_records_num: XmlElem<number>;
  ft_index: XmlElem<boolean>;
}

interface CommonEducationLearningState {
  id: XmlElem<number>;
  name: XmlElem<string>;
  short_descriptor: XmlElem<string>;
  long_descriptor: XmlElem<string>;
  text_color: XmlElem<string>;
}

interface CommonCareerReserveStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonCareerReserveTasksType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLearningTaskStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICommon {
  education_learning_states: XmlMultiElem<CommonEducationLearningState>;
  learning_task_status_types: XmlMultiElem<CommonLearningTaskStatusType>;
  order_types: XmlMultiElem<IOrderType>;
  item_types: XmlMultiElem<IItemType>;
  grading_option_types: XmlMultiElem<IGradingOptionType>;
  sentence_option_types: XmlMultiElem<ISentenceOptionType>;
  player_types: XmlMultiElem<IPlayerType>;
  player_positions: XmlMultiElem<IPlayerPosition>;
  player_languages: XmlMultiElem<IPlayerLanguage>;
  player_send_types: XmlMultiElem<IPlayerSendType>;
  player_display_types: XmlMultiElem<IPlayerDisplayType>;
  player_rubric_display_types: XmlMultiElem<IPlayerRubricDisplayType>;
  learning_states: XmlMultiElem<ILearningState>;
  viewing_states: XmlMultiElem<IViewingState>;
  availability_states: XmlMultiElem<IAvailabilityState>;
  material_format_types: XmlMultiElem<IMaterialFormatType>;
  forum_smile_types: XmlMultiElem<IForumSmileType>;
  annals_item_types: XmlMultiElem<IAnnalsItemType>;
  passport_types: XmlMultiElem<IPassportType>;
  upload_types: XmlMultiElem<IUploadType>;
  exchange_object_types: XmlMultiElem<IExchangeObjectType>;
  annals_states: XmlMultiElem<IAnnalsState>;
  all_option_types: XmlMultiElem<IAllOptionType>;
  action_report_types: XmlMultiElem<IActionReportType>;
  action_status_types: XmlMultiElem<IActionStatusType>;
  package_types: XmlMultiElem<IPackageType>;
  position_types: XmlMultiElem<IPositionType>;
  request_status_types: XmlMultiElem<IRequestStatusType>;
  account_status_types: XmlMultiElem<IAccountStatusType>;
  event_status_types: XmlMultiElem<IEventStatusType>;
  event_types: XmlMultiElem<IEventType>;
  event_file_visibility_types: XmlMultiElem<IEventFileVisibilityType>;
  package_status_types: XmlMultiElem<IPackageStatusType>;
  field_name_types: XmlMultiElem<IFieldNameType>;
  field_types: XmlMultiElem<IFieldType>;
  spxml_types: XmlMultiElem<ISpxmlType>;
  lector_types: XmlMultiElem<ILectorType>;
  education_method_types: XmlMultiElem<IEducationMethodType>;
  template_field_types: XmlMultiElem<ITemplateFieldType>;
  server_agent_types: XmlMultiElem<IServerAgentType>;
  trigger_types: XmlMultiElem<ITriggerType>;
  access_block_types: XmlMultiElem<IAccessBlockType>;
  recipient_types: XmlMultiElem<IRecipientType>;
  cost_types: XmlMultiElem<ICostType>;
  web_filter_types: XmlMultiElem<IWebFilterType>;
  poll_types: XmlMultiElem<IPollType>;
  tenancy_limit_types: XmlMultiElem<ITenancyLimitType>;
  web_template_types: XmlMultiElem<IWebTemplateType>;
  discharge_types: XmlMultiElem<IDischargeType>;
  linking_views: XmlMultiElem<ILinkingView>;
  workflow_operation_types: XmlMultiElem<IWorkflowOperationType>;
  objectflow_condition_types: XmlMultiElem<IObjectflowConditionType>;
  objectflow_operation_types: XmlMultiElem<IObjectflowOperationType>;
  test_project_types: XmlMultiElem<ITestProjectType>;
  item_status_types: XmlMultiElem<IItemStatusType>;
  career_reserve_status_types: XmlMultiElem<ICareerReserveStatusType>;
  key_position_status_types: XmlMultiElem<IKeyPositionStatusType>;
  successor_status_types: XmlMultiElem<ISuccessorStatusType>;
  tutor_status_types: XmlMultiElem<ITutorStatusType>;
  personnel_reserve_status_types: XmlMultiElem<IPersonnelReserveStatusType>;
  personnel_reserve_task_status_types: XmlMultiElem<IPersonnelReserveTaskStatusType>;
  print_form_types: XmlMultiElem<IPrintFormType>;
  interaction_types: XmlMultiElem<IInteractionType>;
  objective_status_types: XmlMultiElem<IObjectiveStatusType>;
  objective_success_status_types: XmlMultiElem<IObjectiveSuccessStatusType>;
  week_day_types: XmlMultiElem<IWeekDayType>;
  contest_types: XmlMultiElem<IContestType>;
  contest_states: XmlMultiElem<IContestState>;
  contest_web_templates: XmlMultiElem<IContestWebTemplate>;
  course_test_states: XmlMultiElem<ICourseTestState>;
  kpi_types: XmlMultiElem<IKpiType>;
  kpi_calc_types: XmlMultiElem<IKpiCalcType>;
  assessment_appraise_participants: XmlMultiElem<IAssessmentAppraiseParticipant>;
  assessment_appraise_types: XmlMultiElem<IAssessmentAppraiseType>;
  assessment_appraise_parameters: XmlMultiElem<IAssessmentAppraiseParameter>;
  assessment_appraise_recommend_types: XmlMultiElem<IAssessmentAppraiseRecommendType>;
  assessment_appraise_statuses: XmlMultiElem<IAssessmentAppraiseStatuse>;
  charts: XmlMultiElem<IChart>;
  assessment_external_types: XmlMultiElem<IAssessmentExternalType>;
  assessment_stages: XmlMultiElem<IAssessmentStage>;
  knowledge_parts_objects: XmlMultiElem<IKnowledgePartsObject>;
  languages: XmlMultiElem<ILanguage>;
  language_levels: XmlMultiElem<ILanguageLevel>;
  educ_types: XmlMultiElem<IEducType>;
  expended_educ_types: XmlMultiElem<IExpendedEducType>;
  employment_types: XmlMultiElem<IEmploymentType>;
  professional_areas: XmlMultiElem<IProfessionalArea>;
  career_reserve_tasks_types: XmlMultiElem<ICareerReserveTasksType>;
  career_reserve_material_types: XmlMultiElem<ICareerReserveMaterialType>;
  career_reserve_type_tasks_types: XmlMultiElem<ICareerReserveTypeTasksType>;
  traning_order_states: XmlMultiElem<ITraningOrderState>;
  application_states: XmlMultiElem<IApplicationState>;
  server_run_modes: XmlMultiElem<IServerRunMode>;
  possible_storages: XmlMultiElem<IPossibleStorage>;
  oracle_db_types: XmlMultiElem<IOracleDBType>;
  server_settings: XmlMultiElem<IServerSetting>;
  system_event_operation_types: XmlMultiElem<ISystemEventOperationType>;
  forum_person_info_types: XmlMultiElem<IForumPersonInfoType>;
  participant_states: XmlMultiElem<IParticipantState>;
  perioditys: XmlMultiElem<IPeriodity>;
  submission_states: XmlMultiElem<ISubmissionState>;
  collect_states: XmlMultiElem<ICollectState>;
  node_types: XmlMultiElem<INodeType>;
  resource_types: XmlMultiElem<IResourceType>;
  qualification_assignment_states: XmlMultiElem<IQualificationAssignmentState>;
  content_items: XmlMultiElem<IContentItem>;
  covenant_status_types: XmlMultiElem<ICovenantStatusType>;
  course_expert_types: XmlMultiElem<ICourseExpertType>;
  active_notification_status_types: XmlMultiElem<IActiveNotificationStatusType>;
  cl_author_types: XmlMultiElem<IClAuthorType>;
  cl_states: XmlMultiElem<IClState>;
  cl_approval_states: XmlMultiElem<IClApprovalState>;
  operation_types: XmlMultiElem<IOperationType>;
  cwt_types: XmlMultiElem<ICwtType>;
  out_types: XmlMultiElem<IOutType>;
  xaml_interpreters: XmlMultiElem<IXAMLInterpreter>;
  period_calc_types: XmlMultiElem<IPeriodCalcType>;
  expert_eval_types: XmlMultiElem<IExpertEvalType>;
  vendor_status_types: XmlMultiElem<IVendorStatusType>;
  vacancy_response_status_types: XmlMultiElem<IVacancyResponseStatusType>;
  join_mode_types: XmlMultiElem<IJoinModeType>;
  eval_types: XmlMultiElem<IEvalType>;
  template_cache_types: XmlMultiElem<ITemplateCacheType>;
  budget_state_types: XmlMultiElem<IBudgetStateType>;
  status_in_knowledge_map_types: XmlMultiElem<IStatusInKnowledgeMapType>;
  stud_types: XmlMultiElem<IStudType>;
  student_states: XmlMultiElem<IStudentState>;
  stud_doc_types: XmlMultiElem<IStudDocType>;
  stud_group_states: XmlMultiElem<IStudGroupState>;
  work_types: XmlMultiElem<IWorkType>;
  lesson_states: XmlMultiElem<ILessonState>;
  stud_work_states: XmlMultiElem<IStudWorkState>;
  week_days: XmlMultiElem<IWeekDay>;
  periodicity_types: XmlMultiElem<IPeriodicityType>;
  registr_types: XmlMultiElem<IRegistrType>;
  academ_debt_states: XmlMultiElem<IAcademDebtState>;
  prog_discipl_states: XmlMultiElem<IProgDisciplState>;
  curriculum_types: XmlMultiElem<ICurriculumType>;
  type_marks: XmlMultiElem<ITypeMark>;
  social_avatar_priority_types: XmlMultiElem<ISocialAvatarPriorityType>;
  azure_role_size_types: XmlMultiElem<IAzureRoleSizeType>;
  encoding_types: XmlMultiElem<IEncodingType>;
  portal_types: XmlMultiElem<IPortalType>;
}

interface IAcademDebtState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAccessBlockType {
  id: XmlElem<string>;
  disp: XmlElem<string>;
}

interface IAccountStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IActionReportType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IActionStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IActiveNotificationStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAllOptionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  title: XmlElem<string>;
}

interface IAnnalsItemType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAnnalsState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IApplicationState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAssessmentAppraiseParameter {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAssessmentAppraiseParticipant {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAssessmentAppraiseRecommendType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAssessmentAppraiseStatuse {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAssessmentAppraiseType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAssessmentExternalType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAssessmentStage {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAvailabilityState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IAzureRoleSizeType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IBudgetStateType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICareerReserveMaterialType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICareerReserveStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICareerReserveTasksType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICareerReserveTypeTasksType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IChart {
  chart_id: XmlElem<string>;
  chart_name: XmlElem<string>;
  thickness: XmlElem<string>;
}

interface IClApprovalState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IClAuthorType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IClState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICollectState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IContentItem {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IContestState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IContestType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
}

interface IContestWebTemplate {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICostType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  short_name: XmlElem<string>;
}

interface ICourseExpertType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICourseTestState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICovenantStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICurriculumType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICwtType {
  id: XmlElem<string>;
}

interface IDischargeType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IEducType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IEducationMethodType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IEmploymentType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IEncodingType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IEvalType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IEventFileVisibilityType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IEventStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IEventType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IExchangeObjectType {
  name: XmlElem<string>;
  title: XmlElem<string>;
  form_type: XmlElem<string>;
  web_title?: XmlElem<string>;
}

interface IExpendedEducType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IExpertEvalType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IFieldNameType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IFieldType {
  name: XmlElem<string>;
}

interface IForumPersonInfoType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IForumSmileType {
  id: XmlElem<string>;
}

interface IGradingOptionType {
  id: XmlElem<string>;
}

interface IInteractionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IItemStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IItemType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IJoinModeType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IKeyPositionStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IKnowledgePartsObject {
  knowledge_parts_object_id: XmlElem<string>;
}

interface IKpiCalcType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IKpiType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ILanguageLevel {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ILanguage {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ILearningState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ILectorType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ILessonState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ILinkingView {
  name: XmlElem<string>;
  title: XmlElem<string>;
}

interface IMaterialFormatType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface INodeType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IObjectflowConditionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IObjectflowOperationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IObjectiveStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IObjectiveSuccessStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IOperationType {
  id: XmlElem<string>;
  type: XmlElem<string>;
}

interface IOracleDBType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IOrderType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IOutType {
  id: XmlElem<string>;
}

interface IPackageStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPackageType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IParticipantState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPassportType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPeriodCalcType {
  id: XmlElem<string>;
}

interface IPeriodicityType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPeriodity {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPersonnelReserveStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPersonnelReserveTaskStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPlayerDisplayType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPlayerLanguage {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPlayerPosition {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPlayerRubricDisplayType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPlayerSendType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPlayerType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPollType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPortalType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPositionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPossibleStorage {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IPrintFormType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IProfessionalArea {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IProgDisciplState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IQualificationAssignmentState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IRecipientType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  func_man: XmlElem<string>;
}

interface IRegistrType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IRequestStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IResourceType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ISentenceOptionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IServerAgentType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IServerRunMode {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IServerSetting {
  id: XmlElem<string>;
  user_name: XmlElem<string>;
}

interface ISocialAvatarPriorityType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ISpxmlType {
  id: XmlElem<string>;
}

interface IStatusInKnowledgeMapType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IStudDocType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IStudGroupState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IStudType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IStudWorkState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IStudentState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ISubmissionState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ISuccessorStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ISystemEventOperationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ITemplateCacheType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ITemplateFieldType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ITenancyLimitType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ITestProjectType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ITraningOrderState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ITriggerType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ITutorStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ITypeMark {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IUploadType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IVacancyResponseStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IVendorStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IViewingState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IWebFilterType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IWebTemplateType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IWeekDayType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IWeekDay {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IWorkType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IWorkflowOperationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface IXAMLInterpreter {
  id: XmlElem<string>;
}

declare const common: XmlElem<ICommon>;

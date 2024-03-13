interface CommonOrderType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonItemType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonGradingOptionType {
  id: XmlElem<string>;
  option_id: XmlElem<string>;
  qti_tag: XmlElem<string>;
}

interface CommonSentenceOptionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPlayerType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  archive_name: XmlElem<string>;
}

interface CommonPlayerPosition {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPlayerLanguage {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPlayerSendType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPlayerDisplayType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPlayerRubricDisplayType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLearningState {
  id: XmlElem<number>;
  name: XmlElem<string>;
  short_descriptor: XmlElem<string>;
  long_descriptor: XmlElem<string>;
  text_color: XmlElem<string>;
  lpe_color: XmlElem<string>;
}

interface CommonEducationLearningState {
  id: XmlElem<number>;
  name: XmlElem<string>;
  short_descriptor: XmlElem<string>;
  long_descriptor: XmlElem<string>;
  text_color: XmlElem<string>;
}

interface CommonViewingState {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonAvailabilityState {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonAcquaintState {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonAcquaintQuestionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  multiple: XmlElem<boolean>;
}

interface CommonObjectResourceState {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonMaterialFormatType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonForumSmileType {
  id: XmlElem<string>;
  url: XmlElem<string>;
}

interface CommonAnnalsItemType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  data_id: XmlElem<string>;
  item_id: XmlElem<string>;
}

interface CommonPassportType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonUploadType {
  id: XmlElem<string>;
  name: XmlElem<string>;
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

interface CommonAnnalsState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAllOptionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  title: XmlElem<string>;
  caption: XmlElem<string>;
}

interface CommonActionReportType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonActionStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPackageType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPositionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  mod_name: XmlElem<string>;
}

interface CommonRequestStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonResponseStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonClObjectGroup {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAccountStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonBlockMessageState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonProjectStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonPersonnelCommitteeStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonCommitteeMemberType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCommitteeMemberStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEventStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonEventResultStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonEventType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  is_std: XmlElem<boolean>;
}

interface CommonLearningTaskStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEventFileVisibilityType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPackageStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonContactStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonFieldNameType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonFieldType {
  name: XmlElem<string>;
}

interface CommonResultFieldType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonSpxmlType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLectorType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEducationMethodType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTemplateFieldType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  field_type: XmlElem<string>;
  icon: XmlElem<string>;
  has_entries: XmlElem<boolean>;
}

interface CommonServerAgentType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTriggerType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonRecipientType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  func_man: XmlElem<boolean>;
}

interface CommonCostType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  short_name: XmlElem<string>;
}

interface CommonWebFilterType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPollType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  multiple: XmlElem<boolean>;
  is_table: XmlElem<boolean>;
}

interface CommonWebTemplateType extends WebVariablesBase {
  id: XmlElem<string>;
  code(): unknown;
  name: XmlElem<string>;
  url: XmlElem<string>;
  mode: XmlElem<string>;
}

interface CommonDischargeType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  is_import: XmlElem<boolean>;
  source_name: XmlElem<string>;
}

interface CommonDischargeDbType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLinkingView {
  name: XmlElem<string>;
  catalog_name: XmlElem<string>;
  disp_name: XmlElem<string>;
  title: XmlElem<string>;
  view_url: XmlElem<string>;
}

interface CommonWorkflowOperationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonObjectflowConditionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  is_primary: XmlElem<boolean>;
}

interface CommonObjectflowOperationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTestProjectType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonItemStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonCareerReserveStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonKeyPositionStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonSuccessorStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonTutorStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonPersonnelReserveStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonPersonnelReserveTaskStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonPrintFormType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  content_type: XmlElem<string>;
  extension: XmlElem<string>;
}

interface CommonInteractionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonObjectiveStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  short_descriptor: XmlElem<string>;
}

interface CommonObjectiveSuccessStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  short_descriptor: XmlElem<string>;
}

interface CommonWeekDayType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  short_name: XmlElem<string>;
  index: XmlElem<number>;
}

interface CommonContestType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
}

interface CommonContestState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonContestWebTemplate {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLibrarySectionWebTemplate {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLibraryState {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface CommonCourseTestState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonKpiType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonKpiState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonKpiCalcType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAssessmentAppraiseParticipant {
  id: XmlElem<string>;
  name: XmlElem<string>;
  index: XmlElem<number>;
  usable: XmlElem<boolean>;
}

interface CommonAssessmentAppraiseType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  general: XmlElem<boolean>;
  index: XmlElem<number>;
}

interface CommonAssessmentAppraiseParameterStatus {
  status_id: XmlElem<string>;
}

interface CommonAssessmentAppraiseParameter {
  id: XmlElem<string>;
  name: XmlElem<string>;
  statuses: XmlMultiElem<CommonAssessmentAppraiseParameterStatus>;
}

interface CommonAssessmentAppraiseRecommendType {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface CommonAssessmentAppraiseStatus {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonIndicatorType {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface CommonSupplementaryQuestionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonChartChartSubtype {
  chart_subtype_id: XmlElem<string>;
}

interface CommonChart {
  chart_id: XmlElem<string>;
  chart_type: XmlElem<string>;
  chart_subtypes: XmlMultiElem<CommonChartChartSubtype>;
  chart_name: XmlElem<string>;
  icon: XmlElem<string>;
  xcolor: XmlElem<string>;
  xcolor2: XmlElem<string>;
  xoverlap: XmlElem<number>;
  xcolor_line: XmlElem<string>;
  flag_show_axis: XmlElem<boolean>;
  thickness: XmlElem<number>;
  flag_color_datapoints: XmlElem<boolean>;
  flag_right_angle_axes: XmlElem<boolean>;
  flag_foreign_caption: XmlElem<boolean>;
  flag_show_percent: XmlElem<boolean>;
}

interface CommonAssessmentExternalType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAssessmentStageAccess {
  allow_add: XmlElem<boolean>;
  allow_delete: XmlElem<boolean>;
  allow_plan_modify: XmlElem<boolean>;
  allow_mark_modify: XmlElem<boolean>;
}

interface CommonAssessmentStage {
  id: XmlElem<number>;
  name: XmlElem<string>;
  is_period_dependent: XmlElem<boolean>;
  access: XmlElem<CommonAssessmentStageAccess>;
}

interface CommonKnowledgePartsObject {
  knowledge_parts_object_id: XmlElem<string, typeof common.exchange_object_types>;
  form_url: XmlElem<string>;
  is_functional: XmlElem<boolean>;
}

interface CommonLanguage {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLanguageLevel {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface CommonEducTypesEduType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEducTypes {
  edu_type: XmlElem<CommonEducTypesEduType>;
}

interface CommonExpendedEducType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEmploymentKind {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonProfessionalArea {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCareerReserveTasksType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCareerReserveMaterialType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCareerReserveTypeTasksType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTraningOrderState {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonApplicationState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonServerRunMode {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPossibleStorage {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonOracleDbType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonServerSetting {
  id: XmlElem<string>;
  name: XmlElem<string>;
  user_name: XmlElem<string>;
  type: XmlElem<string>;
  passive_in_modes: XmlElem<string>;
  default_value: XmlElem<string>;
}

interface CommonSystemEventOperationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonForumPersonInfoType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonParticipantState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPeriodity {
  id: XmlElem<string>;
  name: XmlElem<string>;
  weight: XmlElem<number>;
}

interface CommonSubmissionState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCollectState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonNodeType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonResourceType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  ext: XmlElem<string>;
  is_media: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
}

interface CommonQualificationAssignmentState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonContentItem {
  id: XmlElem<string>;
  name: XmlElem<string>;
  html_page: XmlElem<string>;
  access_block: XmlElem<string, typeof common.access_block_types>;
}

interface CommonCovenantStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCourseExpertType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonActiveNotificationStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonClAuthorType {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface CommonClState {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface CommonClApprovalState {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface CommonOperationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<number>;
  operation_catalog: XmlElem<string>;
}

interface CommonCwtType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonOutType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonXamlInterpreter {
  id: XmlElem<string>;
  name: XmlElem<string>;
  url: XmlElem<string>;
}

interface CommonPeriodCalcType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonExpertEvalType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonVendorStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonVacancyResponseStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonJoinModeType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEvalType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTemplateCacheType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonBudgetStateType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonRecruitmentPlanStateType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonStatusInKnowledgeMapType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonStudType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonStudentState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonStudDocType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonStudGroupState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonWorkType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLessonState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonStudWorkState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonWeekDay {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface CommonPeriodicityType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonRegistrType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAcademDebtState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonProgDisciplState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCurriculumType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTypeMark {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonSocialAvatarPriorityType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAzureRoleSizeType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEncodingType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPortalType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonGraphType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAggregationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonDeliveryType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonGoodInstanceStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonOrderStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonOutstaffContractType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEstaffEventStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonAccessObjectType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEmploymentType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLearningDynamicsCategoryType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLearningStatisticsCategoryType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
}

interface CommonCoursePartType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  ico_url: XmlElem<string>;
}

interface CommonPositionAssignmentType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonDayType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonMonth {
  id: XmlElem<string>;
  name: XmlElem<string>;
  days: XmlElem<number>;
  quarter: XmlElem<number>;
}

interface CommonPollItemType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCareerTransitionDirectionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonOutstaffOrderExecutionStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonKeyboardType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonServiceProviderType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  with_date: XmlElem<boolean>;
}

interface CommonPaymentType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  is_can_received: XmlElem<boolean>;
}

interface CommonQualificationStatus {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEducationMethodState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLearningCatalog {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonVclassLearningCatalog {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonDocumentSentType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonProctoringObject {
  id: XmlElem<string>;
  icon_url: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLearningRecordStatus {
  id: XmlElem<string>;
  icon_url: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCourseImportType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTimezone {
  id: XmlElem<number>;
  direction: XmlElem<number>;
  tm: XmlElem<number>;
  name: XmlElem<string>;
}

interface CommonSubstitutionStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonWikiCommunicationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAgreementStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonConversationParticipantState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonMessageState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonConversationFormat {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonConversationVisibleType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAcquaintType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonMessageType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonChatbotOutType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCheckScheduleType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonProgressType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonDesignVscodeSaveType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonDesignVscodeAccessType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonViolationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  icon_url: XmlElem<string>;
}

interface CommonViolationState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonProctorState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonProctoringSessionState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonProhibitionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonConversationMessageState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonApplicationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonQaTestState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonQaTestType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonQaFixtureType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonQaTestResultCompletionState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonQaTestResultState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonQaTestAssertType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonQaTestAssertTemplateType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonBlogType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonWorkingConditionState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTariffRateType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonConversationObjectType {
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  is_fix_participants: XmlElem<boolean>;
  exclude_channel_participant: XmlElem<boolean>;
}

interface CommonKnowledgeAcquaintState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonKnowledgeAcquaintType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonConfirmationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonAcquaintConfirmationType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonConfirmationExpertType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonWillingnessTravelType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonStatementComponentProperty {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonSignatureType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPersonnelDocumentState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLayerType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonJobTransferType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPositionCommonStatus {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTypicalDevelopmentProgramStatus {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonFilterType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonGoodState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonWebPersonStateType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonWebsoftApp {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonUsageObjectType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonPerfomConditionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEvalCodeType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonMaterialLocation {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonReactionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonCreateTaskType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonEditTaskType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonViewTaskType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonTaskStatus {
  id: XmlElem<string>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonChatbotTileType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonChatbotActionType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonChatbotButtonType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonWorkspaceTheme {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonVideoFormat {
  id: XmlElem<string>;
  name: XmlElem<string>;
  width: XmlElem<number>;
  height: XmlElem<number>;
}

interface CommonSchedulerType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonWeekType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonProcessingMethod {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ICommon {
  order_types: XmlMultiElem<CommonOrderType>;
  item_types: XmlMultiElem<CommonItemType>;
  grading_option_types: XmlMultiElem<CommonGradingOptionType>;
  sentence_option_types: XmlMultiElem<CommonSentenceOptionType>;
  player_types: XmlMultiElem<CommonPlayerType>;
  player_positions: XmlMultiElem<CommonPlayerPosition>;
  player_languages: XmlMultiElem<CommonPlayerLanguage>;
  player_send_types: XmlMultiElem<CommonPlayerSendType>;
  player_display_types: XmlMultiElem<CommonPlayerDisplayType>;
  player_rubric_display_types: XmlMultiElem<CommonPlayerRubricDisplayType>;
  learning_states: XmlMultiElem<CommonLearningState>;
  education_learning_states: XmlMultiElem<CommonEducationLearningState>;
  viewing_states: XmlMultiElem<CommonViewingState>;
  availability_states: XmlMultiElem<CommonAvailabilityState>;
  acquaint_states: XmlMultiElem<CommonAcquaintState>;
  acquaint_question_types: XmlMultiElem<CommonAcquaintQuestionType>;
  object_resource_states: XmlMultiElem<CommonObjectResourceState>;
  material_format_types: XmlMultiElem<CommonMaterialFormatType>;
  forum_smile_types: XmlMultiElem<CommonForumSmileType>;
  annals_item_types: XmlMultiElem<CommonAnnalsItemType>;
  passport_types: XmlMultiElem<CommonPassportType>;
  upload_types: XmlMultiElem<CommonUploadType>;
  exchange_object_types: XmlMultiElem<CommonExchangeObjectType>;
  annals_states: XmlMultiElem<CommonAnnalsState>;
  all_option_types: XmlMultiElem<CommonAllOptionType>;
  action_report_types: XmlMultiElem<CommonActionReportType>;
  action_status_types: XmlMultiElem<CommonActionStatusType>;
  package_types: XmlMultiElem<CommonPackageType>;
  position_types: XmlMultiElem<CommonPositionType>;
  request_status_types: XmlMultiElem<CommonRequestStatusType>;
  response_status_types: XmlMultiElem<CommonResponseStatusType>;
  cl_object_groups: XmlMultiElem<CommonClObjectGroup>;
  account_status_types: XmlMultiElem<CommonAccountStatusType>;
  block_message_states: XmlMultiElem<CommonBlockMessageState>;
  project_status_types: XmlMultiElem<CommonProjectStatusType>;
  personnel_committee_status_types: XmlMultiElem<CommonPersonnelCommitteeStatusType>;
  committee_member_types: XmlMultiElem<CommonCommitteeMemberType>;
  committee_member_status_types: XmlMultiElem<CommonCommitteeMemberStatusType>;
  event_status_types: XmlMultiElem<CommonEventStatusType>;
  event_result_status_types: XmlMultiElem<CommonEventResultStatusType>;
  event_types: XmlMultiElem<CommonEventType>;
  learning_task_status_types: XmlMultiElem<CommonLearningTaskStatusType>;
  event_file_visibility_types: XmlMultiElem<CommonEventFileVisibilityType>;
  package_status_types: XmlMultiElem<CommonPackageStatusType>;
  contact_status_types: XmlMultiElem<CommonContactStatusType>;
  field_name_types: XmlMultiElem<CommonFieldNameType>;
  field_types: XmlMultiElem<CommonFieldType>;
  result_field_types: XmlMultiElem<CommonResultFieldType>;
  spxml_types: XmlMultiElem<CommonSpxmlType>;
  lector_types: XmlMultiElem<CommonLectorType>;
  education_method_types: XmlMultiElem<CommonEducationMethodType>;
  template_field_types: XmlMultiElem<CommonTemplateFieldType>;
  server_agent_types: XmlMultiElem<CommonServerAgentType>;
  trigger_types: XmlMultiElem<CommonTriggerType>;
  access_block_types: XmlMultiElem<AccessBlockBase>;
  recipient_types: XmlMultiElem<CommonRecipientType>;
  cost_types: XmlMultiElem<CommonCostType>;
  web_filter_types: XmlMultiElem<CommonWebFilterType>;
  poll_types: XmlMultiElem<CommonPollType>;
  web_template_types: XmlMultiElem<CommonWebTemplateType>;
  discharge_types: XmlMultiElem<CommonDischargeType>;
  discharge_db_types: XmlMultiElem<CommonDischargeDbType>;
  linking_views: XmlMultiElem<CommonLinkingView>;
  workflow_operation_types: XmlMultiElem<CommonWorkflowOperationType>;
  objectflow_condition_types: XmlMultiElem<CommonObjectflowConditionType>;
  objectflow_operation_types: XmlMultiElem<CommonObjectflowOperationType>;
  test_project_types: XmlMultiElem<CommonTestProjectType>;
  item_status_types: XmlMultiElem<CommonItemStatusType>;
  career_reserve_status_types: XmlMultiElem<CommonCareerReserveStatusType>;
  key_position_status_types: XmlMultiElem<CommonKeyPositionStatusType>;
  successor_status_types: XmlMultiElem<CommonSuccessorStatusType>;
  tutor_status_types: XmlMultiElem<CommonTutorStatusType>;
  personnel_reserve_status_types: XmlMultiElem<CommonPersonnelReserveStatusType>;
  personnel_reserve_task_status_types: XmlMultiElem<CommonPersonnelReserveTaskStatusType>;
  print_form_types: XmlMultiElem<CommonPrintFormType>;
  interaction_types: XmlMultiElem<CommonInteractionType>;
  objective_status_types: XmlMultiElem<CommonObjectiveStatusType>;
  objective_success_status_types: XmlMultiElem<CommonObjectiveSuccessStatusType>;
  week_day_types: XmlMultiElem<CommonWeekDayType>;
  contest_types: XmlMultiElem<CommonContestType>;
  contest_states: XmlMultiElem<CommonContestState>;
  contest_web_templates: XmlMultiElem<CommonContestWebTemplate>;
  library_section_web_templates: XmlMultiElem<CommonLibrarySectionWebTemplate>;
  library_states: XmlMultiElem<CommonLibraryState>;
  course_test_states: XmlMultiElem<CommonCourseTestState>;
  kpi_types: XmlMultiElem<CommonKpiType>;
  kpi_states: XmlMultiElem<CommonKpiState>;
  kpi_calc_types: XmlMultiElem<CommonKpiCalcType>;
  assessment_appraise_participants: XmlMultiElem<CommonAssessmentAppraiseParticipant>;
  assessment_appraise_types: XmlMultiElem<CommonAssessmentAppraiseType>;
  assessment_appraise_parameters: XmlMultiElem<CommonAssessmentAppraiseParameter>;
  assessment_appraise_recommend_types: XmlMultiElem<CommonAssessmentAppraiseRecommendType>;
  assessment_appraise_statuses: XmlMultiElem<CommonAssessmentAppraiseStatus>;
  indicator_types: XmlMultiElem<CommonIndicatorType>;
  supplementary_question_types: XmlMultiElem<CommonSupplementaryQuestionType>;
  charts: XmlMultiElem<CommonChart>;
  assessment_external_types: XmlMultiElem<CommonAssessmentExternalType>;
  assessment_stages: XmlMultiElem<CommonAssessmentStage>;
  knowledge_parts_objects: XmlMultiElem<CommonKnowledgePartsObject>;
  languages: XmlMultiElem<CommonLanguage>;
  language_levels: XmlMultiElem<CommonLanguageLevel>;
  educ_types: XmlElem<CommonEducTypes>;
  expended_educ_types: XmlMultiElem<CommonExpendedEducType>;
  employment_kinds: XmlMultiElem<CommonEmploymentKind>;
  professional_areas: XmlMultiElem<CommonProfessionalArea>;
  career_reserve_tasks_types: XmlMultiElem<CommonCareerReserveTasksType>;
  career_reserve_material_types: XmlMultiElem<CommonCareerReserveMaterialType>;
  career_reserve_type_tasks_types: XmlMultiElem<CommonCareerReserveTypeTasksType>;
  traning_order_states: XmlMultiElem<CommonTraningOrderState>;
  application_states: XmlMultiElem<CommonApplicationState>;
  server_run_modes: XmlMultiElem<CommonServerRunMode>;
  possible_storages: XmlMultiElem<CommonPossibleStorage>;
  oracle_db_types: XmlMultiElem<CommonOracleDbType>;
  server_settings: XmlMultiElem<CommonServerSetting>;
  system_event_operation_types: XmlMultiElem<CommonSystemEventOperationType>;
  forum_person_info_types: XmlMultiElem<CommonForumPersonInfoType>;
  participant_states: XmlMultiElem<CommonParticipantState>;
  perioditys: XmlMultiElem<CommonPeriodity>;
  submission_states: XmlMultiElem<CommonSubmissionState>;
  collect_states: XmlMultiElem<CommonCollectState>;
  node_types: XmlMultiElem<CommonNodeType>;
  resource_types: XmlMultiElem<CommonResourceType>;
  qualification_assignment_states: XmlMultiElem<CommonQualificationAssignmentState>;
  content_items: XmlMultiElem<CommonContentItem>;
  covenant_status_types: XmlMultiElem<CommonCovenantStatusType>;
  course_expert_types: XmlMultiElem<CommonCourseExpertType>;
  active_notification_status_types: XmlMultiElem<CommonActiveNotificationStatusType>;
  cl_author_types: XmlMultiElem<CommonClAuthorType>;
  cl_states: XmlMultiElem<CommonClState>;
  cl_approval_states: XmlMultiElem<CommonClApprovalState>;
  operation_types: XmlMultiElem<CommonOperationType>;
  cwt_types: XmlMultiElem<CommonCwtType>;
  out_types: XmlMultiElem<CommonOutType>;
  xaml_interpreters: XmlMultiElem<CommonXamlInterpreter>;
  period_calc_types: XmlMultiElem<CommonPeriodCalcType>;
  expert_eval_types: XmlMultiElem<CommonExpertEvalType>;
  vendor_status_types: XmlMultiElem<CommonVendorStatusType>;
  vacancy_response_status_types: XmlMultiElem<CommonVacancyResponseStatusType>;
  join_mode_types: XmlMultiElem<CommonJoinModeType>;
  eval_types: XmlMultiElem<CommonEvalType>;
  template_cache_types: XmlMultiElem<CommonTemplateCacheType>;
  budget_state_types: XmlMultiElem<CommonBudgetStateType>;
  recruitment_plan_state_types: XmlMultiElem<CommonRecruitmentPlanStateType>;
  status_in_knowledge_map_types: XmlMultiElem<CommonStatusInKnowledgeMapType>;
  stud_types: XmlMultiElem<CommonStudType>;
  student_states: XmlMultiElem<CommonStudentState>;
  stud_doc_types: XmlMultiElem<CommonStudDocType>;
  stud_group_states: XmlMultiElem<CommonStudGroupState>;
  work_types: XmlMultiElem<CommonWorkType>;
  lesson_states: XmlMultiElem<CommonLessonState>;
  stud_work_states: XmlMultiElem<CommonStudWorkState>;
  week_days: XmlMultiElem<CommonWeekDay>;
  periodicity_types: XmlMultiElem<CommonPeriodicityType>;
  registr_types: XmlMultiElem<CommonRegistrType>;
  academ_debt_states: XmlMultiElem<CommonAcademDebtState>;
  prog_discipl_states: XmlMultiElem<CommonProgDisciplState>;
  curriculum_types: XmlMultiElem<CommonCurriculumType>;
  type_marks: XmlMultiElem<CommonTypeMark>;
  social_avatar_priority_types: XmlMultiElem<CommonSocialAvatarPriorityType>;
  azure_role_size_types: XmlMultiElem<CommonAzureRoleSizeType>;
  encoding_types: XmlMultiElem<CommonEncodingType>;
  portal_types: XmlMultiElem<CommonPortalType>;
  graph_types: XmlMultiElem<CommonGraphType>;
  aggregation_types: XmlMultiElem<CommonAggregationType>;
  delivery_types: XmlMultiElem<CommonDeliveryType>;
  good_instance_status_types: XmlMultiElem<CommonGoodInstanceStatusType>;
  order_status_types: XmlMultiElem<CommonOrderStatusType>;
  outstaff_contract_types: XmlMultiElem<CommonOutstaffContractType>;
  estaff_event_status_types: XmlMultiElem<CommonEstaffEventStatusType>;
  access_object_types: XmlMultiElem<CommonAccessObjectType>;
  employment_types: XmlMultiElem<CommonEmploymentType>;
  learning_dynamics_category_types: XmlMultiElem<CommonLearningDynamicsCategoryType>;
  learning_statistics_category_types: XmlMultiElem<CommonLearningStatisticsCategoryType>;
  course_part_types: XmlMultiElem<CommonCoursePartType>;
  position_assignment_types: XmlMultiElem<CommonPositionAssignmentType>;
  day_types: XmlMultiElem<CommonDayType>;
  months: XmlMultiElem<CommonMonth>;
  poll_item_types: XmlMultiElem<CommonPollItemType>;
  career_transition_direction_types: XmlMultiElem<CommonCareerTransitionDirectionType>;
  outstaff_order_execution_status_types: XmlMultiElem<CommonOutstaffOrderExecutionStatusType>;
  keyboard_types: XmlMultiElem<CommonKeyboardType>;
  service_provider_types: XmlMultiElem<CommonServiceProviderType>;
  payment_types: XmlMultiElem<CommonPaymentType>;
  qualification_statuss: XmlMultiElem<CommonQualificationStatus>;
  education_method_states: XmlMultiElem<CommonEducationMethodState>;
  learning_catalogs: XmlMultiElem<CommonLearningCatalog>;
  vclass_learning_catalogs: XmlMultiElem<CommonVclassLearningCatalog>;
  document_sent_types: XmlMultiElem<CommonDocumentSentType>;
  proctoring_objects: XmlMultiElem<CommonProctoringObject>;
  learning_record_statuss: XmlMultiElem<CommonLearningRecordStatus>;
  course_import_types: XmlMultiElem<CommonCourseImportType>;
  timezones: XmlMultiElem<CommonTimezone>;
  substitution_status_types: XmlMultiElem<CommonSubstitutionStatusType>;
  wiki_communication_types: XmlMultiElem<CommonWikiCommunicationType>;
  agreement_status_types: XmlMultiElem<CommonAgreementStatusType>;
  conversation_participant_states: XmlMultiElem<CommonConversationParticipantState>;
  message_states: XmlMultiElem<CommonMessageState>;
  conversation_formats: XmlMultiElem<CommonConversationFormat>;
  conversation_visible_types: XmlMultiElem<CommonConversationVisibleType>;
  acquaint_types: XmlMultiElem<CommonAcquaintType>;
  message_types: XmlMultiElem<CommonMessageType>;
  chatbot_out_types: XmlMultiElem<CommonChatbotOutType>;
  check_schedule_types: XmlMultiElem<CommonCheckScheduleType>;
  progress_types: XmlMultiElem<CommonProgressType>;
  design_vscode_save_types: XmlMultiElem<CommonDesignVscodeSaveType>;
  design_vscode_access_types: XmlMultiElem<CommonDesignVscodeAccessType>;
  violation_types: XmlMultiElem<CommonViolationType>;
  violation_states: XmlMultiElem<CommonViolationState>;
  proctor_states: XmlMultiElem<CommonProctorState>;
  proctoring_session_states: XmlMultiElem<CommonProctoringSessionState>;
  prohibition_types: XmlMultiElem<CommonProhibitionType>;
  conversation_message_states: XmlMultiElem<CommonConversationMessageState>;
  application_types: XmlMultiElem<CommonApplicationType>;
  qa_test_states: XmlMultiElem<CommonQaTestState>;
  qa_test_types: XmlMultiElem<CommonQaTestType>;
  qa_fixture_types: XmlMultiElem<CommonQaFixtureType>;
  qa_test_result_completion_states: XmlMultiElem<CommonQaTestResultCompletionState>;
  qa_test_result_states: XmlMultiElem<CommonQaTestResultState>;
  qa_test_assert_types: XmlMultiElem<CommonQaTestAssertType>;
  qa_test_assert_template_types: XmlMultiElem<CommonQaTestAssertTemplateType>;
  blog_types: XmlMultiElem<CommonBlogType>;
  working_condition_states: XmlMultiElem<CommonWorkingConditionState>;
  tariff_rate_types: XmlMultiElem<CommonTariffRateType>;
  conversation_object_types: XmlMultiElem<CommonConversationObjectType>;
  knowledge_acquaint_states: XmlMultiElem<CommonKnowledgeAcquaintState>;
  knowledge_acquaint_types: XmlMultiElem<CommonKnowledgeAcquaintType>;
  confirmation_types: XmlMultiElem<CommonConfirmationType>;
  acquaint_confirmation_types: XmlMultiElem<CommonAcquaintConfirmationType>;
  confirmation_expert_types: XmlMultiElem<CommonConfirmationExpertType>;
  willingness_travel_types: XmlMultiElem<CommonWillingnessTravelType>;
  statement_component_propertys: XmlMultiElem<CommonStatementComponentProperty>;
  signature_types: XmlMultiElem<CommonSignatureType>;
  personnel_document_states: XmlMultiElem<CommonPersonnelDocumentState>;
  layer_types: XmlMultiElem<CommonLayerType>;
  job_transfer_types: XmlMultiElem<CommonJobTransferType>;
  position_common_statuss: XmlMultiElem<CommonPositionCommonStatus>;
  typical_development_program_statuss: XmlMultiElem<CommonTypicalDevelopmentProgramStatus>;
  filter_types: XmlMultiElem<CommonFilterType>;
  good_states: XmlMultiElem<CommonGoodState>;
  web_person_state_types: XmlMultiElem<CommonWebPersonStateType>;
  websoft_apps: XmlMultiElem<CommonWebsoftApp>;
  usage_object_types: XmlMultiElem<CommonUsageObjectType>;
  perfom_condition_types: XmlMultiElem<CommonPerfomConditionType>;
  eval_code_types: XmlMultiElem<CommonEvalCodeType>;
  material_locations: XmlMultiElem<CommonMaterialLocation>;
  reaction_types: XmlMultiElem<CommonReactionType>;
  create_task_types: XmlMultiElem<CommonCreateTaskType>;
  edit_task_types: XmlMultiElem<CommonEditTaskType>;
  view_task_types: XmlMultiElem<CommonViewTaskType>;
  task_statuses: XmlMultiElem<CommonTaskStatus>;
  chatbot_tile_types: XmlMultiElem<CommonChatbotTileType>;
  chatbot_action_types: XmlMultiElem<CommonChatbotActionType>;
  chatbot_button_types: XmlMultiElem<CommonChatbotButtonType>;
  workspace_themes: XmlMultiElem<CommonWorkspaceTheme>;
  video_formats: XmlMultiElem<CommonVideoFormat>;
  scheduler_types: XmlMultiElem<CommonSchedulerType>;
  week_types: XmlMultiElem<CommonWeekType>;
  processing_methods: XmlMultiElem<CommonProcessingMethod>;
}

declare const common: XmlElem<ICommon>;

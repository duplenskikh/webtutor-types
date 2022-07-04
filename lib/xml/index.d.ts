interface ObjectCodeNameBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTAdminAccessBase {
  user_access_role?: XmlElem<string>;
  user_group_id?: XmlElem<number>;
}

interface IWTVDialogEditTextTopElem {
  url?: XmlElem<string>;
  desc?: XmlElem<string>;
  title?: XmlElem<string>;
  is_rich?: XmlElem<boolean>;
}

type IWTVDialogEditTextDocument = IWTXmlDocument<IWTVDialogEditTextTopElem>;

interface IWTDialogNotificationTemplateRecipient {
  recipient_type?: XmElem<string>;
  func_manager_type_id?: XmElem<number>;
  eval_str?: XmElem<string>;
  eval_ids_str?: XmElem<string>;
  notification_template_id?: XmElem<number>;
}

interface IWTDialogNotificationTemplateAttachment {
  name?: XmElem<string>;
  data?: XmElem<string>;
}

interface IWTDialogNotificationTemplateTopElem {
  subject?: XmElem<string>;
  body?: XmElem<string>;
  body_type?: XmElem<string>;
  notification_template_id?: XmElem<number>;
  sender_selector?: XmElem<number>;
  sender_email?: XmElem<string>;
  recipients?: XmMultiElem<IWTDialogNotificationTemplateRecipient>;
  attachments?: XmMultiElem<IWTDialogNotificationTemplateAttachment>;
  notification_system_id?: XmElem<number>;
}

type IWTDialogNotificationTemplate = IWTXmlDocument<IWTDialogNotificationTemplateTopElem>;

interface IWTWebVariableBaseWvarEntry {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  catalog?: XmlElem<string>;
}

interface IWTWebVariableBaseWvar {
  name?: XmlElem<string>;
  parent_wvar_name?: XmlElem<string>;
  value?: XmlElem<string>;
  type?: XmlElem<string>;
  catalog?: XmlElem<string>;
  entries?: XmlMultiElem<IWTWebVariableBaseWvarEntry>;
  description?: XmlElem<string>;
  is_modify?: XmlElem<boolean>;
  position?: XmlElem<number>;
}

interface IWTWebVariablesBase {
  wvars?: XmlMultiElem<IWTWebVariableBaseWvar>;
  wvars_selector?: XmlElem<string>;
  wvars_num?: number;
}

interface IWTViewConditionBase {
  top_elem?: XmlElem<string>;
  field?: XmlElem<string>;
  title?: XmlElem<string>;
  value?: XmlElem<string>;
  type?: XmlElem<string>;
  option_type?: XmlElem<string>;
  is_custom_field?: XmlElem<boolean>;
  and_or?: XmlElem<string>;
  is_multiple?: XmlElem<boolean>;
  value_multiple?: XmlMultiElem<string>;
  bracket?: XmlElem<string>;
}

interface IWTViewConditionsBase {
  conditions?: XmlMultiElem<IWTViewConditionBase>;
  conditions_qual?: XmlElem<string>;
}

interface IWTLearningSection {
  id?: XmlElem<string>;
  title?: XmlElem<string>;
  score?: XmlElem<number>;
}

interface IWTSubdivisionGroupSubdivisions {
  subdivision_id?: XmlElem<number>;
  subdivision_name?: XmlElem<string>;
}

interface IWTOutstaffPeriodsBase {
  periods?: XmlMultiElem<any>;
  materials?: XmlMultiElem<any>;
}

interface IWTObjectCodeNameBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTSpxmlUnibridgeConfig {
  appSettings?: XmlMultiElem<XmlElem<any>>;
}

interface IWTSession extends Object {
  Env: IWTEnv;
  sid: number;
}

interface IWTResourceFileUrl {
  id?: XmlElem<string>;
  code?: XmlElem<string>;
  url?: XmlElem<string>;
}
interface IWTResourceLink {
  object_id?: XmlElem<number>;
  object_catalog?: XmlElem<string>;
  object_name?: XmlElem<string>;
  date_modify?: XmlElem<Date>;
}

interface IWTConditionsBase {
  conditions?: XmlMultiElem<IWTConditionsBase>;
  condition_eval_str?: XmlElem<string>;
  desc_str?: XmlElem<string>;
  has_error?: XmlElem<boolean>;
  warning_str?: XmlElem<string>;
  error_str?: XmlElem<string>;
  is_false?: XmlElem<boolean>;
  error_eval?(): void;
}

interface IWTWorkflowFieldsStatesBaseWorkflowFieldEntry {
  value?: XmlElem<any>;
}
interface IWTWorkflowFieldsStatesBaseWorkflowField {
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  catalog?: XmlElem<string>;
  title?: XmlElem<string>;
  tooltip?: XmlElem<string>;
  xquery_qual?: XmlElem<string>;
  entries?: XmlMultiElem<IWTWorkflowFieldsStatesBaseWorkflowFieldEntry>;
  external_value?: XmlElem<string>;
  external_array?: XmlElem<string>;
  field_group_id?: XmlElem<string>;
  is_required?: XmlElem<boolean>;
}

interface IWTWorkflowFieldsStatesBaseState {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  duration?: XmlElem<number>;
  parameters?: XmlElem<string>;
}

interface IWTWorkflowFieldsStatesBase {
  workflow_fields?: XmlMultiElem<IWTWorkflowFieldsStatesBaseWorkflowField>;
  states?: XmlMultiElem<IWTWorkflowFieldsStatesBaseState>;
}

interface IWTWorkflowFieldGroup {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  read_conditions?: IWTConditionsBase;
  write_conditions?: IWTConditionsBase;
}

interface IWTWorkflowElemOperationBase {
  type?: XmlElem<string>;
  workflow_state_id?: XmlElem<string>;
  workflow_field_id?: XmlElem<string>;
  workflow_field_value?: XmlElem<string>;
  request_status_id?: XmlElem<string>;
  eval_str?: XmlElem<string>;
  notification_id?: XmlElem<number>;
  print_form_id?: XmlElem<number>;
}

interface IWTWorkflowElemOperationsBase {
  operations?: XmlMultiElem<IWTWorkflowElemOperationBase>;
}

interface IWTWorkflowAction extends IWTWorkflowElemOperationsBase,
  IWTConditionsBase,
  IWTWorkflowElemOperationsBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_trigger?: XmlElem<boolean>;
}

interface IWTWorkflowEscalationCourse {
  course_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface IWTWorkflowEscalationAssessment {
  assessment_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface IWTWorkflowEscalationPoll {
  poll_id?: XmlElem<number>;
  status?: XmlElem<number>;
}

interface IWTWorkflowEscalation extends IWTWorkflowElemOperationBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  workflow_state_id?: XmlElem<string>;
  auto_escalation?: XmlElem<boolean>;
  auto_escalation_by_end_date?: XmlElem<boolean>;
  auto_escalation_days?: XmlElem<number>;
  auto_escalation_repeat?: XmlElem<boolean>;
  escalation_eval_str?: XmlElem<string>;
  escalation_eval_negative?: XmlElem<boolean>;
  courses?: XmlMultiElem<IWTWorkflowEscalationCourse>;
  assessments?: XmlMultiElem<IWTWorkflowEscalationAssessment>;
  polls?: XmlMultiElem<IWTWorkflowEscalationPoll>;
}

interface IWTWorkflowTuneFieldTuneFieldChain {
  name?: XmlElem<string>;
  path?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  type?: XmlElem<string>;
  is_multiple?: XmlElem<boolean>;
  pk?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTWorkflowTuneField {
  tune_field_chain: XmlMultiElem<IWTWorkflowTuneFieldTuneFieldChain>;
}

interface IWTRemoteSecutiryProfileMethodAccess {
  access_block_id?: XmlElem<string>;
  library_profile?: XmlElem<string>;
}


interface IWTRemoteApplicationCredential {
  id?: XmlElem<number>;
}

interface IWTQualificationAssignmentLearning {
  learning_id?: XmlElem<number>;
}

interface IWTQualificationAssignmentTestLearning {
  test_learning_id?: XmlElem<number>;
}

interface IWTQualificationAssignmentEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface IWTPersonNameBase {
  lastname?: XmlElem<string>;
  firstname?: XmlElem<string>;
  middlename?: XmlElem<string>;
  fullname?(): string;
  shortname?(): string;
}

interface IWTPersonBase extends IWTPersonNameBase {
  sex?: XmlElem<string>;
  birth_date?: XmlElem<Date>;
  address?: XmlElem<string>;
  phone?: XmlElem<string>;
  mobile_phone?: XmlElem<string>;
  mobile_phone_conf_code?: XmlElem<string>;
  mobile_phone_conf_date?: XmlElem<Date>;
  mobile_phone_conf?: XmlElem<boolean>;
  email?: XmlElem<string>;
  email_conf_code?: XmlElem<string>;
  email_conf_date?: XmlElem<Date>;
  email_conf?: XmlElem<boolean>;
  system_email?: XmlElem<string>;
  login?: XmlElem<string>;
  password?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTPassportDataBase {
  passport_type_id?: XmlElem<string>;
  series?: XmlElem<string>;
  num?: XmlElem<string>;
  registration_date?: XmlElem<Date>;
  registration_agency?: XmlElem<string>;
}

declare namespace ms_tools {
  function raise_system_event_env(systemEventIdentificator: string | number, params: any): void;
}

interface IWTMSDialogObjectSelectTopElem {
  object_id?: XmlElem<number>;
  object_str?: XmlElem<string>;
  object_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  multi_select?: XmlElem<boolean>;
  dialog_title?: XmlElem<string>;
  values?: XmlMultiElem<{
    key?: XmlElem<number>;
    key_str?: XmlElem<string>;
    key_name?: XmlElem<string>;
    org_id?: XmlElem<number>;
  }>;
  catalog_name?: XmlElem<string>;
  xquery_qual?: XmlElem<string>;
}

type IWTMSDialogObjectSelectDocument = IWTXmlDocument<IWTMSDialogObjectSelectTopElem>;

interface IWTWTVDlgEditTextTopElem {
  url?: XmlElem<string>;
  desc?: XmlElem<string>;
  title?: XmlElem<string>;
  is_rich?: XmlElem<boolean>;
}

type IWTWTVDlgEditTextDocument = IWTXmlDocument<IWTWTVDlgEditTextTopElem>;

interface IWTMenu {
  name?: XmlElem<string>;
}

interface IWTListsObjectResourceType {
  id: string;
  name: string;
}

interface IWTListsCurrencyTypeModName {
  id: number;
  name: string;
  cent_name: string;
}

interface IWTListsCurrencyType {
  id: string;
  name: string;
  short_name: string;
  cent_name: string;
  mod_names: XmlMultiElem<IWTListsCurrencyTypeModName>;
}

interface IWTListsEventForm {
  id: string;
  name: string;
}

interface IWTListsOrganizationalForm {
  id: string;
  name: string;
}

interface IWTListsFactColumn {
  id: string;
  name: string;
  query_name: string;
  title: string;
}

interface IWTListsFactExtraColumn {
  id: number;
  name: string;
  title: string;
}

interface IWTListsFact {
  id: number;
  name: string;
  type: number;
  catalog: string;
  columns: XmlMultiElem<IWTListsFactColumn>;
  extra_columns: XmlMultiElem<IWTListsFactExtraColumn>;
}

interface IWTListsProfessionalArea {
  id: string;
  name: string;
}

interface IWTListsWebRequirement {
  id: string;
  name: string;
  is_std: boolean;
}

interface IWTListsExternalScript {
  id: string;
  source_url: string;
}

interface IWTLibraryMaterialFormat {
  library_material_format_id?: XmlElem<number>;
  number?: XmlElem<number>;
}

interface IWTLibraryMaterialGroup {
  group_id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface IWTLibraryMaterialSubscribedPerson {
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
}

interface IWTLibraryMaterialPathSection {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}



interface IWTLearningTaskExpert extends IWTPersonFillingBase {
  id?: XmlElem<string>;
}

type IWTLectorTypes = "invitee" | "collaborator";

interface IWTObjectiveBaseScore {
  raw?: XmlElem<number>;
  max?: XmlElem<number>;
  min?: XmlElem<number>;
  scaled?: XmlElem<number>;
}

interface IWTObjectiveBase {
  objective_id?: XmlElem<string>;
  score?: XmlElem<IWTObjectiveBaseScore>;
  status?: XmlElem<string>;
  completion_status?: XmlElem<string>;
  success_status?: XmlElem<string>;
  description?: XmlElem<string>;
}

type IWTLearningObjectivesInteractionsBaseObjective = IWTObjectiveBase;

interface IWTInteractionBaseObjective {
  objective_id?: XmlElem<string>;
}

interface IWTInteractionBaseCorrectResponse {
  pattern?: XmlElem<string>;
}
interface IWTInteractionBase {
  interaction_id?: XmlElem<string>;
  time?: XmlElem<string>;
  objectives?: XmlMultiElem<IWTInteractionBaseObjective>;
  type_interaction?: XmlElem<string>;
  correct_responses?: XmlMultiElem<IWTInteractionBaseCorrectResponse>;
  student_response?: XmlElem<string>;
  result?: XmlElem<string>;
  weighting?: XmlElem<string>;
  latency?: XmlElem<string>;
  description?: XmlElem<string>;
}

type IWTLearningObjectivesInteractionsBaseInteraction = IWTInteractionBase;

interface IWTLearningObjectivesInteractionsBase {
  objectives?: XmlMultiElem<IWTLearningObjectivesInteractionsBaseObjective>;
  interactions?: XmlMultiElem<IWTLearningObjectivesInteractionsBaseInteraction>;
  scoring_type?: XmlElem<string>;
}

interface IWTLearningPartBaseLog {
  date?: XmlElem<Date>;
  location?: XmlElem<string>;
  type?: XmlElem<string>;
  text?: XmlElem<string>;
  log?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTLearningPartBaseStatement {
  statement_id?: XmlElem<number>;
  activity_state_id?: XmlElem<number>;
  score?: XmlElem<number>;
}

interface IWTLearningPartBase extends IWTCoreLessonInfoBase,
  IWTCoreLessonBase,
  IWTLearningObjectivesInteractionsBase,
  IWTLearningAssessmentBase,
  IWTLastAttemptTestLearningsBaseTestLearning {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  cl_module_protocol?: XmlElem<string>;
  parent_part_code?: XmlElem<string>;
  course_module_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
  lesson_location?: XmlElem<string>;
  score?: XmlElem<number>;
  score_str?: XmlElem<string>;
  start_usage_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
  time?: XmlElem<number>;
  max_score?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  cur_attempt_num?: XmlElem<number>;
  use_proctoring?: XmlElem<boolean>;
  logs?: XmlMultiElem<IWTLearningPartBaseLog>
  statements?: XmlMultiElem<IWTLearningPartBaseStatement>;
}

interface IWTLearningCurrentStateBase {
  cur_score?: XmlElem<number>;
  cur_score_str?: XmlElem<string>;
  cur_state_id?: XmlElem<number>;
}

interface IWTLearningAssessmentBase extends IWTAnnalsObjectsBase {
  assessment_id?: XmlElem<number>;
  assessment_name?: XmlElem<string>;
  assessment_code?: XmlElem<string>;
  qti_text?: XmlElem<string>;
  qti_date?: XmlElem<Date>;
  expert_eval?: XmlElem<boolean>;
  adaptive_eval?: XmlElem<boolean>;
  is_self_enrolled?: XmlElem<boolean>;
}

interface IWTLastAttemptTestLearningsBaseTestLearning {
  test_learning_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
  score?: XmlElem<number>;
  start_usage_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
}

interface IWTLastAttemptTestLearningsBase {
  test_learnings?: XmlMultiElem<IWTLastAttemptTestLearningsBaseTestLearning>;
}

interface IWTKnowledgePartsBaseTag {
  tag_id: XmlElem<number>;
  tag_name: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface IWTKnowledgePartsBaseExpert {
  expert_id: XmlElem<number>;
}

interface IWTKnowledgePartsBaseKnowledgePart {
  knowledge_part_id: XmlElem<number>;
  knowledge_part_name: XmlElem<string>;
  knowledge_part_level_id: XmlElem<number>;
  full_path: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface IWTKnowledgePartsFieldsBase {
  knowledge_parts?: XmlMultiElem<IWTKnowledgePartsBaseKnowledgePart>;
}

interface IWTKnowledgePartsBase extends IWTKnowledgePartsFieldsBase {
  tags?: XmlMultiElem<IWTKnowledgePartsBaseTag>;
  experts?: XmlMultiElem<IWTKnowledgePartsBaseExpert>;
  acquaint_time?: XmlElem<number>;
  previous_version_object_id?: XmlElem<number>;
  status_in_knowledge_map?: XmlElem<string>;
  kp_start_date?: XmlElem<Date>;
  kp_end_date?: XmlElem<Date>;
  view_knowledge_classifier_id?: XmlElem<number>;
}

interface IWTKnowledgePartsBaseOld {
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
}

interface IWTPersonForeignBase {
  person_fullname?(): any;
  person_position_name?(): any;
  person_org_name?(): any;
  person_subdivision_name?(): any;
  person_instance_id?(): any;
  person_code?(): any;
}

interface IWTGroupCollaborator extends IWTPersonForeignBase {
  collaborator_id?: XmlElem<number>;
  collaborator_fullname?: XmlElem<string>;
  desc?: XmlElem<string>;
}

interface IWTRequirementsBase {
  requirements?: XmlMultiElem<any>;
  certificate_types?: XmlMultiElem<any>;
  compound_programs?: XmlMultiElem<any>;
  education_methods?: XmlMultiElem<any>;
  obligatory_education_amount?: XmlElem<number>;
  education_period?: XmlElem<number>;
  typical_development_programs?: XmlMultiElem<any>;
  qualifications?: XmlMultiElem<any>;
  assessments?: XmlMultiElem<any>;
  recomended_library_materials?: XmlMultiElem<any>;
  professional_areas?: XmlMultiElem<any>;
  educ_type_id?: XmlElem<string>;
  education_type_id?: XmlElem<number>;
  age_min?: XmlElem<number>;
  age_max?: XmlElem<number>;
  experience_in_company?: XmlElem<number>;
  experience_in_current_position?: XmlElem<number>;
}

interface IWTEducGroupsBaseEducGroup {
  group_id?: XmlElem<string>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  place_id?: XmlElem<number>;
  conversation_id?: XmlElem<number>;
  collaborators?: XmlMultiElem<any>;
  lectors?: XmlMultiElem<any>;
}

interface IWTEducGroupsBase {
  educ_groups?: XmlMultiElem<IWTEducGroupsBaseEducGroup>;
}

interface IWTGameBonusBaseGameBonus {
  id?: XmlElem<string>;
  currency_type_id?: XmlElem<string>;
  sum?: XmlElem<number>;
}

interface IWTGameBonusBase {
  game_bonuss?: XmlMultiElem<IWTGameBonusBaseGameBonus>;
}

interface IWTFileBase {
  file_id?: XmlElem<number>;
}

interface IWTFileListBase {
  files?: XmlMultiElem<IWTFileBase>;
  AddFile?(_file_id: number, docResourceParam: IWTResourceDocument): boolean;
}

interface IWTFieldNamesBaseFieldName extends IWTFieldNamesBase {
  level?: XmlElem<number>;
  field_names?: XmlMultiElem<IWTFieldNamesBaseFieldName>;
}

interface IWTFieldNamesBase {
  field_names?: XmlMultiElem<IWTFieldNamesBaseFieldName>;
}

interface IWTEventPhaseCollaborator {
  collaborator_id: XmlElem<number>;
  is_assist: XmlElem<boolean>;
}

interface IWTEventPhase {
  id: XmlElem<string>;
  lector_id: XmlElem<number>;
  object_resource_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  comment: XmlElem<string>;
  reserve_desc: XmlElem<string>;
  collaborators: XmlMultiElem<IWTEventPhaseCollaborator>;
}

interface IWTEventLector {
  lector_id: XmlElem<number>;
}

interface IWTEventSettingsBase {
  event_settings?: {
    send_type?: XmlElem<string>;
    send_collaborators?: XmlElem<boolean>;
    send_bosses?: XmlElem<boolean>;
    send_lectors?: XmlElem<boolean>;
    send_tutors?: XmlElem<boolean>;
    send_event_preparations?: XmlElem<boolean>;
    show_result_fields?: XmlElem<boolean>;
  }
}

interface IWTCatalogListBaseCatalog {
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  all?: XmlElem<boolean>;
  objects?: XmlMultiElem<IWTCatalogListBaseCatalogObject>;
}

interface IWTCatalogListBase {
  catalogs?: XmlMultiElem<IWTCatalogListBaseCatalog>;
  catalogs_catalog_type?: XmlElem<string>;
  catalogs_sel_all_objects?: XmlElem<boolean>;
}

interface IWTEnv {
  /**
   * Текущий сайт пользователя с которым он взаимодействует
   */
  curSite: IWTSiteDocument;
  /**
   * ID текущего пользователя
   */
  curUserID: number;
  /**
   * Объект пользователя
   */
  curUser: IWTCollaboratorTopElem;
}

interface IWTEducationPlanProgramLearningTask {
  learning_task_id?: XmlElem<number>;
}

interface IWTEducationPlanProgramAssessment {
  assessment_id?: XmlElem<number>;
}

interface IWTEducationPlanNotification {
  notification_template_id?: XmlElem<number>
  subject?: XmlElem<string>
  body?: XmlElem<string>
  body_type?: XmlElem<string>
  edit_notification?: XmlElem<boolean>
}

interface IWTEducationPlanCompletedParentProgram {
  program_id?: XmlElem<number>;
}

interface IWTEducationPlanProgramResult {
  person_id?: XmlElem<number>
  type?: XmlElem<string>
  date?: XmlElem<Date>
}

interface IWTEducationPlanProgram {
  id?: XmlElem<number>
  name?: XmlElem<string>
  parent_progpam_id?: XmlElem<number>
  education_method_id?: XmlElem<number>
  education_program_id?: XmlElem<number>
  start_learning_tasks?: XmlMultiElem<IWTEducationPlanProgramLearningTask>;
  start_assessments?: XmlMultiElem<IWTEducationPlanProgramAssessment>;
  finish_learning_tasks?: XmlMultiElem<IWTEducationPlanProgramLearningTask>;
  finish_assessments?: XmlMultiElem<IWTEducationPlanProgramAssessment>;
  finish_notifiation?: IWTEducationPlanNotification;
  start_notifiation?: IWTEducationPlanNotification;
  type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  catalog_name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
  delay_days?: XmlElem<number>;
  days?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  plan_date?: XmlElem<Date>;
  result_type?: XmlElem<string>
  result_object_id?: XmlElem<number>
  result_object_name?: XmlElem<string>
  result_object_code?: XmlElem<string>
  result_object_start_date?: XmlElem<Date>
  result_object_finish_date?: XmlElem<Date>
  state_id?: XmlElem<number>;
  tutor_id?: XmlElem<number>;
  weight?: XmlElem<number>;
  readiness_percent?: XmlElem<number>;
  start_type?: XmlElem<string>;
  mark?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  learning_id?: XmlElem<number>;
  request_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  required?: XmlElem<boolean>;
  completed_parent_programs?: XmlMultiElem<IWTEducationPlanCompletedParentProgram>;
  program_results?: XmlMultiElem<IWTEducationPlanProgramResult>;
}

interface IWTDotnetCoreHost {
  Object?: {
    GetAssembly(libName: string): {
      CallClassStaticMethod(className: string, methodName: string, arguments: XmlMultiElem<any>, single?: boolean, wait?: boolean, max_run_time?: number): any;
      CreateClassObject(classObject: string): any;
    };
  };
}

interface IWTDocumentAttributesBase {
  template?: XmlElem<string>;
  position?: XmlElem<number>;
  is_link?: XmlElem<boolean>;
  link_href?: XmlElem<string>;
  link_target?: XmlElem<string>;
  permit_subscription?: XmlElem<boolean>;
}

interface IWTDocumentAttribute extends IWTDocumentAttributesBase {
  is_menu?: XmlElem<boolean>;
  is_main_item?: XmlElem<boolean>;
  is_news?: XmlElem<boolean>;
  left_disp_childs?: XmlElem<boolean>;
  no_disp_childs?: XmlElem<boolean>;
}

interface IWTAccessDocBase {
  enable_anonymous_access?: XmlElem<boolean>;
  access_level?: XmlElem<number>;
  access_roles?: XmlMultiElem<{
    access_role_id?: XmlElem<string>;
  }>;
  access_groups?: XmlMultiElem<{
    group_id?: XmlElem<number>;
  }>;
  access?: IWTViewConditionsBase;
  access_org_id?: XmlElem<number>;
  access_site_id?: XmlElem<number>;
  access_host_id?: XmlElem<number>;
  web_mode_id?: XmlElem<number>;
  operator?: XmlElem<string>;
}

interface IWTDocumentPersonsBasePerson {
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  can_create?: XmlElem<boolean>;
  can_edit?: XmlElem<boolean>;
  can_delete?: XmlElem<boolean>;
}

interface IWTDocumentPersonsBase {
  document_persons?: XmlMultiElem<IWTDocumentPersonsBasePerson>;
}

interface IWTDocInfoCreation {
  user_login?: XmlElem<string>;
  user_id?: XmlElem<number>;
  date?: XmlElem<Date>;
  app_instance_id?: XmlElem<string>;
}

interface IWTDocInfoModification {
  user_login?: XmlElem<string>;
  user_id?: XmlElem<number>;
  date?: XmlElem<Date>;
}

interface IWTDocInfoBase {
  creation?: XmlElem<IWTDocInfoCreation>;
  modification?: XmlElem<IWTDocInfoModification>;
  invariable?: XmlElem<boolean>;
}

interface IWTDocInfo {
  creation?: XmlElem<IWTDocInfoCreation>;
  modification?: XmlElem<IWTDocInfoModification>;
  invariable?: XmlElem<boolean>;
}

interface IWTCustomReportBaseAggregation {
  aggregate_function?: XmlElem<string>;
  aggregate_column?: XmlElem<number>;
  flag_graph?: XmlElem<boolean>;
  aggregate_secondary: {
    option_type?: XmlElem<string>;
    column_value?: XmlElem<string>;
  }
}

interface IWTCustomReportBase extends IWTCriterionBase, IWTColumnBase, IWTChartReportGraphBase {
  object_name_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  flag_open_param_tun_section?: XmlElem<boolean>;
  flag_custom_x?: XmlElem<boolean>;
  custom_x?: XmlElem<string>;
  show_table?: XmlElem<boolean>;
  show_chart?: XmlElem<boolean>;
  get_report_data?(iReportID_PARAM: number, iUserID_PARAM: number): any;
  report_result_date?: XmlElem<Date>;
  report_result_author?: XmlElem<string>;
  performance_launch_time?: XmlElem<Date>;
  performance_search_time?: XmlElem<Date>;
  performance_process_time?: XmlElem<Date>;
  categorize?: XmlElem<boolean>;
  categorize_view?: XmlElem<string>;
  categorize_hide_details?: XmlElem<boolean>;
  aggregations?: XmlMultiElem<IWTCustomReportBaseAggregation>;
  show_total?: XmlElem<boolean>;
  integrated_criterion_field?: XmlElem<string>;
  integrated_criterion_field_is_custom?: XmlElem<boolean>;
  integrated_criterion_value?: XmlElem<string>;
}

interface IWTCustomElemsBaseCustomElem {
  name?: XmlElem<string>;
  value?: XmlElem<any>;
}

interface IWTCustomElemsBaseCustomReportFiction extends IWTCustomReportBase {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface IWTCustomElemsBase {
  custom_elems?: XmlMultiElem<IWTCustomElemsBaseCustomElem>;
  custom_report_fictions?: XmlMultiElem<IWTCustomElemsBaseCustomReportFiction>;
}

interface IWTCriterionBaseCriterionCatalogChain extends IWTViewConditionsBase, IWTFieldNamesBase {
  catalog_name?: XmlElem<string>;
  field?: XmlElem<string>;
  scheme_id?: XmlElem<string>;
}

interface IWTCriterionBaseCriterion {
  value?: XmlElem<string>;
  column_title?: XmlElem<string>;
  type?: XmlElem<string>;
  option_type?: XmlElem<string>;
  and_or?: XmlElem<string>;
  is_custom_field?: XmlElem<boolean>;
  catalog_chains?: XmlMultiElem<IWTCriterionBaseCriterionCatalogChain>;
  flag_value_filter?: XmlElem<boolean>;
  flag_is_parameter?: XmlElem<boolean>;
  flag_hierarchy?: XmlElem<number>;
  flag_active?: XmlElem<boolean>;
  open_bracket?: XmlElem<string>;
  close_bracket?: XmlElem<string>;
}

interface IWTCriterionBase extends IWTFieldNamesBase {
  criterions: XmlMultiElem<IWTCriterionBaseCriterion>;
}

interface IWTCoursePartActivityState {
  activity_state_id?: XmlElem<number>;
  score?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface IWTCoursePart {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  max_score?: XmlElem<number>;
  mastery_score?: XmlElem<number>;
  mastery_score_relative?: XmlElem<number>;
  url?: XmlElem<string>;
  course_module_id?: XmlElem<number>;
  parent_part_code?: XmlElem<string>;
  desc?: XmlElem<string>;
  win_width?: XmlElem<number>;
  win_height?: XmlElem<number>;
  disp_scrolling?: XmlElem<boolean>;
  resizable?: XmlElem<boolean>;
  is_mandatory?: XmlElem<boolean>;
  is_visible?: XmlElem<boolean>;
  max_time_allowed?: XmlElem<string>;
  time_limit_action?: XmlElem<string>;
  set_status_side?: XmlElem<string>;
  score_factor?: XmlElem<number>;
  assessment_id?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  start_day?: XmlElem<number>;
  duration_day?: XmlElem<number>;
  activity_id?: XmlElem<number>;
  activity_state: XmlMultiElem<IWTCoursePart>;
  object_id?: XmlElem<number>;
  cl_module_view?: XmlElem<string>;
}

interface IWTPersonExpert {
  person_id?: number;
  type?: string;
}

interface IWTCourseSettingsBase {
  settings?: {
    open_single_module?: XmlElem<boolean>;
    open_first_module?: XmlElem<boolean>;
    open_last_visited?: XmlElem<boolean>;
    open_next_after_completed?: XmlElem<boolean>;
    launch_type?: XmlElem<string>;
  }
}

interface IWTCoreLessonInfoBase {
  learning_part_id?: XmlElem<number>;
  filing_learning_part?(bSetChangedParam: boolean): void;
  save_learning_part(bSaveParam: number): boolean;
  core_lesson_changed?: XmlElem<boolean>;
  core_lesson_filled?: XmlElem<boolean>;
}

interface IWTCoreLessonBaseDataLesson {
  core_vendor?: XmlElem<string>;
  objectives_status?: XmlElem<string>;
  evaluation?: XmlElem<string>;
  comments?: XmlElem<string>;
  student_data?: XmlElem<string>;
  student_preferences?: XmlElem<string>;
  student_demographics?: XmlElem<string>;
}

interface IWTCoreLessonBase {
  core_lesson?: XmlElem<string>;
  lesson_report?: XmlElem<string>;
  data_lesson: XmlElem<IWTCoreLessonBaseDataLesson>
}

interface IWTCompoundProgramProgram {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_progpam_id?: XmlElem<number>;
  education_program_id?: XmlElem<number>;
  education_method_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  person_num?: XmlElem<number>;
  type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
  delay_days?: XmlElem<number>;
  days?: XmlElem<number>;
  weight?: XmlElem<number>;
  start_type?: XmlElem<string>;
  required?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface IWTLectorsBaseLector {
  lector_id?: XmlElem<number>;
  hours?: XmlElem<number>;
  weekend_hours?: XmlElem<number>;
  webinar_url?: XmlElem<string>;
  participation_id?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTLectorsBase {
  lectors?: XmlMultiElem<IWTLectorsBaseLector>;
}


interface IWTBudgetPeriodDay {
  date?: XmlElem<Date>;
  type?: XmlElem<string>;
  region_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IResultActivateProgramToPerson {
  result: [{
    id: number;
    error: number;
    text: string;
  }];
}

interface IWTColumnBaseColumnCCondition {
  option_type?: XmlElem<string>;
  color?: XmlElem<string>;
  bkcolor?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTColumnBaseColumnForeignElem {
  name?: XmlElem<string>;
  catalog?: XmlElem<string>;
  is_custom?: XmlElem<boolean>;
  target?: XmlElem<string>;
}

interface IWTColumnBaseColumn {
  column_name?: XmlMultiElem<string>;
  column_title?: XmlMultiElem<string>;
  column_foreign_name?: XmlMultiElem<string>;
  column_foreign_catalog_2?: XmlMultiElem<string>;
  column_foreign_name_2?: XmlMultiElem<string>;
  column_value?: XmlMultiElem<string>;
  column_width?: XmlMultiElem<number>;
  column_width_unit?: XmlMultiElem<string>;
  column_color?: XmlMultiElem<string>;
  column_bkcolor?: XmlMultiElem<string>;
  datatype?: XmlMultiElem<string>;
  flag_formula?: XmlMultiElem<boolean>;
  flag_formula_post_process?: XmlMultiElem<boolean>;
  flag_color?: XmlMultiElem<boolean>;
  flag_visible?: XmlMultiElem<boolean>;
  flag_lng?: XmlMultiElem<boolean>;
  c_conditions?: XmlMultiElem<IWTColumnBaseColumnCCondition>;
  foreign_elem?: XmlMultiElem<IWTColumnBaseColumnForeignElem>;
}

interface IWTColumnBase {
  columns?: XmlMultiElem<IWTColumnBaseColumn>;
}

interface IWTCollaboratorChangeLog extends IWTCustomElemsBase {
  id?: XmlElem<string>;
  position_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  position_parent_id?: XmlElem<number>;
  position_parent_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  working_days?: XmlElem<number>;
  working_hours?: XmlElem<number>;
  rate?: XmlElem<number>;
  rate_percent?: XmlElem<number>;
}

interface IWTCollaboratorHistoryState {
  id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
}

interface IWTCollaboratorPersonalConfig {
  avatar_filename?: XmlElem<string>;
  nick?: XmlElem<string>;
  status?: XmlElem<string>;
  default_info_type?: XmlElem<string>;
}

interface IWTFuncManagersBaseFuncManager extends IWTPersonFillingBase {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
}

interface IWTFuncManagersBase {
  func_managers?: XmlMultiElem<IWTFuncManagersBaseFuncManager>;
  obtain_func_manager_by_id?(managerId: number, bossTypeId?: number): void;
}

interface IWTPathSubBasePathSub {
  id?: XmlElem<number>;
  type?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}

interface IWTPathSubBase {
  path_subs?: XmlMultiElem<IWTPathSubBasePathSub>;
  filling_path_subs?(): XmlMultiElem<IWTPathSubBasePathSub>;
}

interface IWTPersonObjectLinksBasePersonObjectProfile {
  person_object_profile_id?: XmlElem<number>;
}

interface IWTPersonObjectLinksBasePersonObjectLinkObject {
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  can_edit?: XmlElem<boolean>;
  can_delete?: XmlElem<boolean>;
  access_level?: XmlElem<number>;
}

interface IWTPersonObjectLinksBasePersonObjectLink {
  object_catalog?: XmlElem<string>;
  all_can_create?: XmlElem<boolean>;
  amount?: XmlElem<number>;
  all_can_edit?: XmlElem<boolean>;
  all_can_delete?: XmlElem<boolean>;
  objects?: XmlMultiElem<IWTPersonObjectLinksBasePersonObjectLinkObject>;
}

interface IWTPersonObjectLinksBase {
  pol_loaded?: XmlElem<boolean>;
  pol_changed?: XmlElem<boolean>;
  person_object_profiles?: XmlMultiElem<IWTPersonObjectLinksBasePersonObjectProfile>;
  person_object_links?: XmlMultiElem<IWTPersonObjectLinksBasePersonObjectLink>;
}

interface IWTCollaboratorCustomParam {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTCollaboratorCompBenPaymentType {
  payment_type_id?: XmlElem<number>;
  max_value?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCollaboratorCompBen {
  salary?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  payment_period?: XmlElem<string>;
  comment?: XmlElem<string>;
  payment_types?: XmlMultiElem<IWTCollaboratorCompBenPaymentType>
}

interface IWTPositionCompetenceProfile {
  id?: XmlElem<number>;
}

interface IWTCompetenceProfileAssessment {
  assessment_id?: XmlElem<number>;
  assessment_score?: XmlElem<number>;
}

interface IWTCompetenceProfilePositionCommon {
  position_common_id?: XmlElem<number>;
}

interface IWTCompetenceProfileFamilyCompetenceProfile {
  competence_profile_id?: XmlElem<number>;
}


interface IWTPositionKPIProfile {
  id?: XmlElem<number>;
  period_type_id?: XmlElem<string>;
}

interface IWTPersonFillingBase {
  person_fullname?: XmlElem<string>;
  person_position_id?: XmlElem<number>;
  person_position_name?: XmlElem<string>;
  person_position_code?: XmlElem<string>;
  person_org_id?: XmlElem<number>;
  person_org_name?: XmlElem<string>;
  person_org_code?: XmlElem<string>;
  person_subdivision_id?: XmlElem<number>;
  person_subdivision_name?: XmlElem<string>;
  person_subdivision_code?: XmlElem<string>;
  person_instance_id?: XmlElem<string>;
  person_code?: XmlElem<string>;
}

interface IWTChartReportGraphBase {
  disp_legend?: XmlElem<boolean>;
  chart_id?: XmlElem<string>;
  flag_showvalues?: XmlElem<boolean>;
  plot_type?: XmlElem<string>;
  flag_open_graph_tun_section?: XmlElem<boolean>;
}

interface IWTCatalogListBaseCatalogObject {
  object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCareerReserveTutor {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
  is_responsible?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface IWTCareerReserveComissionPerson {
  person_id?: XmlElem<number>;
  score?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCareerReserveTask extends XmlElem<any> {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  parent_task_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  plan_date?: XmlElem<Date>;
  fact_date?: XmlElem<Date>;
  start_edit_date?: XmlElem<Date>;
  typical_development_program_id?: XmlElem<number>;
  tutor_id?: XmlElem<number>;
  competence_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  score?: XmlElem<number>;
  person_comment?: XmlElem<string>;
  tutor_comment?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  active_test_learning_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  event_result_id?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  assessment_appraise_result_id?: XmlElem<number>;
  poll_result_id?: XmlElem<number>;
  poll_procedure_id?: XmlElem<number>;
  type_document?: XmlElem<string>;
  link_document?: XmlElem<string>;
  forbid_task_portal_edit?: XmlElem<boolean>;
  commission_persons?: XmlMultiElem<IWTCareerReserveComissionPerson>;
}

interface IWTAnnalsObjectBaseDataAssessmentTimestamp {
  value?: XmlElem<any>;
}

interface IWTAnnalsObjectBaseDataAssessmentLatency {
  value?: XmlElem<any>;
}

interface IWTAnnalsObjectBaseDataAssessmentDuration {
  value?: XmlElem<any>;
}

interface IWTAnnalsObjectBaseDataAssessment {
  ident?: XmlElem<any>;
  viewed?: XmlElem<any>;
  answered?: XmlElem<any>;
  completed?: XmlElem<any>;
  timestamp?: XmlElem<IWTAnnalsObjectBaseDataAssessmentTimestamp>;
  latency?: XmlElem<IWTAnnalsObjectBaseDataAssessmentLatency>;
  duration?: XmlElem<IWTAnnalsObjectBaseDataAssessmentDuration>;
}

interface IWTAnnalsObjectBaseDataItemsListSectionitem {
  ident?: XmlElem<any>;
}

interface IWTAnnalsObjectBaseDataItemsList {
  sectionitem?: XmlMultiElem<IWTAnnalsObjectBaseDataItemsListSectionitem>
}

interface IWTAnnalsObjectBaseData {
  assessment?: XmlElem<IWTAnnalsObjectBaseDataAssessment>;
  sections?: XmlMultiElem<IWTAnnalsObjectBaseDataAssessment & IWTAnnalsObjectBaseDataItemsList>;
}

interface IWTAnnalsObjectBase {
  id?: XmlElem<any>;
  attempt_id?: XmlElem<string>;
  file?: XmlElem<string>;
  objtype?: XmlElem<string>;
  data?: XmlElem<IWTAnnalsObjectBaseData>;
}

interface IWTAnnalsObjectsBase {
  objects?: XmlMultiElem<IWTAnnalsObjectBase>;
}

interface IWTAnnalsNumsBase {
  question_num?: XmlElem<number>;
  question_answered_num?: XmlElem<number>;
  question_passed_num?: XmlElem<number>;
}

interface IWTActiveNotificationSender {
  address?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface IWTActiveNotificationRecipients {
  address?: XmlElem<string>;
  mobile_phone?: XmlElem<string>;
  name?: XmlElem<string>;
  collaborator_id?: XmlElem<number>;
}

interface IWTPollReportViewer extends IWTPersonFillingBase {
  person_id?: XmlElem<number>;
}

interface IWTPollQuestionEntry {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  weight?: XmlElem<number>;
  bg_color?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTPollQuestionRowColumn {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
}
interface IWTPollQuestionRow {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  columns?: XmlMultiElem<IWTPollQuestionRowColumn>;
}

interface IWTPollQuestion extends IWTCustomElemsBase {
  id?: XmlElem<number>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  is_in_table?: XmlElem<boolean>;
  show_header?: XmlElem<boolean>;
  required?: XmlElem<boolean>;
  catalog?: XmlElem<string>;
  add_comment?: XmlElem<boolean>;
  subtype?: XmlElem<number>;
  is_multiple?: XmlElem<boolean>;
  value_condition?: XmlElem<string>;
  completed?: XmlElem<boolean>;
  image_id?: XmlElem<number>;

  entries?: XmMultiElem<IWTPollQuestionEntry>;
  rows?: XmMultiElem<IWTPollQuestionRow>;

  is_current?: XmlElem<boolean>;
  catalog_entry_id?: XmlElem<number>;
}

interface IWTPollItemRowColumn {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  is_title?: XmlElem<boolean>;
}

interface IWTPollItemRow {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  columns?: XmlMultiElem<IWTPollItemRowColumn>;
  is_title?(): boolean;
}

interface IWTPollItemCondition {
  id?: XmlElem<string>;
  question_id?: XmlElem<number>;
  entry_id?: XmlElem<number>;
  and_or?: XmlElem<string>;
}

interface IWTPollItem {
  id?: XmlElem<string>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  question_id?: XmlElem<number>;
  required?: XmlElem<boolean>;
  resource_type?: XmlElem<string>;
  max_duration?: XmlElem<number>;
  preparation_time?: XmlElem<number>;
  prohibit_viewing?: XmlElem<boolean>;
  prohibit_overwriting?: XmlElem<boolean>;
  rows?: XmlMultiElem<IWTPollItemRow>;
  conditions?: XmlMultiElem<IWTPollItemCondition>;
}

interface IWTNotificationRecipient {
  recipient_type?: XmlElem<string>;
  func_manager_type_id: number;
  eval_str?: XmlElem<string>;
  eval_ids_str?: XmlElem<string>;
  notification_template_id?: XmlElem<number>;
}

interface IWTNotificationNotificationSystem {
  notification_system_id?: XmlElem<number>;
}

interface IWTNotificationTemplateMainObject extends IWTFieldNamesBaseFieldName {
  catalog_name?: XmlElem<string>;
  init_field_names?: Function;
}

interface IWTAccessBase {
  access_level?: XmlElem<number>;
  access_role?: XmlElem<string>;
  is_arm_admin?: XmlElem<boolean>;
  web_banned?: XmlElem<boolean>;
  user_group_id?: XmlElem<number>;
  is_content_admin?: XmlElem<boolean>;
}

interface IWTWorkflowDataBaseWorkflowField {
  name?: XmlElem<string>;
  value?: XmlElem<unknown>;
  workflow_state?: XmlElem<string>;
}

interface IWTWorkflowDataBaseWorkflowLogEntry {
  create_date?: XmlElem<Date>;
  action_id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  begin_state?: XmlElem<string>;
  finish_state?: XmlElem<string>;
  submited?: XmlElem<boolean>;
}

interface IWTWorkflowDataBaseWorkflowCustomStateCondition {
  type?: XmlElem<string>;
  cur_user_type?: XmlElem<string>;
  person_id?: XmlElem<number>;
  and_or?: XmlElem<string>;
  begin_bracket?: XmlElem<string>;
  finish_bracket?: XmlElem<string>;
}

interface IWTWorkflowDataBaseWorkflowCustomState {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  next_workflow_custom_state_code?: XmlElem<string>;
  common_state_code?: XmlElem<string>;
  conditions?: XmlMultiElem<IWTWorkflowDataBaseWorkflowCustomStateCondition>;
  condition_eval_str?: XmlElem<string>;
}

interface IWTWorkflowDataBase {
  workflow_id?: XmlElem<number>;
  workflow_state?: XmlElem<string>;
  workflow_state_name?: XmlElem<string>;
  workflow_state_last_date?: XmlElem<Date>;
  get_workflow_state_name?(workflowDoc: IWTWorkflowTopElem): string;
  set_workflow_state_last_date?(param: any): void;
  add_workflow_log_entry?(param: any): void;
  is_workflow_init?: XmlElem<boolean>;
  workflow_fields?: XmlMultiElem<IWTWorkflowDataBaseWorkflowField>;
  workflow_log_entrys?: XmlMultiElem<IWTWorkflowDataBaseWorkflowLogEntry>;
  workflow_custom_states?: XmlMultiElem<IWTWorkflowDataBaseWorkflowCustomState>;
}

interface ILists {
  object_resource_types: XmlMultiElem<IWTListsObjectResourceType>;
  currency_types: XmlMultiElem<IWTListsCurrencyType>;
  event_forms: XmlMultiElem<IWTListsEventForm>;
  organizational_forms: XmlMultiElem<IWTListsOrganizationalForm>;
  facts: XmlMultiElem<IWTListsFact>;
  professional_areas: XmlMultiElem<IWTListsProfessionalArea>;
  web_requirements: XmlMultiElem<IWTListsWebRequirement>;
  ext_externalscripts: XmlMultiElem<IWTListsExternalScript>;
}

declare const lists: XmlElem<ILists>;

interface IWTMSDispBlockBase {
  access_block_type?: XmlElem<string>;
  obj_title?: XmlElem<string>;
  custom_flag?: XmlElem<boolean>;
}

interface IWTImageBase {
	name?: XmlElem<string>;
	data?: XmlElem<Binary>;
}

interface IWTRubricBase {
  candidate?: XmlElem<string>;
  image?: XmlElem<IWTImageBase>;
}

interface IWTProctoringBaseProctoring extends IWTWebVariablesBase {
  is_basic_variables?: XmlElem<boolean>;
  proctoring_system_id?: XmlElem<number>;
}

interface IWTProctoringBase {
  use_proctoring?: XmlElem<boolean>;
  proctoring?: XmlElem<IWTProctoringBaseProctoring>;
}

interface IWTMSPeriodityBase {
  trigger_type?: XmlElem<string>;
  period?: XmlElem<number>;
  start_time?: XmlElem<string>;
  finish_time?: XmlElem<string>;
  all_day?: XmlElem<boolean>;
  start_day?: XmlElem<number>;
  start_week_day?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  last_run_date?: XmlElem<Date>;
}

interface IWTExecCodeBaseExecCode {
  code_type?: XmlElem<string>;
  code_url?: XmlElem<string>;
  code_text?: XmlElem<string>;
  is_init?: XmlElem<boolean>;
  code_temp?: XmlElem<string>;
}

interface IWTExecCodeBase {
  exec_code?: XmlElem<IWTExecCodeBaseExecCode>;
}

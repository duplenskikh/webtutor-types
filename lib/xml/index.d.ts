interface WorkflowFieldsStatesBaseState {
  code: XmlElem<string>;
  name: XmlElem<string>;
  duration: XmlElem<number>;
  parameters: XmlElem<string>;
}

interface WorkflowFieldsStatesBase {
  workflow_fields: XmlMultiElem<WorkflowFieldsStatesBaseWorkflowField>;
  states: XmlMultiElem<WorkflowFieldsStatesBaseState>;
}

interface WorkflowFieldGroup {
  code: XmlElem<string>;
  name: XmlElem<string>;
  read_conditions: ConditionsBase;
  write_conditions: ConditionsBase;
}

interface WorkflowElemOperationsBase {
  type: XmlElem<string>;
  workflow_state_id: XmlElem<string>;
  workflow_field_id: XmlElem<string>;
  workflow_field_value: XmlElem<string>;
  request_status_id: XmlElem<string>;
  eval_str: XmlElem<string>;
  notification_id: XmlElem<number>;
  print_form_id: XmlElem<number>;
}

interface WorkflowElemOperationsBase {
  operations: XmlMultiElem<WorkflowElemOperationsBase>;
}

interface WorkflowAction extends WorkflowElemOperationsBase,
  ConditionsBase,
  WorkflowElemOperationsBase
{
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_trigger: XmlElem<boolean>;
}

interface WorkflowEscalationCourse {
  course_id: XmlElem<number>;
  state_id: XmlElem<number>;
}

interface WorkflowEscalationAssessment {
  assessment_id: XmlElem<number>;
  state_id: XmlElem<number>;
}

interface WorkflowEscalationPoll {
  poll_id: XmlElem<number>;
  status: XmlElem<number>;
}

interface WorkflowEscalation extends WorkflowElemOperationsBase {
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_state_id: XmlElem<string>;
  auto_escalation: XmlElem<boolean>;
  auto_escalation_by_end_date: XmlElem<boolean>;
  auto_escalation_days: XmlElem<number>;
  auto_escalation_repeat: XmlElem<boolean>;
  escalation_eval_str: XmlElem<string>;
  escalation_eval_negative: XmlElem<boolean>;
  courses: XmlMultiElem<WorkflowEscalationCourse>;
  assessments: XmlMultiElem<WorkflowEscalationAssessment>;
  polls: XmlMultiElem<WorkflowEscalationPoll>;
}

interface WorkflowTuneFieldTuneFieldChain {
  name: XmlElem<string>;
  path: XmlElem<string>;
  catalog_name: XmlElem<string>;
  type: XmlElem<string>;
  is_multiple: XmlElem<boolean>;
  pk: XmlElem<string>;
  value: XmlElem<string>;
}

interface WorkflowTuneField {
  tune_field_chain: XmlMultiElem<WorkflowTuneFieldTuneFieldChain>;
}

interface RemoteSecutiryProfileMethodAccess {
  access_block_id: XmlElem<string>;
  library_profile: XmlElem<string>;
}

interface QualificationAssignmentLearning {
  learning_id: XmlElem<number>;
}

interface QualificationAssignmentTestLearning {
  test_learning_id: XmlElem<number>;
}

interface QualificationAssignmentEducationMethod {
  education_method_id: XmlElem<number>;
}

interface PersonBase extends PersonNameBase {
  sex: XmlElem<string>;
  birth_date: XmlElem<Date>;
  address: XmlElem<string>;
  phone: XmlElem<string>;
  mobile_phone: XmlElem<string>;
  mobile_phone_conf_code: XmlElem<string>;
  mobile_phone_conf_date: XmlElem<Date>;
  mobile_phone_conf: XmlElem<boolean>;
  email: XmlElem<string>;
  email_conf_code: XmlElem<string>;
  email_conf_date: XmlElem<Date>;
  email_conf: XmlElem<boolean>;
  system_email: XmlElem<string>;
  login: XmlElem<string>;
  password: XmlElem<string>;
  comment: XmlElem<string>;
}

interface PassportDataBase {
  passport_type_id: XmlElem<string>;
  series: XmlElem<string>;
  num: XmlElem<string>;
  registration_date: XmlElem<Date>;
  registration_agency: XmlElem<string>;
}

declare namespace ms_tools {
  function raise_system_event_env(systemEventIdentificator: string | number, params: unknown): void;
}

interface MSDialogObjectSelectTopElem {
  object_id: XmlElem<number>;
  object_str: XmlElem<string>;
  object_name: XmlElem<string>;
  org_id: XmlElem<number>;
  multi_select: XmlElem<boolean>;
  dialog_title: XmlElem<string>;
  values: XmlMultiElem<{
    key: XmlElem<number>;
    key_str: XmlElem<string>;
    key_name: XmlElem<string>;
    org_id: XmlElem<number>;
  }>;
  catalog_name: XmlElem<string>;
  xquery_qual: XmlElem<string>;
}

type MSDialogObjectSelectDocument = XmlDocument & {
  TopElem: MSDialogObjectSelectTopElem;
};

interface WTVDlgEditTextTopElem {
  url: XmlElem<string>;
  desc: XmlElem<string>;
  title: XmlElem<string>;
  is_rich: XmlElem<boolean>;
}

type WTVDlgEditTextDocument = XmlDocument & {
  TopElem: WTVDlgEditTextTopElem;
};

interface Menu {
  name: XmlElem<string>;
}

interface ListsObjectResourceType {
  id: string;
  name: string;
}

interface ListsCurrencyTypeModName {
  id: number;
  name: string;
  cent_name: string;
}

interface ListsCurrencyType {
  id: string;
  name: string;
  short_name: string;
  cent_name: string;
  mod_names: XmlMultiElem<ListsCurrencyTypeModName>;
}

interface ListsEventForm {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ListsOrganizationalForm {
  id: string;
  name: string;
}

interface ListsFactColumn {
  id: string;
  name: string;
  query_name: string;
  title: string;
}

interface ListsFactExtraColumn {
  id: number;
  name: string;
  title: string;
}

interface ListsFact {
  id: number;
  name: string;
  type: number;
  catalog: string;
  columns: XmlMultiElem<ListsFactColumn>;
  extra_columns: XmlMultiElem<ListsFactExtraColumn>;
}

interface ListsProfessionalArea {
  id: string;
  name: string;
}

interface ListsWebRequirement {
  id: string;
  name: string;
  is_std: boolean;
}

interface ListsExternalScript {
  id: string;
  source_url: string;
}

interface ListsPersonState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface LibraryMaterialFormat {
  library_material_format_id: XmlElem<number>;
  number: XmlElem<number>;
}

interface LibraryMaterialGroup {
  group_id: XmlElem<number>;
  name: XmlElem<string>;
}

interface LibraryMaterialSubscribedPerson {
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
}

interface LibraryMaterialPathSection {
  id: XmlElem<number>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
}

interface LearningTaskExpert extends PersonFillingBase {
  id: XmlElem<string>;
}

type LectorTypes = "invitee" | "collaborator";

interface ObjectiveBaseScore {
  raw: XmlElem<number>;
  max: XmlElem<number>;
  min: XmlElem<number>;
  scaled: XmlElem<number>;
}

interface ObjectiveBase {
  objective_id: XmlElem<string>;
  score: XmlElem <ObjectiveBaseScore>;
  status: XmlElem<string>;
  completion_status: XmlElem<string>;
  success_status: XmlElem<string>;
  description: XmlElem<string>;
}

type LearningObjectivesInteractionsBaseObjective = ObjectiveBase;

interface InteractionBaseObjective {
  objective_id: XmlElem<string>;
}

interface InteractionBaseCorrectResponse {
  pattern: XmlElem<string>;
}
interface InteractionBase {
  interaction_id: XmlElem<string>;
  time: XmlElem<string>;
  objectives: XmlMultiElem<InteractionBaseObjective>;
  type_interaction: XmlElem<string>;
  correct_responses: XmlMultiElem<InteractionBaseCorrectResponse>;
  student_response: XmlElem<string>;
  result: XmlElem<string>;
  weighting: XmlElem<string>;
  latency: XmlElem<string>;
  description: XmlElem<string>;
}

type LearningObjectivesInteractionsBaseInteraction = InteractionBase;

interface LearningObjectivesInteractionsBase {
  objectives: XmlMultiElem<LearningObjectivesInteractionsBaseObjective>;
  interactions: XmlMultiElem<LearningObjectivesInteractionsBaseInteraction>;
  scoring_type: XmlElem<string>;
}

interface LearningPartBaseLog {
  date: XmlElem<Date>;
  location: XmlElem<string>;
  type: XmlElem<string>;
  text: XmlElem<string>;
  log: XmlElem<string>;
  comment: XmlElem<string>;
}

interface LearningPartBaseStatement {
  statement_id: XmlElem<number>;
  activity_state_id: XmlElem<number>;
  score: XmlElem<number>;
}

interface LearningCurrentStateBase {
  cur_score: XmlElem<number>;
  cur_score_str: XmlElem<string>;
  cur_state_id: XmlElem<number>;
}

interface LearningAssessmentBase extends AnnalsObjectsBase {
  assessment_id: XmlElem<number>;
  assessment_name: XmlElem<string>;
  assessment_code: XmlElem<string>;
  qti_text: XmlElem<string>;
  qti_date: XmlElem<Date>;
  expert_eval: XmlElem<boolean>;
  adaptive_eval: XmlElem<boolean>;
  is_self_enrolled: XmlElem<boolean>;
}

interface LastAttemptTestLearningsBaseTestLearning {
  test_learning_id: XmlElem<number>;
  state_id: XmlElem<number>;
  score: XmlElem<number>;
  start_usage_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
}

interface LastAttemptTestLearningsBase {
  test_learnings: XmlMultiElem<LastAttemptTestLearningsBaseTestLearning>;
}

interface KnowledgePartsBaseTag {
  tag_id: XmlElem<number>;
  tag_name: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface KnowledgePartsBaseExpert {
  expert_id: XmlElem<number>;
}

interface KnowledgePartsBaseKnowledgePart {
  knowledge_part_id: XmlElem<number>;
  knowledge_part_name: XmlElem<string>;
  knowledge_part_level_id: XmlElem<number>;
  full_path: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface KnowledgePartsFieldsBase {
  knowledge_parts: XmlMultiElem<KnowledgePartsBaseKnowledgePart>;
}

interface KnowledgePartsBaseOld {
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
}

interface GroupCollaborator extends PersonForeignBase {
  collaborator_id: XmlElem<number>;
  collaborator_fullname: XmlElem<string>;
  desc: XmlElem<string>;
}

interface RequirementsBase {
  requirements: XmlMultiElem<unknown>;
  certificate_types: XmlMultiElem<unknown>;
  compound_programs: XmlMultiElem<unknown>;
  education_methods: XmlMultiElem<unknown>;
  obligatory_education_amount: XmlElem<number>;
  education_period: XmlElem<number>;
  typical_development_programs: XmlMultiElem<unknown>;
  qualifications: XmlMultiElem<unknown>;
  assessments: XmlMultiElem<unknown>;
  recomended_library_materials: XmlMultiElem<unknown>;
  professional_areas: XmlMultiElem<unknown>;
  educ_type_id: XmlElem<string>;
  education_type_id: XmlElem<number>;
  age_min: XmlElem<number>;
  age_max: XmlElem<number>;
  experience_in_company: XmlElem<number>;
  experience_in_current_position: XmlElem<number>;
}

interface EducGroupsBaseEducGroup {
  group_id: XmlElem<string>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  place_id: XmlElem<number>;
  conversation_id: XmlElem<number>;
  collaborators: XmlMultiElem<unknown>;
  lectors: XmlMultiElem<unknown>;
}

interface EducGroupsBase {
  educ_groups: XmlMultiElem<EducGroupsBaseEducGroup>;
}

interface GameBonusBaseGameBonus {
  id: XmlElem<string>;
  currency_type_id: XmlElem<string>;
  sum: XmlElem<number>;
}

interface GameBonusBase {
  game_bonuss: XmlMultiElem<GameBonusBaseGameBonus>;
}

interface FieldNamesBaseFieldName extends FieldNamesBase {
  level: XmlElem<number>;
  field_names: XmlMultiElem<FieldNamesBaseFieldName>;
}

interface FieldNamesBase {
  field_names: XmlMultiElem<FieldNamesBaseFieldName>;
}

interface EventPhaseCollaborator {
  collaborator_id: XmlElem<number>;
  is_assist: XmlElem<boolean>;
}

interface EventPhase {
  id: XmlElem<string>;
  lector_id: XmlElem<number>;
  object_resource_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  comment: XmlElem<string>;
  reserve_desc: XmlElem<string>;
  collaborators: XmlMultiElem<EventPhaseCollaborator>;
}

interface EventLector {
  lector_id: XmlElem<number>;
}

interface EventSettingsBase {
  event_settings: {
    send_type: XmlElem<string>;
    send_collaborators: XmlElem<boolean>;
    send_bosses: XmlElem<boolean>;
    send_lectors: XmlElem<boolean>;
    send_tutors: XmlElem<boolean>;
    send_event_preparations: XmlElem<boolean>;
    show_result_fields: XmlElem<boolean>;
  }
}

interface CatalogListBaseCatalog {
  type: XmlElem<string>;
  title: XmlElem<string>;
  all: XmlElem<boolean>;
  objects: XmlMultiElem<CatalogListBaseCatalogObject>;
}

interface CatalogListBase {
  catalogs: XmlMultiElem<CatalogListBaseCatalog>;
  catalogs_catalog_type: XmlElem<string>;
  catalogs_sel_all_objects: XmlElem<boolean>;
}

interface EducationPlanProgramLearningTask {
  learning_task_id: XmlElem<number>;
}

interface EducationPlanProgramAssessment {
  assessment_id: XmlElem<number>;
}

interface EducationPlanNotification {
  notification_template_id: XmlElem<number>
  subject: XmlElem<string>
  body: XmlElem<string>
  body_type: XmlElem<string>
  edit_notification: XmlElem<boolean>
}

interface EducationPlanCompletedParentProgram {
  program_id: XmlElem<number>;
}

interface EducationPlanProgramResult {
  person_id: XmlElem<number>
  type: XmlElem<string>
  date: XmlElem<Date>
}

interface DotnetCoreHost {
  Object: {
    GetAssembly(libName: string): {
      CallClassStaticMethod(className: string, methodName: string, arguments: XmlMultiElem<unknown>, single?: boolean, wait?: boolean, max_run_time?: number): unknown;
      CreateClassObject<T>(classObject: string): T;
    };
  };
}

interface DocumentAttributesBase {
  template: XmlElem<string>;
  position: XmlElem<number>;
  is_link: XmlElem<boolean>;
  link_href: XmlElem<string>;
  link_target: XmlElem<string>;
  permit_subscription: XmlElem<boolean>;
}

interface DocumentAttribute extends DocumentAttributesBase {
  is_menu: XmlElem<boolean>;
  is_main_item: XmlElem<boolean>;
  is_news: XmlElem<boolean>;
  left_disp_childs: XmlElem<boolean>;
  no_disp_childs: XmlElem<boolean>;
}

interface AccessDocBaseAccessRole {
  access_role_id: XmlElem<string>;
}

interface AccessDocBaseAccessGroup {
  group_id: XmlElem<string>;
}

interface ViewConditionsBaseConditionBase {
  top_elem: XmlElem<string>;
  field: XmlElem<string>;
  title: XmlElem<string>;
  value: XmlElem<string>;
  type: XmlElem<string>;
  option_type: XmlElem<string>;
  is_custom_field: XmlElem<boolean>;
  and_or: XmlElem<string>;
  is_multiple: XmlElem<boolean>;
  value_multiple: XmlMultiElem<string>;
  bracket: XmlElem<string>;
}

type TWTViewConditionsBaseConditionBase = ViewConditionsBaseConditionBase;

interface ViewConditionsBase {
  conditions: XmlMultiElem<TWTViewConditionsBaseConditionBase>;
  conditions_qual: XmlElem<string>;
}

interface AccessBase {
  access_level: XmlElem<number>;
  access_role: XmlElem<string>;
  is_arm_admin: XmlElem<boolean>;
  web_banned: XmlElem<boolean>;
  user_group_id: XmlElem<number>;
  is_content_admin: XmlElem<boolean>;
}

interface DocumentPersonsBasePerson {
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  can_create: XmlElem<boolean>;
  can_edit: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
}

interface DocumentPersonsBase {
  document_persons: XmlMultiElem<DocumentPersonsBasePerson>;
}

interface DocInfoCreation {
  user_login: XmlElem<string>;
  user_id: XmlElem<number>;
  date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

interface DocInfoModification {
  user_login: XmlElem<string>;
  user_id: XmlElem<number>;
  date: XmlElem<Date>;
}

interface DocInfoBase {
  creation: XmlElem <DocInfoCreation>;
  modification: XmlElem <DocInfoModification>;
  invariable: XmlElem<boolean>;
}

interface DocInfo {
  creation: XmlElem <DocInfoCreation>;
  modification: XmlElem <DocInfoModification>;
  invariable: XmlElem<boolean>;
}

interface CustomReportBaseAggregation {
  aggregate_function: XmlElem<string>;
  aggregate_column: XmlElem<number>;
  flag_graph: XmlElem<boolean>;
  aggregate_secondary: {
    option_type: XmlElem<string>;
    column_value: XmlElem<string>;
  }
}

interface CustomElemsBaseCustomReportFiction extends CustomReportBase {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface CustomElemsBase {
  custom_elems: XmlMultiElem<CustomElemsBaseCustomElem>;
  custom_report_fictions: XmlMultiElem<CustomElemsBaseCustomReportFiction>;
}

interface CriterionBaseCriterionCatalogChain extends ViewConditionsBase, FieldNamesBase {
  catalog_name: XmlElem<string>;
  field: XmlElem<string>;
  scheme_id: XmlElem<string>;
}

interface CriterionBaseCriterion {
  value: XmlElem<string>;
  column_title: XmlElem<string>;
  type: XmlElem<string>;
  option_type: XmlElem<string>;
  and_or: XmlElem<string>;
  is_custom_field: XmlElem<boolean>;
  catalog_chains: XmlMultiElem<CriterionBaseCriterionCatalogChain>;
  flag_value_filter: XmlElem<boolean>;
  flag_is_parameter: XmlElem<boolean>;
  flag_hierarchy: XmlElem<number>;
  flag_active: XmlElem<boolean>;
  open_bracket: XmlElem<string>;
  close_bracket: XmlElem<string>;
}

interface CriterionBase extends FieldNamesBase {
  criterions: XmlMultiElem<CriterionBaseCriterion>;
}

interface CoursePartActivityState {
  activity_state_id: XmlElem<number>;
  score: XmlElem<number>;
  state_id: XmlElem<number>;
}

interface CoursePart {
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  max_score: XmlElem<number>;
  mastery_score: XmlElem<number>;
  mastery_score_relative: XmlElem<number>;
  url: XmlElem<string>;
  course_module_id: XmlElem<number>;
  parent_part_code: XmlElem<string>;
  desc: XmlElem<string>;
  win_width: XmlElem<number>;
  win_height: XmlElem<number>;
  disp_scrolling: XmlElem<boolean>;
  resizable: XmlElem<boolean>;
  is_mandatory: XmlElem<boolean>;
  is_visible: XmlElem<boolean>;
  max_time_allowed: XmlElem<string>;
  time_limit_action: XmlElem<string>;
  set_status_side: XmlElem<string>;
  score_factor: XmlElem<number>;
  assessment_id: XmlElem<number>;
  attempts_num: XmlElem<number>;
  start_day: XmlElem<number>;
  duration_day: XmlElem<number>;
  activity_id: XmlElem<number>;
  activity_state: XmlMultiElem<CoursePart>;
  object_id: XmlElem<number>;
  cl_module_view: XmlElem<string>;
}

interface PersonExpert {
  person_id: number;
  type: string;
}

interface CourseSettingsBase {
  settings: {
    open_single_module: XmlElem<boolean>;
    open_first_module: XmlElem<boolean>;
    open_last_visited: XmlElem<boolean>;
    open_next_after_completed: XmlElem<boolean>;
    launch_type: XmlElem<string>;
  }
}

interface CoreLessonInfoBase {
  learning_part_id: XmlElem<number>;
  filing_learning_part(bSetChangedParam: boolean): void;
  save_learning_part(bSaveParam: number): boolean;
  core_lesson_changed: XmlElem<boolean>;
  core_lesson_filled: XmlElem<boolean>;
}

interface CoreLessonBaseDataLesson {
  core_vendor: XmlElem<string>;
  objectives_status: XmlElem<string>;
  evaluation: XmlElem<string>;
  comments: XmlElem<string>;
  student_data: XmlElem<string>;
  student_preferences: XmlElem<string>;
  student_demographics: XmlElem<string>;
}

interface CoreLessonBase {
  core_lesson: XmlElem<string>;
  lesson_report: XmlElem<string>;
  data_lesson: XmlElem <CoreLessonBaseDataLesson>
}

interface CompoundProgramProgram {
  id: XmlElem<number>;
  name: XmlElem<string>;
  parent_progpam_id: XmlElem<number>;
  education_program_id: XmlElem<number>;
  education_method_id: XmlElem<number>;
  duration: XmlElem<number>;
  person_num: XmlElem<number>;
  type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  catalog_name: XmlElem<string>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  edit_notification: XmlElem<boolean>;
  delay_days: XmlElem<number>;
  days: XmlElem<number>;
  weight: XmlElem<number>;
  start_type: XmlElem<string>;
  required: XmlElem<boolean>;
  comment: XmlElem<string>;
}

interface BudgetPeriodDay {
  date: XmlElem<Date>;
  type: XmlElem<string>;
  region_id: XmlElem<number>;
  comment: XmlElem<string>;
}

interface IResultActivateProgramToPerson {
  result: [{
    id: number;
    error: number;
    text: string;
  }];
}

interface ColumnBaseColumnCCondition {
  option_type: XmlElem<string>;
  color: XmlElem<string>;
  bkcolor: XmlElem<string>;
  value: XmlElem<string>;
}

interface ColumnBaseColumnForeignElem {
  name: XmlElem<string>;
  catalog: XmlElem<string>;
  is_custom: XmlElem<boolean>;
  target: XmlElem<string>;
}

interface ColumnBaseColumn {
  column_name: XmlMultiElem<string>;
  column_title: XmlMultiElem<string>;
  column_foreign_name: XmlMultiElem<string>;
  column_foreign_catalog_2: XmlMultiElem<string>;
  column_foreign_name_2: XmlMultiElem<string>;
  column_value: XmlMultiElem<string>;
  column_width: XmlMultiElem<number>;
  column_width_unit: XmlMultiElem<string>;
  column_color: XmlMultiElem<string>;
  column_bkcolor: XmlMultiElem<string>;
  datatype: XmlMultiElem<string>;
  flag_formula: XmlMultiElem<boolean>;
  flag_formula_post_process: XmlMultiElem<boolean>;
  flag_color: XmlMultiElem<boolean>;
  flag_visible: XmlMultiElem<boolean>;
  flag_lng: XmlMultiElem<boolean>;
  c_conditions: XmlMultiElem<ColumnBaseColumnCCondition>;
  foreign_elem: XmlMultiElem<ColumnBaseColumnForeignElem>;
}

interface ColumnBase {
  columns: XmlMultiElem<ColumnBaseColumn>;
}

interface CollaboratorChangeLog extends CustomElemsBase {
  id: XmlElem<string>;
  position_id: XmlElem<number>;
  position_name: XmlElem<string>;
  position_parent_id: XmlElem<number>;
  position_parent_name: XmlElem<string>;
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  date: XmlElem<Date>;
  comment: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  working_days: XmlElem<number>;
  working_hours: XmlElem<number>;
  rate: XmlElem<number>;
  rate_percent: XmlElem<number>;
}

interface CollaboratorHistoryState {
  id: XmlElem<string>;
  state_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  comment: XmlElem<string>;
}

interface CollaboratorPersonalConfig {
  avatar_filename: XmlElem<string>;
  nick: XmlElem<string>;
  status: XmlElem<string>;
  default_info_type: XmlElem<string>;
}

interface FuncManagersBaseFuncManager extends PersonFillingBase {
  person_id: XmlElem<number>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number>;
}

interface PathSubBasePathSub {
  id: XmlElem<number>;
  type: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
}

interface PathSubBase {
  path_subs: XmlMultiElem<PathSubBasePathSub>;
  filling_path_subs?(): XmlMultiElem<PathSubBasePathSub>;
}

interface PersonObjectLinksBasePersonObjectProfile {
  person_object_profile_id: XmlElem<number>;
}

interface PersonObjectLinksBasePersonObjectLinkObject {
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  can_edit: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
  access_level: XmlElem<number>;
}

interface PersonObjectLinksBasePersonObjectLink {
  object_catalog: XmlElem<string>;
  all_can_create: XmlElem<boolean>;
  amount: XmlElem<number>;
  all_can_edit: XmlElem<boolean>;
  all_can_delete: XmlElem<boolean>;
  objects: XmlMultiElem<PersonObjectLinksBasePersonObjectLinkObject>;
}

interface PersonObjectLinksBase {
  pol_loaded: XmlElem<boolean>;
  pol_changed: XmlElem<boolean>;
  person_object_profiles: XmlMultiElem<PersonObjectLinksBasePersonObjectProfile>;
  person_object_links: XmlMultiElem<PersonObjectLinksBasePersonObjectLink>;
}

interface CollaboratorCustomParam {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface CollaboratorCompBenPaymentType {
  payment_type_id: XmlElem<number>;
  max_value: XmlElem<number>;
  comment: XmlElem<string>;
}

interface CollaboratorCompBen {
  salary: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  payment_period: XmlElem<string>;
  comment: XmlElem<string>;
  payment_types: XmlMultiElem<CollaboratorCompBenPaymentType>
}

interface PositionCompetenceProfile {
  id: XmlElem<number>;
}

interface CompetenceProfileAssessment {
  assessment_id: XmlElem<number>;
  assessment_score: XmlElem<number>;
}

interface CompetenceProfilePositionCommon {
  position_common_id: XmlElem<number>;
}

interface CompetenceProfileFamilyCompetenceProfile {
  competence_profile_id: XmlElem<number>;
}


interface PositionKPIProfile {
  id: XmlElem<number>;
  period_type_id: XmlElem<string>;
}

interface ChartReportGraphBase {
  disp_legend: XmlElem<boolean>;
  chart_id: XmlElem<string>;
  flag_showvalues: XmlElem<boolean>;
  plot_type: XmlElem<string>;
  flag_open_graph_tun_section: XmlElem<boolean>;
}

interface CatalogListBaseCatalogObject {
  object_id: XmlElem<number>;
  comment: XmlElem<string>;
}

interface CareerReserveTutor {
  person_id: XmlElem<number>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number>;
  is_responsible: XmlElem<boolean>;
  comment: XmlElem<string>;
}

interface CareerReserveComissionPerson {
  person_id: XmlElem<number>;
  score: XmlElem<number>;
  comment: XmlElem<string>;
}

interface AnnalsObjectBaseDataAssessmentTimestamp {
  value: XmlElem<unknown>;
}

interface AnnalsObjectBaseDataAssessmentLatency {
  value: XmlElem<unknown>;
}

interface AnnalsObjectBaseDataAssessmentDuration {
  value: XmlElem<unknown>;
}

interface AnnalsObjectBaseDataAssessment {
  ident: XmlElem<unknown>;
  viewed: XmlElem<unknown>;
  answered: XmlElem<unknown>;
  completed: XmlElem<unknown>;
  timestamp: XmlElem <AnnalsObjectBaseDataAssessmentTimestamp>;
  latency: XmlElem <AnnalsObjectBaseDataAssessmentLatency>;
  duration: XmlElem <AnnalsObjectBaseDataAssessmentDuration>;
}

interface AnnalsObjectBaseDataItemsListSectionitem {
  ident: XmlElem<unknown>;
}

interface AnnalsObjectBaseDataItemsList {
  sectionitem: XmlMultiElem<AnnalsObjectBaseDataItemsListSectionitem>
}

interface AnnalsObjectBaseData {
  assessment: XmlElem <AnnalsObjectBaseDataAssessment>;
  sections: XmlMultiElem<AnnalsObjectBaseDataAssessment & AnnalsObjectBaseDataItemsList>;
}

interface AnnalsObjectBase {
  id: XmlElem<unknown>;
  attempt_id: XmlElem<string>;
  file: XmlElem<string>;
  objtype: XmlElem<string>;
  data: XmlElem <AnnalsObjectBaseData>;
}

interface AnnalsObjectsBase {
  objects: XmlMultiElem<AnnalsObjectBase>;
}

interface AnnalsNumsBase {
  question_num: XmlElem<number>;
  question_answered_num: XmlElem<number>;
  question_passed_num: XmlElem<number>;
}

interface PollReportViewer extends PersonFillingBase {
  person_id: XmlElem<number>;
}

interface PollQuestionEntry {
  id: XmlElem<number>;
  value: XmlElem<string>;
  weight: XmlElem<number>;
  bg_color: XmlElem<string>;
  resource_id: XmlElem<number>;
}

interface PollQuestionRowColumn {
  id: XmlElem<number>;
  value: XmlElem<string>;
  bg_color: XmlElem<string>;
}
interface PollQuestionRow {
  id: XmlElem<number>;
  value: XmlElem<string>;
  bg_color: XmlElem<string>;
  columns: XmlMultiElem<PollQuestionRowColumn>;
}

interface PollQuestion extends CustomElemsBase {
  id: XmlElem<number>;
  type: XmlElem<string>;
  title: XmlElem<string>;
  is_in_table: XmlElem<boolean>;
  show_header: XmlElem<boolean>;
  required: XmlElem<boolean>;
  catalog: XmlElem<string>;
  add_comment: XmlElem<boolean>;
  subtype: XmlElem<number>;
  is_multiple: XmlElem<boolean>;
  value_condition: XmlElem<string>;
  completed: XmlElem<boolean>;
  image_id: XmlElem<number>;

  entries: XmMultiElem <PollQuestionEntry>;
  rows: XmMultiElem <PollQuestionRow>;

  is_current: XmlElem<boolean>;
  catalog_entry_id: XmlElem<number>;
}

interface PollItemRowColumn {
  id: XmlElem<string>;
  bg_color: XmlElem<string>;
  question_id: XmlElem<number>;
  value: XmlElem<string>;
  is_title: XmlElem<boolean>;
}

interface PollItemRow {
  id: XmlElem<string>;
  bg_color: XmlElem<string>;
  question_id: XmlElem<number>;
  value: XmlElem<string>;
  columns: XmlMultiElem<PollItemRowColumn>;
  is_title?(): boolean;
}

interface PollItemCondition {
  id: XmlElem<string>;
  question_id: XmlElem<number>;
  entry_id: XmlElem<number>;
  and_or: XmlElem<string>;
}

interface PollItem {
  id: XmlElem<string>;
  type: XmlElem<string>;
  title: XmlElem<string>;
  question_id: XmlElem<number>;
  required: XmlElem<boolean>;
  resource_type: XmlElem<string>;
  max_duration: XmlElem<number>;
  preparation_time: XmlElem<number>;
  prohibit_viewing: XmlElem<boolean>;
  prohibit_overwriting: XmlElem<boolean>;
  rows: XmlMultiElem<PollItemRow>;
  conditions: XmlMultiElem<PollItemCondition>;
}

interface NotificationRecipient {
  recipient_type: XmlElem<string>;
  func_manager_type_id: number;
  eval_str: XmlElem<string>;
  eval_ids_str: XmlElem<string>;
  notification_template_id: XmlElem<number>;
}

interface NotificationNotificationSystem {
  notification_system_id: XmlElem<number>;
}

interface NotificationTemplateMainObject extends FieldNamesBaseFieldName {
  catalog_name: XmlElem<string>;
  init_field_names: Function;
}

interface WorkflowDataBaseWorkflowField {
  name: XmlElem<string>;
  value: XmlElem<unknown>;
  workflow_state: XmlElem<string>;
}

interface WorkflowDataBaseWorkflowLogEntry {
  create_date: XmlElem<Date>;
  action_id: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  begin_state: XmlElem<string>;
  finish_state: XmlElem<string>;
  submited: XmlElem<boolean>;
}

interface WorkflowDataBaseWorkflowCustomStateCondition {
  type: XmlElem<string>;
  cur_user_type: XmlElem<string>;
  person_id: XmlElem<number>;
  and_or: XmlElem<string>;
  begin_bracket: XmlElem<string>;
  finish_bracket: XmlElem<string>;
}

interface WorkflowDataBaseWorkflowCustomState {
  code: XmlElem<string>;
  name: XmlElem<string>;
  next_workflow_custom_state_code: XmlElem<string>;
  common_state_code: XmlElem<string>;
  conditions: XmlMultiElem<WorkflowDataBaseWorkflowCustomStateCondition>;
  condition_eval_str: XmlElem<string>;
}

interface ILists {
  currency_types: XmlMultiElem<ListsCurrencyType>;
  object_resource_types: XmlMultiElem<ListsObjectResourceType>;
  event_forms: XmlMultiElem<ListsEventForm>;
  organizational_forms: XmlMultiElem<ListsOrganizationalForm>;
  professional_areas: XmlMultiElem<ListsProfessionalArea>;
  facts: XmlMultiElem<ListsFact>;
  web_requirements: XmlMultiElem<ListsWebRequirement>;
  ext_externalscripts: XmlMultiElem<ListsExternalScript>;
  person_states: XmlMultiElem<ListsPersonState>;
}

declare const lists: XmlElem<ILists>;

interface MSDispBlockBase {
  access_block_type: XmlElem<string>;
  obj_title: XmlElem<string>;
  custom_flag: XmlElem<boolean>;
}

interface ImageBase {
  name: XmlElem<string>;
  data: XmlElem<Binary>;
}

interface RubricBase {
  candidate: XmlElem<string>;
  image: XmlElem <ImageBase>;
}

interface ProctoringBaseProctoring extends WebVariablesBase {
  is_basic_variables: XmlElem<boolean>;
  proctoring_system_id: XmlElem<number>;
}

interface ProctoringBase {
  use_proctoring: XmlElem<boolean>;
  proctoring: XmlElem <ProctoringBaseProctoring>;
}

interface MSPeriodityBase {
  trigger_type: XmlElem<string>;
  period: XmlElem<number>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
  all_day: XmlElem<boolean>;
  start_day: XmlElem<number>;
  start_week_day: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  last_run_date: XmlElem<Date>;
}

interface ExecCodeBaseExecCode {
  code_type: XmlElem<string>;
  code_url: XmlElem<string>;
  code_text: XmlElem<string>;
  is_init: XmlElem<boolean>;
  code_temp: XmlElem<string>;
}

interface ExecCodeBase {
  exec_code: XmlElem <ExecCodeBaseExecCode>;
}

interface IAccessRolesAccessBlock {
  id: XmlElem<string>;
  can_read: XmlElem<boolean>;
  can_write: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
}

interface IAccessRolesFuncBlockApplication {
  application_id: XmlElem<number>;
  is_enabled: XmlElem<boolean>;
  access_level: XmlElem<number>;
}

interface IAccessRolesFuncBlock {
  id: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  applications: XmlMultiElem<IAccessRolesFuncBlockApplication>;
}

interface IAccessRoles {
  id: XmlElem<string>;
  name: XmlElem<string>;
  access_blocs: XmlMultiElem<IAccessRolesAccessBlock>;
  can_edit_managers: XmlElem<boolean>;
  admin_configuration_id: XmlElem<number>;
  func_blocks: XmlMultiElem<IAccessRolesFuncBlock>;
}

declare const access_roles: XmlMultiElem<IAccessRoles>;

interface ZonesBaseZone {
  name: XmlElem<string>;
  tag_id: XmlElem<string>;
  style: XmlElem<string>;
  class: XmlElem<string>;
  parent_zone: XmlElem<string>;
  is_mandatory: XmlElem<boolean>;
  position: XmlElem<number>;
}

interface ZonesBase {
  zones: XmlMultiElem<ZonesBaseZone>;
}

interface ObjectTypeBase {
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
}

/**
 * Объект параметров агента.
 */
declare var Param: Object;
/**
 * ID объекта над которым выполняется агент.
 */
declare var OBJECT_ID: number;
declare var OBJECTS_ID_STR: string;
/**
 * Флаг исполнения кода на клиенте.
 */
declare var LdsIsClient: boolean;
/**
 * Флаг исполнения кода на сервере.
 */
declare var LdsIsServer: boolean;

declare var oData: unknown;

declare const LdsCurUserID: number;

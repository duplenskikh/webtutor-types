interface CostCurrencyBase {
  cost: XmlElem<number>;
  cost_nds: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
}

interface CostCurrencyTypeBase extends CostCurrencyBase {
  cost_type: XmlElem<string, typeof common.cost_types>;
}

interface PersonNameBase {
  lastname: XmlElem<string>;
  firstname: XmlElem<string>;
  middlename: XmlElem<string>;
  fullname(): unknown;
  shortname(): unknown;
}

interface DocInfoBaseCreation {
  user_login: XmlElem<string>;
  user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

interface DocInfoBaseModification {
  user_login: XmlElem<string>;
  user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date>;
}

interface DocInfoBase {
  creation: XmlElem<DocInfoBaseCreation>;
  modification: XmlElem<DocInfoBaseModification>;
  invariable: XmlElem<boolean>;
}

interface ViewConditionBase {
  top_elem: XmlElem<string>;
  field: XmlElem<string>;
  title: XmlElem<string>;
  value: XmlElem<string>;
  type: XmlElem<string>;
  option_type: XmlElem<string, typeof common.all_option_types>;
  is_custom_field: XmlElem<boolean>;
  and_or: XmlElem<string>;
  is_multiple: XmlElem<boolean>;
  value_multiple: XmlMultiElemObject<string>;
  bracket: XmlElem<string>;
}

interface ViewConditionsBase {
  conditions: XmlMultiElem<ViewConditionBase>;
  conditions_qual: XmlElem<string>;
}

interface PassportDataBase {
  passport_type_id: XmlElem<string, typeof common.passport_types>;
  series: XmlElem<string>;
  num: XmlElem<string>;
  registration_date: XmlElem<Date>;
  registration_agency: XmlElem<string>;
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

interface DocumentAttributesBase {
  template: XmlElem<string>;
  position: XmlElem<number>;
  is_link: XmlElem<boolean>;
  link_href: XmlElem<string>;
  link_target: XmlElem<string>;
  permit_subscription: XmlElem<boolean>;
}

interface LocalSettingsBase {
  check_version_update: XmlElem<boolean>;
  disp_all_access_blocks: XmlElem<boolean>;
  use_dotnet_zip: XmlElem<boolean>;
  disp_main_access_blocks: XmlElem<boolean>;
}

interface BankAccountBaseBank {
  name: XmlElem<string>;
  address: XmlElem<string>;
  bic: XmlElem<string>;
}

interface BankAccountBase {
  bank: XmlElem<BankAccountBaseBank>;
  no: XmlElem<string>;
  cno: XmlElem<string>;
}

interface EssentialBaseDirector extends PersonNameBase {
  position_name: XmlElem<string, typeof common.position_types>;
  mod_name: XmlElem<PersonNameBase>;
  authority: XmlElem<string>;
}

interface EssentialBaseChiefAccountant extends PersonNameBase {
  mod_name: XmlElem<PersonNameBase>;
}

interface EssentialBaseBankAccount extends BankAccountBase {
  id: XmlElem<string>;
}

interface EssentialBase {
  is_foreign: XmlElem<boolean>;
  swift_code: XmlElem<string>;
  iban_no: XmlElem<string>;
  inn: XmlElem<string>;
  kpp: XmlElem<string>;
  legal_address: XmlElem<string>;
  fact_address: XmlElem<string>;
  okonh: XmlElem<string>;
  okpo: XmlElem<string>;
  ogrn: XmlElem<string>;
  oktmo: XmlElem<string>;
  director: XmlElem<EssentialBaseDirector>;
  chief_accountant: XmlElem<EssentialBaseChiefAccountant>;
  bank_account: XmlElem<EssentialBaseBankAccount>;
}

interface EssentialsBaseEssentials extends EssentialBase {
  code: XmlElem<string>;
  name: XmlElem<string>;
}

interface EssentialsBase {
  essentials: XmlElem<EssentialsBaseEssentials>;
}

interface EventSettingsBaseEventSettings {
  send_type: XmlElem<string>;
  send_collaborators: XmlElem<boolean>;
  send_bosses: XmlElem<boolean>;
  send_lectors: XmlElem<boolean>;
  send_tutors: XmlElem<boolean>;
  send_event_preparations: XmlElem<boolean>;
  show_result_fields: XmlElem<boolean>;
}

interface EventSettingsBase {
  event_settings: XmlElem<EventSettingsBaseEventSettings>;
}

interface OutstaffPeriodsBasePeriod {
  id: XmlElem<string>;
  name: XmlElem<string>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  position_common_name: XmlElem<string>;
  outstaff_contract_id: XmlElem<number, OutstaffContractCatalogDocumentTopElem>;
  outstaff_contract_name: XmlElem<string>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  budget_period_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  ext_time: XmlElem<string>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
  hour_num: XmlElem<number>;
  full_time: XmlElem<boolean>;
  days_length: XmlElem<string>;
  max_cnt: XmlElem<number>;
}

interface OutstaffPeriodsBaseMaterial {
  id: XmlElem<string>;
  outstaff_type_material_id: XmlElem<number, OutstaffTypeMaterialCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  plan_value: XmlElem<number>;
  fact_value: XmlElem<number>;
}

interface OutstaffPeriodsBase {
  periods: XmlMultiElem<OutstaffPeriodsBasePeriod>;
  materials: XmlMultiElem<OutstaffPeriodsBaseMaterial>;
}

interface AccessBase {
  access_level: XmlElem<number>;
  access_role: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  is_arm_admin: XmlElem<boolean>;
  web_banned: XmlElem<boolean>;
  user_group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  is_content_admin: XmlElem<boolean>;
  is_application_admin: XmlElem<boolean>;
}

interface AccessDocBaseAccessRole {
  access_role_id: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
}

interface AccessDocBaseAccessGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
}

interface AccessDocBase extends ViewConditionsBase {
  enable_anonymous_access: XmlElem<boolean>;
  access_level: XmlElem<number>;
  access_roles: XmlMultiElem<AccessDocBaseAccessRole>;
  access_groups: XmlMultiElem<AccessDocBaseAccessGroup>;
  access_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  access_site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  access_host_id: XmlElem<number, HostCatalogDocumentTopElem>;
  web_mode_id: XmlElem<number, WebModeCatalogDocumentTopElem>;
  operator: XmlElem<string>;
}

interface GlobalSettingsBaseWebDesign {
  id: XmlElem<string>;
  name: XmlElem<string>;
  url: XmlElem<string>;
  zip_file_url: XmlElem<string>;
  is_std: XmlElem<boolean>;
}

interface GlobalSettingsBaseWebRules {
  exclude_path_list: XmlElem<string>;
}

interface GlobalSettingsBaseRequiredField {
  name: XmlElem<string>;
  is_web_edit: XmlElem<boolean>;
  is_required: XmlElem<boolean>;
  is_custom: XmlElem<boolean>;
}

interface GlobalSettingsBaseWebApiSettingsFilter {
  pattern_str: XmlElem<string>;
}

interface GlobalSettingsBaseWebApiSettings {
  use_api: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
  access_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  allowed_ip: XmlElem<string>;
  filters: XmlMultiElem<GlobalSettingsBaseWebApiSettingsFilter>;
  default_remote_security_profile: XmlElem<number, RemoteSecurityProfileCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseMobileDocumentReader {
  menu_code: XmlElem<string>;
  days_credentials_update: XmlElem<number>;
  use_favorites: XmlElem<boolean>;
  use_search: XmlElem<boolean>;
  confirmation: XmlElem<string>;
  use_update_stamp: XmlElem<boolean>;
  cs_p: XmlElem<string>;
}

interface GlobalSettingsBaseMobile {
  document_reader: XmlElem<GlobalSettingsBaseMobileDocumentReader>;
}

interface GlobalSettingsBaseVclassHostsHost {
  host: XmlElem<string>;
  path: XmlElem<string>;
}

interface GlobalSettingsBaseVclassHosts {
  host: XmlElem<GlobalSettingsBaseVclassHostsHost>;
}

interface GlobalSettingsBaseLibraryOptions {
  ignore_before_first: XmlElem<boolean>;
}

interface GlobalSettingsBaseLibraryCutMarker {
  tag: XmlElem<string>;
  attr: XmlElem<string>;
  type: XmlElem<number>;
  enabled: XmlElem<boolean>;
}

interface GlobalSettingsBaseLibrary {
  options: XmlElem<GlobalSettingsBaseLibraryOptions>;
  cut_markers: XmlMultiElem<GlobalSettingsBaseLibraryCutMarker>;
}

interface GlobalSettingsBaseOwnOrg extends EssentialsBase {
  name: XmlElem<string>;
  phone: XmlElem<string>;
  email: XmlElem<string>;
  smtp_server: XmlElem<string>;
  use_smtp_authenticate: XmlElem<boolean>;
  smtp_login: XmlElem<string>;
  smtp_password: XmlElem<string>;
  after_send_action: XmlElem<string>;
  sent_save_hours: XmlElem<number>;
  send_attempt_num: XmlElem<number>;
  default_notification_system_id: XmlElem<number, NotificationSystemCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseLng {
  id: XmlElem<string>;
  name: XmlElem<string>;
  lng_file_url: XmlElem<string>;
}

interface GlobalSettingsBaseRecruitment {
  default_request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  recruitment_system_id: XmlElem<number, RecruitmentSystemCatalogDocumentTopElem>;
  estaff_server_url: XmlElem<string>;
  estaff_login: XmlElem<string>;
  estaff_password: XmlElem<string>;
  estaff_subdivisions_script: XmlElem<string>;
}

interface GlobalSettingsBaseWebsoftPluginServer {
  url: XmlElem<string>;
  login: XmlElem<string>;
  password: XmlElem<string>;
}

interface GlobalSettingsBaseExternalWebPlayers {
  ext_x_lite_grid: XmlElem<boolean>;
  ext_hardcore_source: XmlElem<boolean>;
  openurl_eq_openwindow: XmlElem<boolean>;
}

interface GlobalSettingsBaseCalendar {
  access: XmlElem<AccessDocBase>;
}

interface GlobalSettingsBasePpmMatrixRowColumn {
  id: XmlElem<number, DevelopmentPotentialCatalogDocumentTopElem>;
  value: XmlElem<string>;
  pict_url: XmlElem<string>;
  is_base: XmlElem<boolean>;
  comment: XmlElem<string>;
  cell_color: XmlElem<string>;
}

interface GlobalSettingsBasePpmMatrixRow {
  id: XmlElem<number, EfficiencyEstimationCatalogDocumentTopElem>;
  columns: XmlMultiElem<GlobalSettingsBasePpmMatrixRowColumn>;
}

interface GlobalSettingsBasePpmMatrix {
  line_name: XmlElem<string>;
  column_name: XmlElem<string>;
  rows: XmlMultiElem<GlobalSettingsBasePpmMatrixRow>;
}

interface GlobalSettingsBaseStatistics {
  calculate_statistics: XmlElem<boolean>;
  calculation_period: XmlElem<number>;
}

interface GlobalSettingsBaseScriptQueues {
  enable_queues: XmlElem<boolean>;
  running_period: XmlElem<number>;
  clear_period: XmlElem<number>;
}

interface GlobalSettingsBaseOutstaffOutstaffBossType {
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseOutstaff extends OutstaffPeriodsBase {
  outstaff_boss_types: XmlMultiElem<GlobalSettingsBaseOutstaffOutstaffBossType>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseProjectOptions {
  use_custom_project_status: XmlElem<boolean>;
  use_custom_project_icon: XmlElem<boolean>;
}

interface GlobalSettingsBaseProjectProjectStatusType {
  id: XmlElem<string, typeof common.project_status_types>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
  action_name: XmlElem<string>;
}

interface GlobalSettingsBaseProject {
  options: XmlElem<GlobalSettingsBaseProjectOptions>;
  project_status_types: XmlMultiElem<GlobalSettingsBaseProjectProjectStatusType>;
  project_icon_script: XmlElem<string>;
}

interface GlobalSettingsBaseProjectTaskOptions {
  use_custom_project_task_status: XmlElem<boolean>;
  use_custom_project_task_icon: XmlElem<boolean>;
}

interface GlobalSettingsBaseProjectTaskProjectTaskStatusType {
  id: XmlElem<string, typeof common.task_statuses>;
  name: XmlElem<string>;
  text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface GlobalSettingsBaseProjectTask {
  options: XmlElem<GlobalSettingsBaseProjectTaskOptions>;
  project_task_status_types: XmlMultiElem<GlobalSettingsBaseProjectTaskProjectTaskStatusType>;
  project_task_icon_script: XmlElem<string>;
}

interface GlobalSettingsBaseCl {
  use_constants: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
  access_setting: XmlElem<string>;
}

interface GlobalSettingsBaseKnowlcntrl {
  default_expert_id: XmlElem<number, ExpertCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseLds {
  brute_password_check: XmlElem<boolean>;
  brute_password_count: XmlElem<number>;
  brute_password_period: XmlElem<number>;
}

interface GlobalSettingsBase extends EventSettingsBase {
  default_web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  web_designs: XmlMultiElem<GlobalSettingsBaseWebDesign>;
  portal_base_url: XmlElem<string>;
  use_personal_chat_global_policy: XmlElem<boolean>;
  personal_chat_confirmation_required: XmlElem<boolean>;
  max_message_in_block_count: XmlElem<number>;
  conversation_visible_type_id: XmlElem<string, typeof common.conversation_visible_types>;
  use_queue_in_chat: XmlElem<boolean>;
  use_mobile_chat: XmlElem<boolean>;
  default_conversation_type_id: XmlElem<number, ConversationTypeCatalogDocumentTopElem>;
  auth_check_eval: XmlElem<string>;
  auth_site_access_failed_eval: XmlElem<string>;
  login_case_sensitive: XmlElem<boolean>;
  login_domen_sensitive: XmlElem<boolean>;
  use_auth_session: XmlElem<boolean>;
  auth_session_life_time: XmlElem<number>;
  template_cache_type: XmlElem<string, typeof common.template_cache_types>;
  use_web_rules: XmlElem<boolean>;
  web_rules: XmlElem<GlobalSettingsBaseWebRules>;
  default_file_source_id: XmlElem<number>;
  search_in_trash: XmlElem<boolean>;
  check_sid: XmlElem<boolean>;
  disp_wellcome_screen: XmlElem<boolean>;
  disp_anonymous_polls: XmlElem<boolean>;
  check_user_required_fields: XmlElem<boolean>;
  required_fields: XmlMultiElem<GlobalSettingsBaseRequiredField>;
  web_api_settings: XmlElem<GlobalSettingsBaseWebApiSettings>;
  mobile: XmlElem<GlobalSettingsBaseMobile>;
  default_contact_type_id: XmlElem<number, ContactTypeCatalogDocumentTopElem>;
  default_contact_result_id: XmlElem<number, ContactResultCatalogDocumentTopElem>;
  allow_self_register: XmlElem<boolean>;
  self_register_group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  web_banned_self_register: XmlElem<boolean>;
  self_register_disp_custom_elems: XmlElem<boolean>;
  self_register_disp_subs: XmlElem<boolean>;
  self_register_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  self_register_subdivision_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  self_register_position_name: XmlElem<string>;
  self_register_use_position_commons: XmlElem<boolean>;
  eval_post_registration_script: XmlElem<boolean>;
  post_registration_script: XmlElem<string>;
  eval_prev_registration_script: XmlElem<boolean>;
  prev_registration_script: XmlElem<string>;
  script_create_login: XmlElem<boolean>;
  script_create_password: XmlElem<boolean>;
  vclass_hosts: XmlElem<GlobalSettingsBaseVclassHosts>;
  library: XmlElem<GlobalSettingsBaseLibrary>;
  save_exchange_data_files: XmlElem<boolean>;
  auto_exchange_data: XmlElem<boolean>;
  exchange_period: XmlElem<number>;
  url_exchange_results: XmlElem<string>;
  password_format: XmlElem<string>;
  password_auto_rebuild: XmlElem<boolean>;
  pass_validation_formula: XmlElem<string>;
  fill_path_subs: XmlElem<boolean>;
  check_access_on_lists: XmlElem<boolean>;
  save_deleted_in_trash: XmlElem<boolean>;
  fill_path_places: XmlElem<boolean>;
  show_creator_editor_name: XmlElem<boolean>;
  show_creator_in_reports: XmlElem<boolean>;
  save_person_change_log: XmlElem<boolean>;
  script_evaluation_cutoff: XmlElem<number>;
  max_report_visible_rows: XmlElem<number>;
  default_currency: XmlElem<string, typeof lists.currency_types>;
  default_cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  default_expense_item_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  cost_center_priority: XmlElem<string>;
  timezone_id: XmlElem<number, typeof common.timezones>;
  auto_select_status_edu_plan: XmlElem<boolean>;
  soft_kill_before_regenerate: XmlElem<boolean>;
  check_wf_access_assessment: XmlElem<boolean>;
  own_org: XmlElem<GlobalSettingsBaseOwnOrg>;
  default_lng: XmlElem<string>;
  lngs: XmlMultiElem<GlobalSettingsBaseLng>;
  recruitment: XmlElem<GlobalSettingsBaseRecruitment>;
  delete_unused_resource: XmlElem<boolean>;
  admin_not_auth: XmlElem<boolean>;
  default_event_result_type_id: XmlElem<number, EventResultTypeCatalogDocumentTopElem>;
  disp_log_web_request: XmlElem<boolean>;
  log_web_request_rec_unloged: XmlElem<boolean>;
  web_request_logging_str: XmlElem<string>;
  disp_log_debug: XmlElem<boolean>;
  disp_log_mail_trans: XmlElem<boolean>;
  tracing: XmlElem<boolean>;
  tracing_timeout: XmlElem<number>;
  export_odbc_commant_timeout: XmlElem<number>;
  not_use_doc_contains: XmlElem<boolean>;
  not_use_doc_contains_str_begins: XmlElem<boolean>;
  email_empty_create_notification: XmlElem<boolean>;
  show_all_persons: XmlElem<boolean>;
  websoft_plugin_server: XmlElem<GlobalSettingsBaseWebsoftPluginServer>;
  disp_social_block: XmlElem<boolean>;
  social_avatar_priority: XmlElem<string, typeof common.social_avatar_priority_types>;
  portal_tracking_type: XmlElem<string>;
  external_web_players: XmlElem<GlobalSettingsBaseExternalWebPlayers>;
  calendar: XmlElem<GlobalSettingsBaseCalendar>;
  key_position_threat_script: XmlElem<string>;
  ppm_matrix: XmlElem<GlobalSettingsBasePpmMatrix>;
  statistics: XmlElem<GlobalSettingsBaseStatistics>;
  script_queues: XmlElem<GlobalSettingsBaseScriptQueues>;
  digital_signature_control: XmlElem<string>;
  use_time_stamp_server: XmlElem<boolean>;
  time_stamp_server_address: XmlElem<string>;
  use_profiling: XmlElem<boolean>;
  default_webinar_system_id: XmlElem<number, WebinarSystemCatalogDocumentTopElem>;
  lds_url_pattern: XmlElem<string>;
  outstaff: XmlElem<GlobalSettingsBaseOutstaff>;
  send_learning_additional_info: XmlElem<boolean>;
  set_st_category: XmlElem<boolean>;
  use_queue_learnings: XmlElem<boolean>;
  project: XmlElem<GlobalSettingsBaseProject>;
  project_task: XmlElem<GlobalSettingsBaseProjectTask>;
  server_agent_time_start: XmlElem<boolean>;
  cl: XmlElem<GlobalSettingsBaseCl>;
  knowlcntrl: XmlElem<GlobalSettingsBaseKnowlcntrl>;
  brute_password_check: XmlElem<boolean>;
  brute_password_count: XmlElem<number>;
  brute_password_period: XmlElem<number>;
  lds: XmlElem<GlobalSettingsBaseLds>;
  design_vscode_save_default: XmlElem<string, typeof common.design_vscode_save_types>;
  design_vscode_access: XmlElem<string, typeof common.design_vscode_access_types>;
  single_learning_session: XmlElem<boolean>;
  unique_id_slot: XmlElem<number>;
  use_ws_idm: XmlElem<boolean>;
}

interface InsertFileBase {
  file_name: XmlElem<string>;
  data: XmlElem<Binary>;
}

interface FileActionBase {
  AssignFile(fileUrl: unknown, source: unknown, params: unknown): unknown;
  DeleteFile(source: unknown): unknown;
  SaveFile(fileUrl: unknown): unknown;
  AddFile(fileId: number, source: unknown): unknown;
}

interface FileBase {
  file_id: XmlElem<number, ResourceCatalogDocumentTopElem> & FileActionBase;
}

interface FileListBase {
  files: XmlMultiElem<FileBase>;
  AddFile(fileId: number, docResource: unknown): unknown;
}

interface CoursePartBase {
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  max_score: XmlElem<number>;
  mastery_score: XmlElem<number>;
  url: XmlElem<string>;
  parent_part_code: XmlElem<string>;
  visible: XmlElem<boolean>;
}

interface CoursePartsBase {
  parts: XmlMultiElem<CoursePartBase>;
}

interface ImportExcelPersonsBaseColumn {
  index: XmlElem<number>;
  field_name: XmlElem<string, typeof common.field_name_types>;
  eval_str: XmlElem<string>;
  is_key: XmlElem<boolean>;
}

interface ImportExcelPersonsBaseCollaboratorCustomField {
  index: XmlElem<number>;
  name: XmlElem<string>;
}

interface ImportExcelPersonsBaseCollaborator {
  custom_fields: XmlMultiElem<ImportExcelPersonsBaseCollaboratorCustomField>;
}

interface ImportExcelPersonsBase {
  file_url: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  columns: XmlMultiElem<ImportExcelPersonsBaseColumn>;
  collaborator: XmlElem<ImportExcelPersonsBaseCollaborator>;
  web_banned: XmlElem<boolean>;
  send_notification: XmlElem<boolean>;
  update_data: XmlElem<boolean>;
  create_password_type: XmlElem<string>;
  common_password: XmlElem<string>;
  password_digits_num: XmlElem<number>;
  miss_first_row: XmlElem<boolean>;
  show_warnings: XmlElem<boolean>;
  block_import: XmlElem<boolean>;
  create_org_type: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  separator: XmlElem<string>;
  pre_eval_code: XmlElem<string>;
  reg_eval_code: XmlElem<string>;
}

interface OrgBase extends EssentialsBase {
  id: XmlElem<number>;
  code: XmlElem<string>;
  disp_name: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  postal_address: XmlElem<string>;
  phone: XmlElem<string>;
  fax: XmlElem<string>;
  email: XmlElem<string>;
  web: XmlElem<string>;
}

interface ProgramMethodBase extends CostCurrencyTypeBase {
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.education_method_types>;
  state_id: XmlElem<string, typeof common.education_method_states>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  duration: XmlElem<number>;
  duration_days: XmlElem<number>;
  person_num: XmlElem<number>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  desc: XmlElem<string>;
}

interface LectorsBaseLector {
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  hours: XmlElem<number>;
  weekend_hours: XmlElem<number>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
  comment: XmlElem<string>;
}

interface LectorsBase {
  lectors: XmlMultiElem<LectorsBaseLector>;
}

interface AccessRoleBaseAccessBloc {
  id: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  can_read: XmlElem<boolean>;
  can_write: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
}

interface AccessRoleBaseFuncBlockApplication {
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
  application_code: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  access_level: XmlElem<number>;
}

interface AccessRoleBaseFuncBlock {
  id: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  applications: XmlMultiElem<AccessRoleBaseFuncBlockApplication>;
}

interface AccessRoleBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  access_blocs: XmlMultiElem<AccessRoleBaseAccessBloc>;
  can_edit_managers: XmlElem<boolean>;
  can_edit_access: XmlElem<boolean>;
  admin_configuration_id: XmlElem<number, AdminConfigurationCatalogDocumentTopElem>;
  func_blocks: XmlMultiElem<AccessRoleBaseFuncBlock>;
}

interface WorkflowDataBaseWorkflowField {
  name: XmlElem<string>;
  value: XmlElem<string>;
  workflow_state: XmlElem<string>;
}

interface WorkflowDataBaseWorkflowLogEntry {
  create_date: XmlElem<Date>;
  action_id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  begin_state: XmlElem<string>;
  finish_state: XmlElem<string>;
  submited: XmlElem<boolean>;
}

interface WorkflowDataBaseWorkflowCustomStateCondition {
  type: XmlElem<string>;
  cur_user_type: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
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

interface WorkflowDataBase {
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_state_last_date: XmlElem<Date>;
  get_workflow_state_name(workflowDoc: unknown): unknown;
  set_workflow_state_last_date(param: unknown): unknown;
  add_workflow_log_entry(param: unknown): unknown;
  is_workflow_init: XmlElem<boolean>;
  workflow_fields: XmlMultiElem<WorkflowDataBaseWorkflowField>;
  workflow_log_entrys: XmlMultiElem<WorkflowDataBaseWorkflowLogEntry>;
  workflow_custom_states: XmlMultiElem<WorkflowDataBaseWorkflowCustomState>;
}

interface ConditionBase {
  type: XmlElem<string>;
  workflow_field_id: XmlElem<string>;
  workflow_field_value: XmlElem<string>;
  workflow_state_id: XmlElem<string>;
  cur_user_type: XmlElem<string>;
  and_or: XmlElem<string>;
  begin_bracket: XmlElem<string>;
  finish_bracket: XmlElem<string>;
  usl: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  eval_str: XmlElem<string>;
  cur_access_role: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  cur_parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  cur_position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  cur_group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  cur_activity_id: XmlElem<number, ActivityCatalogDocumentTopElem>;
}

interface ConditionsBase {
  conditions: XmlMultiElem<ConditionBase>;
  condition_eval_str: XmlElem<string>;
  desc_str: XmlElem<string>;
  has_error: XmlElem<boolean>;
  is_false: XmlElem<boolean>;
  error_eval(): unknown;
}

interface PersonFillingBase {
  person_fullname: XmlElem<string>;
  person_position_id: XmlElem<number>;
  person_position_name: XmlElem<string>;
  person_position_code: XmlElem<string>;
  person_org_id: XmlElem<number>;
  person_org_name: XmlElem<string>;
  person_org_code: XmlElem<string>;
  person_subdivision_id: XmlElem<number>;
  person_subdivision_name: XmlElem<string>;
  person_subdivision_code: XmlElem<string>;
  person_instance_id: XmlElem<string>;
  person_code: XmlElem<string>;
}

interface PersonForeignBase {
  person_fullname(): unknown;
  person_position_name(): unknown;
  person_org_name(): unknown;
  person_subdivision_name(): unknown;
  person_instance_id(): unknown;
  person_code(): unknown;
}

interface ServerBase {
  code: XmlElem<string>;
  password: XmlElem<string>;
  name: XmlElem<string>;
  customer: XmlElem<string>;
  package_url: XmlElem<string>;
  select_action: XmlElem<string>;
  default_replication_time: XmlElem<string>;
  create_exchange_server: XmlElem<boolean>;
  web_design_url: XmlElem<string>;
  custom_templates_url: XmlElem<string>;
  access_roles_url: XmlElem<string>;
  lists_url: XmlElem<string>;
  lngs_url: XmlElem<string>;
  license_file_url: XmlElem<string>;
  dlg_select_server_url: XmlElem<string>;
  start_info_url: XmlElem<string>;
  default_lng: XmlElem<string>;
  default_web_design: XmlElem<string>;
  recovery_empty_lng_const: XmlElem<boolean>;
}

interface SelectServerBaseInstall {
  skip_reg_page: XmlElem<boolean>;
  reg_user_name: XmlElem<string>;
  reg_org_name: XmlElem<string>;
}

interface SelectServerBase extends ServerBase {
  title_text: XmlElem<string>;
  label_text: XmlElem<string>;
  disp_select_password: XmlElem<boolean>;
  disp_select_replication_time: XmlElem<boolean>;
  selector_type: XmlElem<string>;
  servers: XmlMultiElem<ServerBase>;
  replication_time: XmlElem<string>;
  install: XmlElem<SelectServerBaseInstall>;
}

interface ViewColumnsBaseColumnTileItem {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  collor: XmlElem<string>;
}

interface ViewColumnsBaseColumn {
  name: XmlElem<string>;
  type: XmlElem<string>;
  const: XmlElem<string>;
  width: XmlElem<string>;
  order: XmlElem<string>;
  order_field(): unknown;
  sort_field: XmlElem<string>;
  is_default: XmlElem<boolean>;
  category_field: XmlElem<string>;
  category_type: XmlElem<string>;
  catalog_name: XmlElem<string>;
  is_link: XmlElem<boolean>;
  tile_items: XmlMultiElem<ViewColumnsBaseColumnTileItem>;
  bk_color: XmlElem<string>;
  text_color: XmlElem<string>;
  prohibit_sort: XmlElem<boolean>;
}

interface ViewColumnsBase {
  disp_new_button: XmlElem<boolean>;
  new_button_text: XmlElem<string>;
  row_bk_color: XmlElem<string>;
  xquery_qual: XmlElem<string>;
  row_image_url: XmlElem<string>;
  disp_role_selector: XmlElem<boolean>;
  data_fields: XmlElem<string>;
  columns: XmlMultiElem<ViewColumnsBaseColumn>;
}

interface CatalogListBaseCatalogObject {
  object_id: XmlElem<number>;
  comment: XmlElem<string>;
}

interface CatalogListBaseCatalog {
  type: XmlElem<string, typeof common.exchange_object_types>;
  title: XmlElem<string>;
  all: XmlElem<boolean>;
  objects: XmlMultiElem<CatalogListBaseCatalogObject>;
}

interface CatalogListBase {
  catalogs: XmlMultiElem<CatalogListBaseCatalog>;
}

interface ExpenseDistributionBaseExpenseItem {
  expense_item_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
}

interface ExpenseDistributionBase {
  expense_items: XmlMultiElem<ExpenseDistributionBaseExpenseItem>;
  expense_item_sum(): unknown;
}

interface ExchangeListsBaseObjectResourceType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ExchangeListsBaseCurrencyTypeModName {
  id: XmlElem<number>;
  name: XmlElem<string>;
  cent_name: XmlElem<string>;
}

interface ExchangeListsBaseCurrencyType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  short_name: XmlElem<string>;
  cent_name: XmlElem<string>;
  infinite: XmlElem<boolean>;
  image_link: XmlElem<string>;
  archive: XmlElem<boolean>;
  mod_names: XmlMultiElem<ExchangeListsBaseCurrencyTypeModName>;
}

interface ExchangeListsBaseLocation {
  id: XmlElem<string>;
  name: XmlElem<string>;
  url: XmlElem<string>;
  tracking_url: XmlElem<string>;
}

interface ExchangeListsBaseBenefit {
  name: XmlElem<string>;
}

interface ExchangeListsBaseEventForm {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ExchangeListsBaseOrganizationalForm {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ExchangeListsBaseFactColumn {
  id: XmlElem<string>;
  name: XmlElem<string>;
  query_name: XmlElem<string>;
  title: XmlElem<string>;
}

interface ExchangeListsBaseFactExtraColumn {
  id: XmlElem<number>;
  name: XmlElem<string>;
  title: XmlElem<string>;
}

interface ExchangeListsBaseFact {
  id: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<number>;
  catalog: XmlElem<string>;
  columns: XmlMultiElem<ExchangeListsBaseFactColumn>;
  extra_columns: XmlMultiElem<ExchangeListsBaseFactExtraColumn>;
}

interface ExchangeListsBaseFilter {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface ExchangeListsBasePersonState {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ExchangeListsBaseProfessionalArea {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ExchangeListsBaseImportExcelPersonScheme extends ImportExcelPersonsBase {
  name: XmlElem<string>;
}

interface ExchangeListsBaseWebRequirement {
  id: XmlElem<string>;
  name: XmlElem<string>;
  is_std: XmlElem<boolean>;
}

interface ExchangeListsBaseExtExternalscript {
  id: XmlElem<string>;
  source_url: XmlElem<string>;
}

interface ExchangeListsBaseCompetenceType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface ExchangeListsBase {
  object_resource_types: XmlMultiElem<ExchangeListsBaseObjectResourceType>;
  currency_types: XmlMultiElem<ExchangeListsBaseCurrencyType>;
  locations: XmlMultiElem<ExchangeListsBaseLocation>;
  benefits: XmlMultiElem<ExchangeListsBaseBenefit>;
  event_forms: XmlMultiElem<ExchangeListsBaseEventForm>;
  organizational_forms: XmlMultiElem<ExchangeListsBaseOrganizationalForm>;
  facts: XmlMultiElem<ExchangeListsBaseFact>;
  filters: XmlMultiElem<ExchangeListsBaseFilter>;
  person_states: XmlMultiElem<ExchangeListsBasePersonState>;
  professional_areas: XmlMultiElem<ExchangeListsBaseProfessionalArea>;
  import_excel_person_schemes: XmlMultiElem<ExchangeListsBaseImportExcelPersonScheme>;
  web_requirements: XmlMultiElem<ExchangeListsBaseWebRequirement>;
  ext_externalscripts: XmlMultiElem<ExchangeListsBaseExtExternalscript>;
  competence_types: XmlMultiElem<ExchangeListsBaseCompetenceType>;
}

interface WorkflowFieldsStatesBaseWorkflowFieldEntry {
  value: XmlElem<string>;
}

interface WorkflowFieldsStatesBaseWorkflowField {
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  title: XmlElem<string>;
  tooltip: XmlElem<string>;
  xquery_qual: XmlElem<string>;
  entries: XmlMultiElem<WorkflowFieldsStatesBaseWorkflowFieldEntry>;
  external_value: XmlElem<string>;
  external_array: XmlElem<string>;
  field_group_id: XmlElem<string>;
  is_required: XmlElem<boolean>;
}

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

interface FuncManagersBaseFuncManager extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  subordinate_position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
}

interface FuncManagersBasePositionManager {
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
}

interface FuncManagersBase {
  func_managers: XmlMultiElem<FuncManagersBaseFuncManager>;
  position_managers: XmlMultiElem<FuncManagersBasePositionManager>;
  obtain_func_manager_by_id(personId: number, isNative: unknown): unknown;
}

interface AdminAccessBase {
  user_access_role: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  user_group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
}

interface DocumentPersonsBaseDocumentPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  can_create: XmlElem<boolean>;
  can_edit: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
}

interface DocumentPersonsBase {
  document_persons: XmlMultiElem<DocumentPersonsBaseDocumentPerson>;
}

interface PathSubsBasePathSub {
  id: XmlElem<number, SubCatalogDocumentTopElem>;
  type: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number, SubCatalogDocumentTopElem>;
}

interface PathSubsBase {
  path_subs: XmlMultiElem<PathSubsBasePathSub>;
  filling_path_subs(): unknown;
}

interface AssessmentScaleValueScale {
  id: XmlElem<string>;
  name: XmlElem<string>;
  value: XmlElem<number>;
  value_str: XmlElem<string>;
}

interface AssessmentScaleValue {
  scales: XmlMultiElem<AssessmentScaleValueScale>;
}

interface ConstantItemBase {
  id: XmlElem<string>;
  rus_text: XmlElem<string>;
  rus_text_len: XmlElem<number>;
  line_text: XmlElem<string>;
  code: XmlElem<string>;
  line_index: XmlElem<number>;
  index: XmlElem<number>;
  col_index: XmlElem<number>;
  source_url: XmlElem<string>;
  source_url_full: XmlElem<string>;
  before_attr_name: XmlElem<string>;
  synonym: XmlElem<string>;
  synonym_type: XmlElem<string>;
  synonym_id: XmlElem<string>;
  web_lng_id: XmlElem<string>;
  lng_synonym_id: XmlElem<string>;
  type: XmlElem<string>;
  before_char: XmlElem<string>;
  after_char: XmlElem<string>;
  is_line_repeat: XmlElem<boolean>;
  is_const_block: XmlElem<boolean>;
}

interface LastAttemptTestLearningsBaseTestLearning {
  test_learning_id: XmlElem<number, TestLearningCatalogDocumentTopElem>;
  state_id: XmlElem<number, typeof common.learning_states>;
  score: XmlElem<number>;
  start_usage_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
}

interface LastAttemptTestLearningsBase {
  test_learnings: XmlMultiElem<LastAttemptTestLearningsBaseTestLearning>;
}

interface DescBase {
  desc_update_hyper_object(): unknown;
  desc_save(descOff: boolean): unknown;
  get_desc(source: unknown): unknown;
}

interface AccessBlockBaseStructureItemItemItem {
  id: XmlElem<string>;
  title: XmlElem<string>;
  href: XmlElem<string>;
  icon: XmlElem<string>;
  access_block_id: XmlElem<string>;
  person_link_field: XmlElem<string>;
  person_link_catalog_name: XmlElem<string>;
}

interface AccessBlockBaseStructureItemItem {
  id: XmlElem<string>;
  title: XmlElem<string>;
  href: XmlElem<string>;
  icon: XmlElem<string>;
  access_block_id: XmlElem<string>;
  person_link_field: XmlElem<string>;
  person_link_catalog_name: XmlElem<string>;
  items: XmlMultiElem<AccessBlockBaseStructureItemItemItem>;
}

interface AccessBlockBaseStructureItem {
  id: XmlElem<string>;
  title: XmlElem<string>;
  href: XmlElem<string>;
  icon: XmlElem<string>;
  access_block_id: XmlElem<string>;
  person_link_field: XmlElem<string>;
  person_link_catalog_name: XmlElem<string>;
  items: XmlMultiElem<AccessBlockBaseStructureItemItem>;
}

interface AccessBlockBaseStructure {
  items: XmlMultiElem<AccessBlockBaseStructureItem>;
}

interface AccessBlockBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  objects_access: XmlElem<string>;
  icon_url: XmlElem<string>;
  first_catalog_url: XmlElem<string>;
  disp: XmlElem<boolean>;
  sys: XmlElem<boolean>;
  license_catalogs: XmlElem<string>;
  list_index: XmlElem<number>;
  structure: XmlElem<AccessBlockBaseStructure>;
  is_default: XmlElem<boolean>;
}

interface CompetenceScaleBaseScale {
  id: XmlElem<string>;
  name: XmlElem<string>;
  percent: XmlElem<number>;
  desc: XmlElem<string>;
  comment_require: XmlElem<boolean>;
}

interface CompetenceScaleBase {
  scales: XmlMultiElem<CompetenceScaleBaseScale>;
}

interface CompetenceLevelBaseLevelEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

interface CompetenceLevelBaseLevelAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  assessment_score: XmlElem<number>;
}

interface CompetenceLevelBaseLevelDevelopmentMethod {
  development_method_id: XmlElem<number, DevelopmentMethodCatalogDocumentTopElem>;
}

interface CompetenceLevelBaseLevel {
  scale_id: XmlElem<string>;
  scale_name: XmlElem<string>;
  education_methods: XmlMultiElem<CompetenceLevelBaseLevelEducationMethod>;
  assessments: XmlMultiElem<CompetenceLevelBaseLevelAssessment>;
  development_methods: XmlMultiElem<CompetenceLevelBaseLevelDevelopmentMethod>;
}

interface CompetenceLevelBase {
  levels: XmlMultiElem<CompetenceLevelBaseLevel>;
}

interface SupplementaryQuestionsBaseSupplementaryQuestion {
  supplementary_question_id: XmlElem<number, SupplementaryQuestionCatalogDocumentTopElem>;
  supplementary_question_name: XmlElem<string>;
  supplementary_question_type: XmlElem<string>;
  supplementary_question_mark: XmlElem<string>;
  supplementary_question_group: XmlElem<string>;
}

interface SupplementaryQuestionsBase {
  supplementary_questions: XmlMultiElem<SupplementaryQuestionsBaseSupplementaryQuestion>;
}

interface WorkflowFieldsAssessmentBaseWorkflowField {
  name: XmlElem<string>;
  type: XmlElem<string>;
  title: XmlElem<string>;
  field_group_id: XmlElem<string>;
  value: XmlElem<string>;
  is_major: XmlElem<boolean>;
}

interface WorkflowFieldsAssessmentBase {
  workflow_fields: XmlMultiElem<WorkflowFieldsAssessmentBaseWorkflowField>;
}

interface ViewAssessmentAppraiseCompetenceReportBaseBlockCompetenceStatus {
  status_id: XmlElem<string, typeof common.assessment_appraise_participants>;
  mark: XmlElem<number>;
  count: XmlElem<number>;
  weight: XmlElem<number>;
}

interface ViewAssessmentAppraiseCompetenceReportBaseBlockCompetence {
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  competence_name: XmlElem<string>;
  competence_mark: XmlElem<number>;
  competence_weight: XmlElem<number>;
  test_mark: XmlElem<number>;
  test_weight: XmlElem<number>;
  statuses: XmlMultiElem<ViewAssessmentAppraiseCompetenceReportBaseBlockCompetenceStatus>;
}

interface ViewAssessmentAppraiseCompetenceReportBaseBlockGlobalResults {
  previous_mark: XmlElem<number>;
  previous_weight: XmlElem<number>;
  current_weight: XmlElem<number>;
  result_mark: XmlElem<number>;
}

interface ViewAssessmentAppraiseCompetenceReportBaseBlock {
  block_id: XmlElem<number, CompetenceBlockCatalogDocumentTopElem>;
  block_name: XmlElem<string>;
  block_mark: XmlElem<number>;
  competences: XmlMultiElem<ViewAssessmentAppraiseCompetenceReportBaseBlockCompetence>;
  global_results: XmlElem<ViewAssessmentAppraiseCompetenceReportBaseBlockGlobalResults>;
}

interface ViewAssessmentAppraiseCompetenceReportBase {
  pa_id: XmlElem<number, PaCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  test_weight: XmlElem<number>;
  blocks: XmlMultiElem<ViewAssessmentAppraiseCompetenceReportBaseBlock>;
}

interface DevelopmentPlanDataBaseCompetenceDevelopmentMethodEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBaseCompetenceDevelopmentMethod {
  development_method_id: XmlElem<number, DevelopmentMethodCatalogDocumentTopElem>;
  education_methods: XmlMultiElem<DevelopmentPlanDataBaseCompetenceDevelopmentMethodEducationMethod>;
}

interface DevelopmentPlanDataBaseCompetenceEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBaseCompetenceEducationTypeEducationObject {
  education_object_id: XmlElem<number>;
}

interface DevelopmentPlanDataBaseCompetenceEducationType {
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  education_objects: XmlMultiElem<DevelopmentPlanDataBaseCompetenceEducationTypeEducationObject>;
}

interface DevelopmentPlanDataBaseCompetenceAim {
  task: XmlElem<string>;
  target_date: XmlElem<Date>;
  value: XmlElem<string>;
  status: XmlElem<string, typeof common.assessment_appraise_statuses>;
  comment: XmlElem<string>;
}

interface DevelopmentPlanDataBaseCompetence extends WorkflowFieldsAssessmentBase {
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  development_methods: XmlMultiElem<DevelopmentPlanDataBaseCompetenceDevelopmentMethod>;
  education_methods: XmlMultiElem<DevelopmentPlanDataBaseCompetenceEducationMethod>;
  education_types: XmlMultiElem<DevelopmentPlanDataBaseCompetenceEducationType>;
  education_comment: XmlElem<string>;
  aims: XmlMultiElem<DevelopmentPlanDataBaseCompetenceAim>;
  comment: XmlElem<string>;
}

interface DevelopmentPlanDataBaseIndicatorDevelopmentMethod {
  development_method_id: XmlElem<number, DevelopmentMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBaseIndicatorEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBaseIndicatorEducationTypeEducationObject {
  education_object_id: XmlElem<number>;
}

interface DevelopmentPlanDataBaseIndicatorEducationType {
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  education_objects: XmlMultiElem<DevelopmentPlanDataBaseIndicatorEducationTypeEducationObject>;
}

interface DevelopmentPlanDataBaseIndicatorAim {
  task: XmlElem<string>;
  target_date: XmlElem<Date>;
  value: XmlElem<string>;
  status: XmlElem<string, typeof common.assessment_appraise_statuses>;
  comment: XmlElem<string>;
}

interface DevelopmentPlanDataBaseIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id: XmlElem<number, IndicatorCatalogDocumentTopElem>;
  development_methods: XmlMultiElem<DevelopmentPlanDataBaseIndicatorDevelopmentMethod>;
  education_methods: XmlMultiElem<DevelopmentPlanDataBaseIndicatorEducationMethod>;
  education_types: XmlMultiElem<DevelopmentPlanDataBaseIndicatorEducationType>;
  education_comment: XmlElem<string>;
  aims: XmlMultiElem<DevelopmentPlanDataBaseIndicatorAim>;
  comment: XmlElem<string>;
}

interface DevelopmentPlanDataBasePlaindevelopmentDevelopmentMethod {
  development_method_id: XmlElem<number, DevelopmentMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBasePlaindevelopmentEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBasePlaindevelopmentEducationTypeEducationObject {
  education_object_id: XmlElem<number>;
}

interface DevelopmentPlanDataBasePlaindevelopmentEducationType {
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  education_objects: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentEducationTypeEducationObject>;
}

interface DevelopmentPlanDataBasePlaindevelopmentAim {
  task: XmlElem<string>;
  target_date: XmlElem<Date>;
  value: XmlElem<string>;
  status: XmlElem<string, typeof common.assessment_appraise_statuses>;
  comment: XmlElem<string>;
}

interface DevelopmentPlanDataBasePlaindevelopment extends WorkflowFieldsAssessmentBase {
  name: XmlElem<string>;
  development_methods: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentDevelopmentMethod>;
  education_methods: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentEducationMethod>;
  education_types: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentEducationType>;
  education_comment: XmlElem<string>;
  aims: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentAim>;
  comment: XmlElem<string>;
}

interface DevelopmentPlanDataBase {
  competences: XmlMultiElem<DevelopmentPlanDataBaseCompetence>;
  indicators: XmlMultiElem<DevelopmentPlanDataBaseIndicator>;
  plaindevelopments: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopment>;
}

interface FieldNamesBase {

}

interface ColumnBaseColumnCCondition {
  option_type: XmlElem<string, typeof common.all_option_types>;
  color: XmlElem<string>;
  bkcolor: XmlElem<string>;
  value: XmlElem<string>;
}

interface ColumnBaseColumnForeignField {
  name: XmlElem<string>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  is_custom: XmlElem<boolean>;
  target: XmlElem<string>;
}

interface ColumnBaseColumn {
  column_name: XmlElem<string>;
  column_title: XmlElem<string>;
  column_foreign_name: XmlElem<string>;
  column_foreign_catalog_2: XmlElem<string>;
  column_foreign_name_2: XmlElem<string>;
  column_value: XmlElem<string>;
  column_width: XmlElem<number>;
  column_width_unit: XmlElem<string>;
  column_color: XmlElem<string>;
  column_bkcolor: XmlElem<string>;
  datatype: XmlElem<string, typeof common.spxml_types>;
  flag_formula: XmlElem<boolean>;
  flag_formula_post_process: XmlElem<boolean>;
  flag_visible: XmlElem<boolean>;
  flag_lng: XmlElem<boolean>;
  c_conditions: XmlMultiElem<ColumnBaseColumnCCondition>;
  foreign_field: XmlElem<ColumnBaseColumnForeignField>;
}

interface ColumnBase {
  columns: XmlMultiElem<ColumnBaseColumn>;
}

interface ChartReportGraphBase {
  disp_legend: XmlElem<boolean>;
  chart_id: XmlElem<string, typeof common.charts>;
  flag_showvalues: XmlElem<boolean>;
  plot_type: XmlElem<string>;
}

interface CriterionBaseCriterionCatalogChain extends FieldNamesBase, ViewConditionsBase {
  catalog_name: XmlElem<string>;
  field: XmlElem<string>;
  scheme_id: XmlElem<string, typeof lists.view_conditions_schemes>;
}

interface CriterionBaseCriterion {
  value: XmlElem<string>;
  column_title: XmlElem<string>;
  type: XmlElem<string>;
  option_type: XmlElem<string, typeof common.all_option_types>;
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

interface CustomReportBaseSort {
  col_index: XmlElem<number>;
  asc: XmlElem<boolean>;
}

interface CustomReportBaseAggregationAggregateSecondary {
  option_type: XmlElem<string, typeof common.all_option_types>;
  column_value: XmlElem<string>;
}

interface CustomReportBaseAggregation {
  aggregate_function: XmlElem<string>;
  aggregate_column: XmlElem<number>;
  flag_graph: XmlElem<boolean>;
  aggregate_secondary: XmlElem<CustomReportBaseAggregationAggregateSecondary>;
}

interface CustomReportBase extends CriterionBase, ColumnBase, ChartReportGraphBase {
  object_name_type: XmlElem<string>;
  object_name: XmlElem<string>;
  flag_open_param_tun_section: XmlElem<boolean>;
  flag_custom_x: XmlElem<boolean>;
  custom_x: XmlElem<string>;
  show_table: XmlElem<boolean>;
  show_chart: XmlElem<boolean>;
  get_report_data(reportId: number, userId: number): unknown;
  get_crit_hash(): unknown;
  extractVolatileData(): unknown;
  condenseVolatileData(volatile: unknown): unknown;
  report_result_date: XmlElem<Date>;
  report_result_author: XmlElem<string>;
  performance_launch_time: XmlElem<Date>;
  performance_search_time: XmlElem<Date>;
  performance_process_time: XmlElem<Date>;
  sort: XmlElem<CustomReportBaseSort>;
  categorize: XmlElem<boolean>;
  categorize_view: XmlElem<string>;
  categorize_hide_details: XmlElem<boolean>;
  aggregations: XmlMultiElem<CustomReportBaseAggregation>;
  show_total: XmlElem<boolean>;
  integrated_criterion_field: XmlElem<string>;
  integrated_criterion_field_is_custom: XmlElem<boolean>;
  integrated_criterion_value: XmlElem<string>;
}

interface KnowledgePartsFieldsBaseKnowledgePart {
  knowledge_part_id: XmlElem<number, KnowledgePartCatalogDocumentTopElem>;
  knowledge_part_name: XmlElem<string>;
  knowledge_part_level_id: XmlElem<number, KnowledgePartLevelCatalogDocumentTopElem>;
  full_path: XmlElem<string>;
  current_level_id: XmlElem<string>;
  current_level_index: XmlElem<number>;
  current_level_name: XmlElem<string>;
  target_level_id: XmlElem<string>;
  target_level_index: XmlElem<number>;
  target_level_name: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface KnowledgePartsFieldsBase {
  knowledge_parts: XmlMultiElem<KnowledgePartsFieldsBaseKnowledgePart>;
}

interface KnowledgePartsKpBaseTag {
  tag_id: XmlElem<number, TagCatalogDocumentTopElem>;
  tag_name: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface KnowledgePartsKpBase extends KnowledgePartsFieldsBase {
  tags: XmlMultiElem<KnowledgePartsKpBaseTag>;
  acquaint_time: XmlElem<number>;
  previous_version_object_id: XmlElem<number>;
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  kp_start_date: XmlElem<Date>;
  kp_end_date: XmlElem<Date>;
}

interface KnowledgePartsBaseTag {
  tag_id: XmlElem<number, TagCatalogDocumentTopElem>;
  tag_name: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface KnowledgePartsBaseExpert {
  expert_id: XmlElem<number, ExpertCatalogDocumentTopElem>;
}

interface KnowledgePartsBase extends KnowledgePartsFieldsBase {
  tags: XmlMultiElem<KnowledgePartsBaseTag>;
  experts: XmlMultiElem<KnowledgePartsBaseExpert>;
  acquaint_time: XmlElem<number>;
  previous_version_object_id: XmlElem<number>;
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  kp_start_date: XmlElem<Date>;
  kp_end_date: XmlElem<Date>;
}

interface KnowledgePartsBaseOld {
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
}

interface CustomElemsBaseCustomElem {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface CustomElemsBase {
  custom_elems: XmlMultiElem<CustomElemsBaseCustomElem>;
  check_fields_default_value(curUser: CurUser): unknown;
}

interface EstimationLevelsBaseEstimationLevel {
  id: XmlElem<string>;
  score: XmlElem<number>;
  desc: XmlElem<string>;
}

interface EstimationLevelsBase {
  estimation_levels: XmlMultiElem<EstimationLevelsBaseEstimationLevel>;
}

interface TableDataBaseFile extends InsertFileBase {
  id: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.resource_types>;
}

interface TableDataBaseRC {
  name: XmlElem<string>;
  t: XmlElem<string>;
  s: XmlElem<string>;
  cl: XmlElem<string>;
  r: XmlElem<number>;
}

interface TableDataBaseR {
  f: XmlElem<boolean>;
  ex: XmlElem<boolean>;
  bkc: XmlElem<string>;
  cs: XmlMultiElem<TableDataBaseRC>;
}

interface TableDataBase {
  files: XmlMultiElem<TableDataBaseFile>;
  has_fixed_rows: XmlElem<boolean>;
  run_report: XmlElem<boolean>;
  last_sort_direction: XmlElem<string>;
  rs: XmlMultiElem<TableDataBaseR>;
}

interface TableDataBaseExtended {
  excel_file_url: XmlElem<string>;
  data: XmlElem<TableDataBase>;
  fnGetFile(fileId: number): unknown;
}

interface ObjectiveBase {
  objective_id: XmlElem<string>;
  score: XmlElem<string>;
  status: XmlElem<string, typeof common.learning_states>;
  completion_status: XmlElem<string, typeof common.objective_status_types>;
  success_status: XmlElem<string, typeof common.objective_success_status_types>;
  description: XmlElem<string>;
}

interface InteractionBase {
  interaction_id: XmlElem<string>;
  time: XmlElem<string>;
  objectives: XmlElem<string>;
  type_interaction: XmlElem<string, typeof common.interaction_types>;
  correct_responses: XmlElem<string>;
  student_response: XmlElem<string>;
  result: XmlElem<string>;
  weighting: XmlElem<string>;
  latency: XmlElem<string>;
  description: XmlElem<string>;
}

interface AnnalsObjectsBaseObjectDataAssessment {
  ident: XmlElem<unknown>;
  viewed: XmlElem<unknown>;
  answered: XmlElem<unknown>;
  completed: XmlElem<unknown>;
  timestamp: XmlElem<string>;
  latency: XmlElem<string>;
  duration: XmlElem<string>;
}

interface AnnalsObjectsBaseObjectDataSectionItemlistSectionitem {
  ident: XmlElem<unknown>;
}

interface AnnalsObjectsBaseObjectDataSectionItemlist {
  sectionitem: XmlElem<AnnalsObjectsBaseObjectDataSectionItemlistSectionitem>;
}

interface AnnalsObjectsBaseObjectDataSection {
  ident: XmlElem<unknown>;
  viewed: XmlElem<unknown>;
  answered: XmlElem<unknown>;
  completed: XmlElem<unknown>;
  timestamp: XmlElem<string>;
  latency: XmlElem<string>;
  duration: XmlElem<string>;
  itemlist: XmlElem<AnnalsObjectsBaseObjectDataSectionItemlist>;
}

interface AnnalsObjectsBaseObjectDataItemAttempts {
  max: XmlElem<unknown>;
  attempt: XmlMultiElemObject<string>;
}

interface AnnalsObjectsBaseObjectDataItemObjectivesObj {
  id: XmlElem<unknown>;
  type: XmlElem<unknown>;
  value: XmlElem<unknown>;
}

interface AnnalsObjectsBaseObjectDataItemObjectives {
  obj: XmlElem<AnnalsObjectsBaseObjectDataItemObjectivesObj>;
}

interface AnnalsObjectsBaseObjectDataItem {
  ident: XmlElem<unknown>;
  viewed: XmlElem<unknown>;
  answered: XmlElem<unknown>;
  completed: XmlElem<unknown>;
  status: XmlElem<unknown>;
  type: XmlElem<unknown>;
  itemnumber: XmlElem<unknown>;
  scoring: XmlElem<unknown>;
  shuffle: XmlElem<unknown>;
  maxnumber: XmlElem<unknown>;
  minnumber: XmlElem<unknown>;
  timestamp: XmlElem<string>;
  latency: XmlElem<string>;
  duration: XmlElem<string>;
  attempts: XmlElem<AnnalsObjectsBaseObjectDataItemAttempts>;
  objectives: XmlElem<AnnalsObjectsBaseObjectDataItemObjectives>;
  comment: XmlElem<string>;
}

interface AnnalsObjectsBaseObjectDataObjective {
  ident: XmlElem<unknown>;
  type: XmlElem<unknown>;
  value: XmlElem<unknown>;
}

interface AnnalsObjectsBaseObjectDataActiveTask {
  ident: XmlElem<unknown>;
}

interface AnnalsObjectsBaseObjectDataActive {
  screen: XmlElem<unknown>;
  task: XmlElem<AnnalsObjectsBaseObjectDataActiveTask>;
}

interface AnnalsObjectsBaseObjectDataSequenceScreenTask {
  ident: XmlElem<unknown>;
  num: XmlElem<unknown>;
  layout: XmlElem<unknown>;
  secnum: XmlElem<unknown>;
}

interface AnnalsObjectsBaseObjectDataSequenceScreen {
  num: XmlElem<unknown>;
  type: XmlElem<unknown>;
  task: XmlElem<AnnalsObjectsBaseObjectDataSequenceScreenTask>;
}

interface AnnalsObjectsBaseObjectDataSequence {
  type: XmlElem<unknown>;
  select: XmlElem<unknown>;
  screen: XmlElem<AnnalsObjectsBaseObjectDataSequenceScreen>;
}

interface AnnalsObjectsBaseObjectData {
  assessment: XmlElem<AnnalsObjectsBaseObjectDataAssessment>;
  sections: XmlMultiElem<AnnalsObjectsBaseObjectDataSection>;
  items: XmlMultiElem<AnnalsObjectsBaseObjectDataItem>;
  objectives: XmlMultiElem<AnnalsObjectsBaseObjectDataObjective>;
  active: XmlElem<AnnalsObjectsBaseObjectDataActive>;
  sequence: XmlElem<AnnalsObjectsBaseObjectDataSequence>;
}

interface AnnalsObjectsBaseObject {
  id: XmlElem<unknown>;
  attempt_id: XmlElem<string>;
  file: XmlElem<string>;
  objtype: XmlElem<string>;
  data: XmlElem<AnnalsObjectsBaseObjectData>;
}

interface AnnalsObjectsBase {
  objects: XmlMultiElem<AnnalsObjectsBaseObject>;
}

interface AnnalsNumsBase {
  question_num: XmlElem<number>;
  question_answered_num: XmlElem<number>;
  question_passed_num: XmlElem<number>;
}

interface LearningObjectivesInteractionsBase {
  objectives: XmlMultiElem<ObjectiveBase>;
  interactions: XmlMultiElem<InteractionBase>;
  scoring_type: XmlElem<string>;
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
  data_lesson: XmlElem<CoreLessonBaseDataLesson>;
}

interface CoreLessonInfoBase {
  learning_part_id: XmlElem<number, LearningPartCatalogDocumentTopElem>;
  filing_learning_part(setChanged: boolean): unknown;
  save_learning_part(save: boolean): unknown;
}

interface LearningAssessmentBase extends AnnalsObjectsBase {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string>;
  assessment_code: XmlElem<string>;
  qti_text: XmlElem<string>;
  qti_date: XmlElem<Date>;
  expert_eval: XmlElem<boolean>;
  adaptive_eval: XmlElem<boolean>;
  is_self_enrolled: XmlElem<boolean>;
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
  statement_id: XmlElem<number, StatementCatalogDocumentTopElem>;
  activity_state_id: XmlElem<number, ActivityStateCatalogDocumentTopElem>;
  score: XmlElem<number>;
}

interface LearningPartBase extends CoreLessonInfoBase, CoreLessonBase, LearningObjectivesInteractionsBase, LearningAssessmentBase, LastAttemptTestLearningsBase {
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.course_part_types>;
  cl_module_protocol: XmlElem<string>;
  parent_part_code: XmlElem<string>;
  course_module_id: XmlElem<number>;
  object_id: XmlElem<number>;
  state_id: XmlElem<number, typeof common.learning_states>;
  lesson_location: XmlElem<string>;
  score: XmlElem<number>;
  score_str: XmlElem<string>;
  max_score_per_attempt: XmlElem<number>;
  start_usage_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
  time: XmlElem<number>;
  max_score: XmlElem<number>;
  attempts_num: XmlElem<number>;
  cur_attempt_num: XmlElem<number>;
  use_proctoring: XmlElem<boolean>;
  logs: XmlMultiElem<LearningPartBaseLog>;
  statements: XmlMultiElem<LearningPartBaseStatement>;
}

interface WebVariablesBaseWvarEntry {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
}

interface WebVariablesBaseWvarViewCondition {
  id: XmlElem<string>;
  wvar_name: XmlElem<string>;
  option_type: XmlElem<string, typeof common.all_option_types>;
  value: XmlElem<string>;
  and_or: XmlElem<string>;
}

interface WebVariablesBaseWvarView {
  conditions: XmlMultiElem<WebVariablesBaseWvarViewCondition>;
}

interface WebVariablesBaseWvar {
  name: XmlElem<string>;
  parent_wvar_name: XmlElem<string>;
  value: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  xquery_qual: XmlElem<string>;
  entries: XmlMultiElem<WebVariablesBaseWvarEntry>;
  title: XmlElem<string>;
  description: XmlElem<string>;
  silent: XmlElem<boolean>;
  position: XmlElem<number>;
  view: XmlElem<WebVariablesBaseWvarView>;
  required: XmlElem<boolean>;
}

interface WebVariablesBase {
  wvars: XmlMultiElem<WebVariablesBaseWvar>;
  wvars_num(): unknown;
}

interface EducGroupsBaseEducGroupCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface EducGroupsBaseEducGroupLector {
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
}

interface EducGroupsBaseEducGroup {
  group_id: XmlElem<string>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  collaborators: XmlMultiElem<EducGroupsBaseEducGroupCollaborator>;
  lectors: XmlMultiElem<EducGroupsBaseEducGroupLector>;
}

interface EducGroupsBase {
  educ_groups: XmlMultiElem<EducGroupsBaseEducGroup>;
}

interface EventCatalogBase {
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  type_id: XmlElem<string, typeof common.event_types>;
  event_type_id: XmlElem<number, EventTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.event_status_types>;
  person_num: XmlElem<number>;
  unnamed_person_num: XmlElem<number>;
  organizational_form: XmlElem<string, typeof lists.organizational_forms>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  education_org_name: XmlElem<string>;
  total_cost: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
}

interface CostCentersBaseCostCenterExpenseItem {
  expense_item_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number>;
}

interface CostCentersBaseCostCenter {
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  person_num: XmlElem<number>;
  sum(): unknown;
  expense_items: XmlMultiElem<CostCentersBaseCostCenterExpenseItem>;
}

interface CostCentersBase {
  cost_centers: XmlMultiElem<CostCentersBaseCostCenter>;
}

interface EduMethodTestingBasePrevTestingAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface EduMethodTestingBasePrevTesting {
  auto_assign: XmlElem<boolean>;
  assessments: XmlMultiElem<EduMethodTestingBasePrevTestingAssessment>;
}

interface EduMethodTestingBasePostTestingAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface EduMethodTestingBasePostTesting {
  auto_assign: XmlElem<boolean>;
  assessments: XmlMultiElem<EduMethodTestingBasePostTestingAssessment>;
}

interface EduMethodTestingBase {
  prev_testing: XmlElem<EduMethodTestingBasePrevTesting>;
  post_testing: XmlElem<EduMethodTestingBasePostTesting>;
}

interface EduMethodTestingBaseAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface SkillsBaseSkill {
  skill_id: XmlElem<number, SkillCatalogDocumentTopElem>;
  skill_name: XmlElem<string>;
  skill_id_with_levels: XmlElem<number, SkillCatalogDocumentTopElem>;
  level_id: XmlElem<string>;
  level_name: XmlElem<string>;
}

interface SkillsBase {
  skills: XmlMultiElem<SkillsBaseSkill>;
}

interface RequirementsBaseRequirement {
  id: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
}

interface RequirementsBaseCertificateType {
  certificate_type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseCompoundProgram {
  compound_program_id: XmlElem<number, CompoundProgramCatalogDocumentTopElem>;
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  period: XmlElem<number>;
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseTypicalDevelopmentProgram {
  typical_development_program_id: XmlElem<number, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  job_transfer_type_id: XmlElem<string, typeof common.job_transfer_types>;
  comment: XmlElem<string>;
}

interface RequirementsBaseQualification {
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseCourse {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
}

interface RequirementsBaseAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface RequirementsBaseRecomendedLibraryMaterial {
  material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseProfessionalArea {
  professional_area_id: XmlElem<number, ProfessionalAreaCatalogDocumentTopElem>;
}

interface RequirementsBase extends SkillsBase {
  requirements: XmlMultiElem<RequirementsBaseRequirement>;
  certificate_types: XmlMultiElem<RequirementsBaseCertificateType>;
  compound_programs: XmlMultiElem<RequirementsBaseCompoundProgram>;
  education_methods: XmlMultiElem<RequirementsBaseEducationMethod>;
  obligatory_education_amount: XmlElem<number>;
  education_period: XmlElem<number>;
  typical_development_programs: XmlMultiElem<RequirementsBaseTypicalDevelopmentProgram>;
  qualifications: XmlMultiElem<RequirementsBaseQualification>;
  courses: XmlMultiElem<RequirementsBaseCourse>;
  assessments: XmlMultiElem<RequirementsBaseAssessment>;
  recomended_library_materials: XmlMultiElem<RequirementsBaseRecomendedLibraryMaterial>;
  professional_areas: XmlMultiElem<RequirementsBaseProfessionalArea>;
  educ_type_id: XmlElem<string, typeof common.educ_types>;
  education_type_id: XmlElem<number, EducationTypeCatalogDocumentTopElem>;
  age_min: XmlElem<number>;
  age_max: XmlElem<number>;
  experience_in_company: XmlElem<number>;
  experience_in_current_position: XmlElem<number>;
}

interface LearningCurrentStateBase {
  cur_score: XmlElem<number>;
  cur_score_str: XmlElem<string>;
  cur_state_id: XmlElem<number, typeof common.learning_states>;
}

interface CourseExpertsBasePerson extends PersonFillingBase {
  id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.course_expert_types>;
}

interface CourseExpertsBase {
  persons: XmlMultiElem<CourseExpertsBasePerson>;
}

interface GeneralStorageInfoBaseMssqlStorageModeParametrs {
  server: XmlElem<string>;
  trusted_connection: XmlElem<boolean>;
  username: XmlElem<string>;
  password: XmlElem<string>;
  database: XmlElem<string>;
  collation: XmlElem<string>;
  create_on_fail: XmlElem<boolean>;
  db_directory: XmlElem<string>;
  db_size: XmlElem<number>;
}

interface GeneralStorageInfoBaseOracleStorageModeParametrs {
  oracle_connection_string: XmlElem<string>;
  oracle_db_type: XmlElem<string, typeof common.oracle_db_types>;
  initialize_db: XmlElem<boolean>;
  scheme: XmlElem<string>;
  username: XmlElem<string>;
  password: XmlElem<string>;
}

interface GeneralStorageInfoBaseAzureStorageModeParametrs {
  server: XmlElem<string>;
  username: XmlElem<string>;
  password: XmlElem<string>;
  database: XmlElem<string>;
  collation: XmlElem<string>;
  create_on_fail: XmlElem<boolean>;
  db_size: XmlElem<number>;
  storage_account_name: XmlElem<string>;
  storage_account_key: XmlElem<string>;
  storage_account: XmlElem<string>;
}

interface GeneralStorageInfoBase {
  storage_mode: XmlElem<string, typeof common.possible_storages>;
  error_code: XmlElem<number>;
  error: XmlElem<string>;
  mssql_storage_mode_parametrs: XmlElem<GeneralStorageInfoBaseMssqlStorageModeParametrs>;
  oracle_storage_mode_parametrs: XmlElem<GeneralStorageInfoBaseOracleStorageModeParametrs>;
  azure_storage_mode_parametrs: XmlElem<GeneralStorageInfoBaseAzureStorageModeParametrs>;
}

interface PathPlacesBasePathPlace {
  id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  name: XmlElem<string>;
  parent_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
}

interface PathPlacesBase {
  old_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  path_places: XmlMultiElem<PathPlacesBasePathPlace>;
  filling_path_places(): unknown;
}

interface DownloadPackageBase {
  id: XmlElem<string>;
  type: XmlElem<string, typeof common.package_types>;
  url: XmlElem<string>;
  base_url: XmlElem<string>;
  package_date: XmlElem<Date>;
  comment: XmlElem<string>;
}

interface DownloadPackageLogBaseObject {
  id: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  selected: XmlElem<boolean>;
  id_exists_type: XmlElem<string>;
  object_form: XmlElem<string>;
}

interface DownloadPackageLogBaseDeletedObjectsObject {
  id: XmlElem<number>;
  del_date: XmlElem<Date>;
  selected: XmlElem<boolean>;
}

interface DownloadPackageLogBaseDeletedObjects {
  object: XmlElem<DownloadPackageLogBaseDeletedObjectsObject>;
}

interface DownloadPackageLogBaseCustomTemplate {
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
  title: XmlElem<string>;
  selected: XmlElem<boolean>;
}

interface DownloadPackageLogBaseAccessRole {
  id: XmlElem<string>;
  name: XmlElem<string>;
  selected: XmlElem<boolean>;
}

interface DownloadPackageLogBaseList {
  field: XmlElem<string>;
  num: XmlElem<number>;
  selected: XmlElem<boolean>;
}

interface DownloadPackageLogBase {
  selected_custom_templates: XmlElem<boolean>;
  selected_roles: XmlElem<boolean>;
  objects: XmlMultiElem<DownloadPackageLogBaseObject>;
  deleted_objects: XmlElem<DownloadPackageLogBaseDeletedObjects>;
  custom_templates: XmlMultiElem<DownloadPackageLogBaseCustomTemplate>;
  access_roles: XmlMultiElem<DownloadPackageLogBaseAccessRole>;
  lists: XmlMultiElem<DownloadPackageLogBaseList>;
}

interface BlockReportsBaseBlockReportReportReport {
  url: XmlElem<string>;
  title: XmlElem<string>;
  disp_web_client: XmlElem<boolean>;
}

interface BlockReportsBaseBlockReportReport {
  url: XmlElem<string>;
  title: XmlElem<string>;
  disp_web_client: XmlElem<boolean>;
  reports: XmlMultiElem<BlockReportsBaseBlockReportReportReport>;
}

interface BlockReportsBaseBlockReport {
  id: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  reports: XmlMultiElem<BlockReportsBaseBlockReportReport>;
}

interface BlockReportsBase {
  block_reports: XmlMultiElem<BlockReportsBaseBlockReport>;
}

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

interface ViewDispButtonBase {
  disp_second_new_button: XmlElem<boolean>;
  second_button_text: XmlElem<string>;
  second_button_image_url: XmlElem<string>;
  no_doc: XmlElem<boolean>;
}

interface TalentPoolFuncManagersBaseTalentPoolFuncManager extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
}

interface TalentPoolFuncManagersBase {
  talent_pool_func_managers: XmlMultiElem<TalentPoolFuncManagersBaseTalentPoolFuncManager>;
  obtain_talent_pool_func_manager_by_id(personId: number, isNative: unknown): unknown;
}

interface SocialObjectAccessBase {
  view_like: XmlElem<boolean>;
  view_dislike: XmlElem<boolean>;
  view_follow: XmlElem<boolean>;
  allow_like: XmlElem<boolean>;
  allow_dislike: XmlElem<boolean>;
  allow_follow: XmlElem<boolean>;
  allow_share: XmlElem<boolean>;
  allow_comment: XmlElem<boolean>;
  allow_view_numbers: XmlElem<boolean>;
  allow_view_list: XmlElem<boolean>;
  like_weight: XmlElem<number>;
  dislike_weight: XmlElem<number>;
}

interface AdminAccessCatalogBase {
  use_filter: XmlElem<boolean>;
  auto_role_filling: XmlElem<boolean>;
  auto_group_filling: XmlElem<boolean>;
  backup_object_version: XmlElem<boolean>;
}

interface ObjectCodeNameBase {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
}

interface CourseSettingsBaseSettings {
  open_single_module: XmlElem<boolean>;
  open_first_module: XmlElem<boolean>;
  open_last_visited: XmlElem<boolean>;
  open_next_after_completed: XmlElem<boolean>;
  no_display_status_msg: XmlElem<boolean>;
  enable_user_completion: XmlElem<boolean>;
  display_completion_msg: XmlElem<boolean>;
  completion_msg: XmlElem<string>;
  allow_checks: XmlElem<boolean>;
  after_checks: XmlElem<string>;
  launch_type: XmlElem<string>;
  panel: XmlElem<boolean>;
  course_finish_action: XmlElem<string>;
  course_finish_msg: XmlElem<string>;
  course_manually_finish_msg: XmlElem<string>;
}

interface CourseSettingsBase {
  settings: XmlElem<CourseSettingsBaseSettings>;
}

interface WebChecksBaseChecksBrowserCheck {
  type: XmlElem<string, typeof lists.web_requirements>;
  cond: XmlElem<string, typeof common.all_option_types>;
  version: XmlElem<number>;
}

interface WebChecksBaseChecksBrowser {
  check: XmlElem<WebChecksBaseChecksBrowserCheck>;
}

interface WebChecksBaseChecksPluginCheck {
  type: XmlElem<string, typeof lists.web_requirements>;
  cond: XmlElem<string, typeof common.all_option_types>;
  version: XmlElem<number>;
}

interface WebChecksBaseChecksPlugin {
  check: XmlElem<WebChecksBaseChecksPluginCheck>;
}

interface WebChecksBaseChecks {
  browser: XmlElem<WebChecksBaseChecksBrowser>;
  plugin: XmlElem<WebChecksBaseChecksPlugin>;
}

interface WebChecksBase {
  checks: XmlElem<WebChecksBaseChecks>;
}

interface WebChecksBaseBrowserCheck {
  type: XmlElem<string, typeof lists.web_requirements>;
  cond: XmlElem<string, typeof common.all_option_types>;
  version: XmlElem<number>;
}

interface WebChecksBaseBrowser {
  check: XmlElem<WebChecksBaseBrowserCheck>;
}

interface WebChecksBasePluginCheck {
  type: XmlElem<string, typeof lists.web_requirements>;
  cond: XmlElem<string, typeof common.all_option_types>;
  version: XmlElem<number>;
}

interface WebChecksBasePlugin {
  check: XmlElem<WebChecksBasePluginCheck>;
}

interface ObjectTypeBase {
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
}

interface CustomDatasBaseCustomData {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface CustomDatasBase {
  custom_datas: XmlMultiElem<CustomDatasBaseCustomData>;
  get_custom_data(name: string): unknown;
  set_custom_data(name: string, value: string): unknown;
}

interface SelectLearningOptionBase {
  start_learning_date: XmlElem<Date>;
  duration_type: XmlElem<string>;
  duration_days: XmlElem<number>;
  miss_last_learning_date: XmlElem<boolean>;
  last_learning_date: XmlElem<Date>;
  miss_only_success_learning: XmlElem<boolean>;
  logging: XmlElem<boolean>;
  commenting: XmlElem<boolean>;
  use_proctoring: XmlElem<boolean>;
  proctor_prefer_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  skip_dismissed: XmlElem<boolean>;
  comment: XmlElem<string>;
}

interface TaskInfoBase {
  id: XmlElem<string>;
  type: XmlElem<string>;
  title: XmlElem<string>;
  status: XmlElem<string>;
  progress: XmlElem<number>;
  progress_max: XmlElem<number>;
  progress_text: XmlElem<string>;
  progress_date: XmlElem<Date>;
  result: XmlElem<string>;
  error: XmlElem<string>;
  error_text: XmlElem<string>;
  create_date: XmlElem<Date>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  user_id: XmlElem<number>;
  message: XmlElem<string>;
  message_result: XmlElem<string>;
  screen_url: XmlElem<string>;
  callback: XmlElem<string>;
}

interface GameBonusBaseGameBonus {
  id: XmlElem<string>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  sum: XmlElem<number>;
}

interface GameBonusBase {
  game_bonuss: XmlMultiElem<GameBonusBaseGameBonus>;
}

interface ClLocalizationsBaseLocalization {
  id: XmlElem<number, ClLocalizationCatalogDocumentTopElem>;
}

interface ClLocalizationsBase {
  localizations: XmlMultiElem<ClLocalizationsBaseLocalization>;
}

interface I18nBaseI18nParam {
  load_path: XmlElem<string>;
  code: XmlElem<string>;
}

interface I18nBase {
  i18n_param: XmlElem<I18nBaseI18nParam>;
}

interface ActorBaseAccount {
  homePage: XmlElem<string>;
  name: XmlElem<string>;
}

interface ActorBase {
  objectType: XmlElem<string>;
  name: XmlElem<string>;
  mbox: XmlElem<string>;
  mbox_sha1sum: XmlElem<string>;
  openid: XmlElem<string>;
  account: XmlElem<ActorBaseAccount>;
}

interface ProctoringBaseProctoring extends WebVariablesBase {
  is_basic_variables: XmlElem<boolean>;
  proctoring_system_id: XmlElem<number, ProctoringSystemCatalogDocumentTopElem>;
}

interface ProctoringBase {
  use_proctoring: XmlElem<boolean>;
  proctoring: XmlElem<ProctoringBaseProctoring>;
}

interface ResultFieldsBaseResultField {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.result_field_types>;
  title: XmlElem<string>;
  desc: XmlElem<string>;
  for_analytics: XmlElem<boolean>;
  for_analytics_aggregation: XmlElem<boolean>;
  for_analytics_aggregation_type: XmlElem<string, typeof common.aggregation_types>;
  for_analytics_scale_maximum: XmlElem<string>;
  width: XmlElem<number>;
  bk_color: XmlElem<string>;
  text_color: XmlElem<string>;
  prohibit_sort: XmlElem<boolean>;
}

interface ResultFieldsBase {
  result_fields: XmlMultiElem<ResultFieldsBaseResultField>;
}

interface PersonObjectLinksBasePersonObjectProfile {
  person_object_profile_id: XmlElem<number, PersonObjectProfileCatalogDocumentTopElem>;
}

interface PersonObjectLinksBase {
  person_object_profiles: XmlMultiElem<PersonObjectLinksBasePersonObjectProfile>;
}

interface ExecCodeBaseExecCode {
  code_type: XmlElem<string>;
  code_url: XmlElem<string>;
  code_text: XmlElem<string>;
}

interface ExecCodeBase {
  exec_code: XmlElem<ExecCodeBaseExecCode>;
}

interface ViewBaseLinkCatalog {
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  link_field: XmlElem<string>;
}

interface ViewBase extends ViewDispButtonBase, ViewColumnsBase {
  is_hier: XmlElem<boolean>;
  disp_dlg_new_button: XmlElem<boolean>;
  sort_field: XmlElem<string>;
  link_catalogs: XmlMultiElem<ViewBaseLinkCatalog>;
}

interface QaTestParamBase extends WebVariablesBase {
  cur_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  use_cur_object: XmlElem<boolean>;
  cur_object_type: XmlElem<string, typeof common.exchange_object_types>;
  cur_object_id: XmlElem<number>;
  use_cur_web_design: XmlElem<boolean>;
  cur_web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  use_cur_site: XmlElem<boolean>;
  cur_site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  use_cur_lng: XmlElem<boolean>;
  cur_lng: XmlElem<string>;
}

interface QaTestFixtureBaseFixture {
  fixture_id: XmlElem<number>;
  fixture_type: XmlElem<string, typeof common.exchange_object_types>;
  fixture_name: XmlElem<string>;
}

interface QaTestFixtureBase {
  fixture_type_id: XmlElem<string, typeof common.qa_fixture_types>;
  fixture_load_code: XmlElem<string>;
  fixture_unload_code: XmlElem<string>;
  fixture_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  fixture_load_function_name: XmlElem<string>;
  fixture_unload_function_name: XmlElem<string>;
  fixture_packet_uri: XmlElem<string>;
  clear_fixture_packet: XmlElem<boolean>;
  fixtures: XmlMultiElem<QaTestFixtureBaseFixture>;
}

interface QaTestAssertBaseAssert {
  id: XmlElem<string>;
  name: XmlElem<string>;
  assert_type: XmlElem<string, typeof common.qa_test_assert_types>;
  check_inversion: XmlElem<boolean>;
  check_property: XmlElem<string>;
  template_is_collection: XmlElem<boolean>;
  template_type: XmlElem<string, typeof common.qa_test_assert_template_types>;
  template: XmlElem<string>;
}

interface QaTestAssertBase {
  asserts: XmlMultiElem<QaTestAssertBaseAssert>;
}

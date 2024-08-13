interface CostCurrencyBase {
  /** Стоимость */
  cost: XmlElem<number | null>;
  /** Ставка НДС */
  cost_nds: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
}

interface CostCurrencyTypeBase extends CostCurrencyBase {
  /** Стоимость */
  cost_type: XmlElem<string | null, typeof common.cost_types>;
}

interface PersonNameBase {
  /** Фамилия */
  lastname: XmlElem<string | null>;
  /** Имя */
  firstname: XmlElem<string | null>;
  /** Отчество */
  middlename: XmlElem<string | null>;
  fullname(): string;
  shortname(): string;
}

interface DocInfoBaseCreation {
  /** Логин */
  user_login: XmlElem<string | null>;
  /** Пользователь */
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
}

interface DocInfoBaseModification {
  /** Логин */
  user_login: XmlElem<string | null>;
  /** Пользователь */
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата */
  date: XmlElem<Date | null>;
}

interface DocInfoBase {
  /** Создание */
  creation: XmlElem<DocInfoBaseCreation | null>;
  /** Изменение */
  modification: XmlElem<DocInfoBaseModification | null>;
  /** Неизменяемый */
  invariable: XmlElem<boolean | null>;
}

interface ViewConditionBase {
  /** Корневой элемент */
  top_elem: XmlElem<string | null>;
  /** Поле */
  field: XmlElem<string | null>;
  /** Название поля */
  title: XmlElem<string | null>;
  /** Значение поля */
  value: XmlElem<string | null>;
  /** Тип поля */
  type: XmlElem<string>;
  /** Условие */
  option_type: XmlElem<string, typeof common.all_option_types>;
  /** Является настраиваемым */
  is_custom_field: XmlElem<boolean | null>;
  /** И/Или */
  and_or: XmlElem<string>;
  is_multiple: XmlElem<boolean | null>;
  value_multiple: XmlMultiElemObject<string | null>;
  bracket: XmlElem<string | null>;
}

interface ViewConditionsBase {
  /** Условия */
  conditions: XmlMultiElem<ViewConditionBase | null>;
  conditions_qual: XmlElem<string | null>;
}

interface PassportDataBase {
  /** Документ */
  passport_type_id: XmlElem<string | null, typeof common.passport_types>;
  /** Серия */
  series: XmlElem<string | null>;
  /** Номер */
  num: XmlElem<string | null>;
  /** Дата выдачи */
  registration_date: XmlElem<Date | null>;
  /** Кем выдан */
  registration_agency: XmlElem<string | null>;
}

interface PersonBase extends PersonNameBase {
  /** Пол */
  sex: XmlElem<string | null>;
  /** Дата рождения */
  birth_date: XmlElem<Date | null>;
  /** Адрес */
  address: XmlElem<string | null>;
  /** Телефон */
  phone: XmlElem<string | null>;
  /** Мобильный телефон */
  mobile_phone: XmlElem<string | null>;
  mobile_phone_conf_code: XmlElem<string | null>;
  mobile_phone_conf_date: XmlElem<Date | null>;
  mobile_phone_conf: XmlElem<boolean | null>;
  email: XmlElem<string | null>;
  email_conf_code: XmlElem<string | null>;
  email_conf_date: XmlElem<Date | null>;
  email_conf: XmlElem<boolean | null>;
  /** Внутренний e-mail */
  system_email: XmlElem<string | null>;
  /** Логин */
  login: XmlElem<string | null>;
  /** Пароль */
  password: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface DocumentAttributesBase {
  /** URL шаблона */
  template: XmlElem<string | null>;
  /** Позиция в списке */
  position: XmlElem<number | null>;
  /** Переходить по ссылке */
  is_link: XmlElem<boolean>;
  /** Ссылка */
  link_href: XmlElem<string | null>;
  /** Цель */
  link_target: XmlElem<string | null>;
  /** Возможна подписка на раздел портала */
  permit_subscription: XmlElem<boolean>;
}

interface LocalSettingsBase {
  check_version_update: XmlElem<boolean>;
  disp_all_access_blocks: XmlElem<boolean>;
  use_dotnet_zip: XmlElem<boolean>;
  disp_main_access_blocks: XmlElem<boolean>;
}

interface BankAccountBaseBank {
  /** Название банка */
  name: XmlElem<string | null>;
  /** Адрес банка */
  address: XmlElem<string | null>;
  /** БИК */
  bic: XmlElem<string | null>;
}

interface BankAccountBase {
  bank: XmlElem<BankAccountBaseBank | null>;
  /** Расчетный счет */
  no: XmlElem<string | null>;
  /** Корреспондентский счет */
  cno: XmlElem<string | null>;
}

interface EssentialBaseDirector extends PersonNameBase {
  /** Должность */
  position_name: XmlElem<string | null, typeof common.position_types>;
  /** ФИО в родительном падеже */
  mod_name: XmlElem<PersonNameBase | null>;
  /** Действует на основании */
  authority: XmlElem<string | null>;
}

interface EssentialBaseChiefAccountant extends PersonNameBase {
  /** ФИО в родительном падеже */
  mod_name: XmlElem<PersonNameBase | null>;
}

interface EssentialBaseBankAccount extends BankAccountBase {
  id: XmlElem<string | null>;
}

interface EssentialBase {
  is_foreign: XmlElem<boolean | null>;
  swift_code: XmlElem<string | null>;
  iban_no: XmlElem<string | null>;
  /** ИНН */
  inn: XmlElem<string | null>;
  /** КПП */
  kpp: XmlElem<string | null>;
  /** Юридический адрес */
  legal_address: XmlElem<string | null>;
  fact_address: XmlElem<string | null>;
  /** ОКОНХ */
  okonh: XmlElem<string | null>;
  /** ОКПО */
  okpo: XmlElem<string | null>;
  ogrn: XmlElem<string | null>;
  oktmo: XmlElem<string | null>;
  director: XmlElem<EssentialBaseDirector | null>;
  chief_accountant: XmlElem<EssentialBaseChiefAccountant | null>;
  bank_account: XmlElem<EssentialBaseBankAccount | null>;
}

interface EssentialsBaseEssentials extends EssentialBase {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface EssentialsBase {
  essentials: XmlElem<EssentialsBaseEssentials | null>;
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
  event_settings: XmlElem<EventSettingsBaseEventSettings | null>;
}

interface OutstaffPeriodsBasePeriod {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Название типовой должности */
  position_common_name: XmlElem<string | null>;
  /** Контракт на временный персонал */
  outstaff_contract_id: XmlElem<number | null, OutstaffContractCatalogDocumentTopElem>;
  /** Контракт на временный персонал */
  outstaff_contract_name: XmlElem<string | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_name: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  ext_time: XmlElem<string | null>;
  start_time: XmlElem<string | null>;
  finish_time: XmlElem<string | null>;
  /** Часов */
  hour_num: XmlElem<number | null>;
  /** Полный день */
  full_time: XmlElem<boolean | null>;
  days_length: XmlElem<string>;
  max_cnt: XmlElem<number | null>;
}

interface OutstaffPeriodsBaseMaterial {
  id: XmlElem<string | null>;
  /** Тип материала */
  outstaff_type_material_id: XmlElem<number | null, OutstaffTypeMaterialCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Плановая величина */
  plan_value: XmlElem<number | null>;
  /** Фактическая величина */
  fact_value: XmlElem<number | null>;
}

interface OutstaffPeriodsBase {
  /** Интервалы работы временного персонала */
  periods: XmlMultiElem<OutstaffPeriodsBasePeriod | null>;
  materials: XmlMultiElem<OutstaffPeriodsBaseMaterial | null>;
}

interface AccessBase {
  /** Уровень доступа */
  access_level: XmlElem<number>;
  /** Роль сотрудника */
  access_role: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  /** Является пользователем интерфейса администратора */
  is_arm_admin: XmlElem<boolean>;
  /** Временно запрещен доступ на портал */
  web_banned: XmlElem<boolean>;
  /** Группа по умолчанию */
  user_group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  is_content_admin: XmlElem<boolean>;
  is_application_admin: XmlElem<boolean>;
}

interface AccessDocBaseAccessRole {
  /** Роль доступа */
  access_role_id: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
}

interface AccessDocBaseAccessGroup {
  /** Группа доступа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface AccessDocBase extends ViewConditionsBase {
  /** Анонимный доступ */
  enable_anonymous_access: XmlElem<boolean | null>;
  /** Уровень доступа */
  access_level: XmlElem<number>;
  /** Роли доступа */
  access_roles: XmlMultiElem<AccessDocBaseAccessRole | null>;
  /** Группы доступа */
  access_groups: XmlMultiElem<AccessDocBaseAccessGroup | null>;
  /** Организация */
  access_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Сайт */
  access_site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Узел */
  access_host_id: XmlElem<number | null, HostCatalogDocumentTopElem>;
  web_mode_id: XmlElem<number | null, WebModeCatalogDocumentTopElem>;
  /** Оператор */
  operator: XmlElem<string | null>;
}

interface GlobalSettingsBaseWebDesign {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  url: XmlElem<string | null>;
  zip_file_url: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
}

interface GlobalSettingsBaseWebRules {
  exclude_path_list: XmlElem<string | null>;
}

interface GlobalSettingsBaseRequiredField {
  name: XmlElem<string | null>;
  is_web_edit: XmlElem<boolean>;
  is_required: XmlElem<boolean>;
  is_custom: XmlElem<boolean | null>;
}

interface GlobalSettingsBaseWebApiSettingsFilter {
  pattern_str: XmlElem<string | null>;
}

interface GlobalSettingsBaseWebApiSettings {
  use_api: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
  access_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  allowed_ip: XmlElem<string | null>;
  filters: XmlMultiElem<GlobalSettingsBaseWebApiSettingsFilter | null>;
  default_remote_security_profile: XmlElem<number | null, RemoteSecurityProfileCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseMobileDocumentReader {
  menu_code: XmlElem<string>;
  days_credentials_update: XmlElem<number | null>;
  use_favorites: XmlElem<boolean>;
  use_search: XmlElem<boolean>;
  confirmation: XmlElem<string | null>;
  use_update_stamp: XmlElem<boolean>;
}

interface GlobalSettingsBaseMobile {
  document_reader: XmlElem<GlobalSettingsBaseMobileDocumentReader | null>;
}

interface GlobalSettingsBaseVclassHostsHost {
  host: XmlElem<string | null>;
  path: XmlElem<string | null>;
}

interface GlobalSettingsBaseVclassHosts {
  host: XmlElem<GlobalSettingsBaseVclassHostsHost | null>;
}

interface GlobalSettingsBaseLibraryOptions {
  ignore_before_first: XmlElem<boolean>;
}

interface GlobalSettingsBaseLibraryCutMarker {
  tag: XmlElem<string | null>;
  attr: XmlElem<string | null>;
  type: XmlElem<number>;
  enabled: XmlElem<boolean>;
}

interface GlobalSettingsBaseLibrary {
  options: XmlElem<GlobalSettingsBaseLibraryOptions | null>;
  cut_markers: XmlMultiElem<GlobalSettingsBaseLibraryCutMarker | null>;
}

interface GlobalSettingsBaseOwnOrg extends EssentialsBase {
  name: XmlElem<string | null>;
  phone: XmlElem<string | null>;
  email: XmlElem<string | null>;
  smtp_server: XmlElem<string | null>;
  use_smtp_authenticate: XmlElem<boolean>;
  smtp_login: XmlElem<string | null>;
  smtp_password: XmlElem<string | null>;
  after_send_action: XmlElem<string | null>;
  sent_save_hours: XmlElem<number>;
  send_attempt_num: XmlElem<number>;
  default_notification_system_id: XmlElem<number | null, NotificationSystemCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseLng {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  lng_file_url: XmlElem<string | null>;
}

interface GlobalSettingsBaseRecruitment {
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  recruitment_system_id: XmlElem<number | null, RecruitmentSystemCatalogDocumentTopElem>;
  estaff_server_url: XmlElem<string | null>;
  estaff_login: XmlElem<string | null>;
  estaff_password: XmlElem<string | null>;
  estaff_subdivisions_script: XmlElem<string | null>;
}

interface GlobalSettingsBaseWebsoftPluginServer {
  url: XmlElem<string | null>;
  login: XmlElem<string | null>;
  password: XmlElem<string | null>;
}

interface GlobalSettingsBaseExternalWebPlayers {
  ext_x_lite_grid: XmlElem<boolean>;
  ext_hardcore_source: XmlElem<boolean>;
  openurl_eq_openwindow: XmlElem<boolean>;
}

interface GlobalSettingsBaseCalendar {
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
}

interface GlobalSettingsBasePpmMatrixRowColumn {
  id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  value: XmlElem<string | null>;
  /** URL к файлу фотографии */
  pict_url: XmlElem<string | null>;
  is_base: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  cell_color: XmlElem<string | null>;
}

interface GlobalSettingsBasePpmMatrixRow {
  id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  columns: XmlMultiElem<GlobalSettingsBasePpmMatrixRowColumn | null>;
}

interface GlobalSettingsBasePpmMatrix {
  line_name: XmlElem<string | null>;
  column_name: XmlElem<string | null>;
  rows: XmlMultiElem<GlobalSettingsBasePpmMatrixRow | null>;
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
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseOutstaff extends OutstaffPeriodsBase {
  outstaff_boss_types: XmlMultiElem<GlobalSettingsBaseOutstaffOutstaffBossType | null>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseProjectOptions {
  use_custom_project_status: XmlElem<boolean>;
  use_custom_project_icon: XmlElem<boolean>;
}

interface GlobalSettingsBaseProjectProjectStatusType {
  id: XmlElem<string | null, typeof common.project_status_types>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
  action_name: XmlElem<string | null>;
}

interface GlobalSettingsBaseProject {
  options: XmlElem<GlobalSettingsBaseProjectOptions | null>;
  project_status_types: XmlMultiElem<GlobalSettingsBaseProjectProjectStatusType | null>;
  project_icon_script: XmlElem<string | null>;
}

interface GlobalSettingsBaseProjectTaskOptions {
  use_custom_project_task_status: XmlElem<boolean>;
  use_custom_project_task_icon: XmlElem<boolean>;
}

interface GlobalSettingsBaseProjectTaskProjectTaskStatusType {
  id: XmlElem<string | null, typeof common.task_statuses>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface GlobalSettingsBaseProjectTask {
  options: XmlElem<GlobalSettingsBaseProjectTaskOptions | null>;
  project_task_status_types: XmlMultiElem<GlobalSettingsBaseProjectTaskProjectTaskStatusType | null>;
  project_task_icon_script: XmlElem<string | null>;
}

interface GlobalSettingsBaseCl {
  use_constants: XmlElem<boolean | null>;
  use_cache: XmlElem<boolean | null>;
  access_setting: XmlElem<string>;
}

interface GlobalSettingsBaseKnowlcntrl {
  default_expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
}

interface GlobalSettingsBaseLds {
  brute_password_check: XmlElem<boolean | null>;
  brute_password_count: XmlElem<number | null>;
  brute_password_period: XmlElem<number | null>;
}

interface GlobalSettingsBase extends EventSettingsBase {
  default_web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  web_designs: XmlMultiElem<GlobalSettingsBaseWebDesign | null>;
  portal_base_url: XmlElem<string | null>;
  use_personal_chat_global_policy: XmlElem<boolean | null>;
  personal_chat_confirmation_required: XmlElem<boolean>;
  max_message_in_block_count: XmlElem<number>;
  conversation_debug: XmlElem<boolean>;
  conversation_visible_type_id: XmlElem<string | null, typeof common.conversation_visible_types>;
  use_queue_in_chat: XmlElem<boolean>;
  use_mobile_chat: XmlElem<boolean>;
  default_conversation_type_id: XmlElem<number | null, ConversationTypeCatalogDocumentTopElem>;
  auth_check_eval: XmlElem<string | null>;
  auth_site_access_failed_eval: XmlElem<string | null>;
  login_case_sensitive: XmlElem<boolean>;
  login_domen_sensitive: XmlElem<boolean>;
  use_auth_session: XmlElem<boolean>;
  auth_session_life_time: XmlElem<number>;
  template_cache_type: XmlElem<string, typeof common.template_cache_types>;
  use_web_rules: XmlElem<boolean>;
  web_rules: XmlElem<GlobalSettingsBaseWebRules | null>;
  default_file_source_id: XmlElem<number>;
  search_in_trash: XmlElem<boolean>;
  check_sid: XmlElem<boolean>;
  disp_wellcome_screen: XmlElem<boolean>;
  disp_anonymous_polls: XmlElem<boolean>;
  check_user_required_fields: XmlElem<boolean>;
  required_fields: XmlMultiElem<GlobalSettingsBaseRequiredField | null>;
  web_api_settings: XmlElem<GlobalSettingsBaseWebApiSettings | null>;
  mobile: XmlElem<GlobalSettingsBaseMobile | null>;
  default_contact_type_id: XmlElem<number | null, ContactTypeCatalogDocumentTopElem>;
  default_contact_result_id: XmlElem<number | null, ContactResultCatalogDocumentTopElem>;
  allow_self_register: XmlElem<boolean>;
  self_register_group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  web_banned_self_register: XmlElem<boolean>;
  self_register_disp_custom_elems: XmlElem<boolean>;
  self_register_disp_subs: XmlElem<boolean>;
  self_register_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  self_register_subdivision_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  self_register_position_name: XmlElem<string | null>;
  self_register_use_position_commons: XmlElem<boolean>;
  eval_post_registration_script: XmlElem<boolean>;
  post_registration_script: XmlElem<string | null>;
  eval_prev_registration_script: XmlElem<boolean>;
  prev_registration_script: XmlElem<string | null>;
  script_create_login: XmlElem<boolean>;
  script_create_password: XmlElem<boolean>;
  vclass_hosts: XmlElem<GlobalSettingsBaseVclassHosts | null>;
  library: XmlElem<GlobalSettingsBaseLibrary | null>;
  save_exchange_data_files: XmlElem<boolean>;
  auto_exchange_data: XmlElem<boolean>;
  exchange_period: XmlElem<number>;
  url_exchange_results: XmlElem<string | null>;
  password_format: XmlElem<string>;
  password_auto_rebuild: XmlElem<boolean>;
  pass_validation_formula: XmlElem<string | null>;
  fill_path_subs: XmlElem<boolean>;
  check_access_on_lists: XmlElem<boolean>;
  save_deleted_in_trash: XmlElem<boolean>;
  fill_path_places: XmlElem<boolean>;
  show_creator_editor_name: XmlElem<boolean>;
  show_creator_in_reports: XmlElem<boolean>;
  save_person_change_log: XmlElem<boolean>;
  script_evaluation_cutoff: XmlElem<number | null>;
  max_report_visible_rows: XmlElem<number>;
  default_currency: XmlElem<string | null, typeof lists.currency_types>;
  default_cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  default_expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  cost_center_priority: XmlElem<string | null>;
  timezone_id: XmlElem<number | null, typeof common.timezones>;
  auto_select_status_edu_plan: XmlElem<boolean>;
  soft_kill_before_regenerate: XmlElem<boolean>;
  check_wf_access_assessment: XmlElem<boolean>;
  own_org: XmlElem<GlobalSettingsBaseOwnOrg | null>;
  default_lng: XmlElem<string | null>;
  lngs: XmlMultiElem<GlobalSettingsBaseLng | null>;
  recruitment: XmlElem<GlobalSettingsBaseRecruitment | null>;
  delete_unused_resource: XmlElem<boolean>;
  admin_not_auth: XmlElem<boolean>;
  default_event_result_type_id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  disp_log_web_request: XmlElem<boolean>;
  log_web_request_rec_unloged: XmlElem<boolean>;
  web_request_logging_str: XmlElem<string | null>;
  disp_log_debug: XmlElem<boolean>;
  disp_log_mail_trans: XmlElem<boolean>;
  tracing: XmlElem<boolean>;
  tracing_timeout: XmlElem<number | null>;
  log_embedding_detail: XmlElem<boolean>;
  export_odbc_commant_timeout: XmlElem<number>;
  not_use_doc_contains: XmlElem<boolean>;
  not_use_doc_contains_str_begins: XmlElem<boolean>;
  email_empty_create_notification: XmlElem<boolean>;
  show_all_persons: XmlElem<boolean>;
  websoft_plugin_server: XmlElem<GlobalSettingsBaseWebsoftPluginServer | null>;
  disp_social_block: XmlElem<boolean>;
  social_avatar_priority: XmlElem<string | null, typeof common.social_avatar_priority_types>;
  portal_tracking_type: XmlElem<string>;
  external_web_players: XmlElem<GlobalSettingsBaseExternalWebPlayers | null>;
  calendar: XmlElem<GlobalSettingsBaseCalendar | null>;
  key_position_threat_script: XmlElem<string | null>;
  ppm_matrix: XmlElem<GlobalSettingsBasePpmMatrix | null>;
  statistics: XmlElem<GlobalSettingsBaseStatistics | null>;
  script_queues: XmlElem<GlobalSettingsBaseScriptQueues | null>;
  digital_signature_control: XmlElem<string>;
  use_time_stamp_server: XmlElem<boolean>;
  time_stamp_server_address: XmlElem<string>;
  use_profiling: XmlElem<boolean | null>;
  default_webinar_system_id: XmlElem<number | null, WebinarSystemCatalogDocumentTopElem>;
  lds_url_pattern: XmlElem<string | null>;
  outstaff: XmlElem<GlobalSettingsBaseOutstaff | null>;
  send_learning_additional_info: XmlElem<boolean>;
  set_st_category: XmlElem<boolean>;
  use_queue_learnings: XmlElem<boolean>;
  project: XmlElem<GlobalSettingsBaseProject | null>;
  project_task: XmlElem<GlobalSettingsBaseProjectTask | null>;
  server_agent_time_start: XmlElem<boolean | null>;
  cl: XmlElem<GlobalSettingsBaseCl | null>;
  knowlcntrl: XmlElem<GlobalSettingsBaseKnowlcntrl | null>;
  brute_password_check: XmlElem<boolean | null>;
  brute_password_count: XmlElem<number | null>;
  brute_password_period: XmlElem<number | null>;
  lds: XmlElem<GlobalSettingsBaseLds | null>;
  design_vscode_save_default: XmlElem<string | null, typeof common.design_vscode_save_types>;
  design_vscode_access: XmlElem<string | null, typeof common.design_vscode_access_types>;
  single_learning_session: XmlElem<boolean>;
  course_access_on_education_plan: XmlElem<boolean>;
  unique_id_slot: XmlElem<number | null>;
  use_ws_idm: XmlElem<boolean>;
}

interface InsertFileBase {
  file_name: XmlElem<string | null>;
  data: XmlElem<Binary | null>;
}

interface FileActionBase {
  AssignFile(fileUrl: unknown, source: unknown, params: unknown): unknown;
  DeleteFile(source: unknown): unknown;
  SaveFile(fileUrl: unknown): unknown;
  AddFile(fileId: number, source: unknown): void;
}

interface FileBase {
  file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem> & FileActionBase;
}

interface FileListBase {
  /** Файлы */
  files: XmlMultiElem<FileBase | null>;
  AddFile(fileId: number, docResource: unknown): void;
}

interface CoursePartBase {
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
  /** Проходной балл */
  mastery_score: XmlElem<number | null>;
  url: XmlElem<string | null>;
  /** Ссылка на родительский раздел */
  parent_part_code: XmlElem<string | null>;
  visible: XmlElem<boolean>;
}

interface CoursePartsBase {
  parts: XmlMultiElem<CoursePartBase | null>;
}

interface ImportExcelPersonsBaseColumn {
  /** Номер колонки */
  index: XmlElem<number | null>;
  /** Поле */
  field_name: XmlElem<string | null, typeof common.field_name_types>;
  eval_str: XmlElem<string | null>;
  is_key: XmlElem<boolean>;
}

interface ImportExcelPersonsBaseCollaboratorCustomField {
  /** Номер колонки */
  index: XmlElem<number | null>;
  /** Поле */
  name: XmlElem<string | null>;
}

interface ImportExcelPersonsBaseCollaborator {
  custom_fields: XmlMultiElem<ImportExcelPersonsBaseCollaboratorCustomField | null>;
}

interface ImportExcelPersonsBase {
  /** Путь к файлу */
  file_url: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  columns: XmlMultiElem<ImportExcelPersonsBaseColumn | null>;
  collaborator: XmlElem<ImportExcelPersonsBaseCollaborator | null>;
  /** Запретить доступ на портал */
  web_banned: XmlElem<boolean>;
  /** Отправлять уведомление новым сотрудникам с логином и паролем */
  send_notification: XmlElem<boolean>;
  /** Обновлять данные о сотруднике, если он уже существует в базе */
  update_data: XmlElem<boolean>;
  /** Тип генерации пароля */
  create_password_type: XmlElem<string>;
  /** Пароль один для всех с последующей заменой */
  common_password: XmlElem<string | null>;
  /** Количество символов пароля */
  password_digits_num: XmlElem<number>;
  /** Пропустить первую строку */
  miss_first_row: XmlElem<boolean>;
  /** Выводить предупреждение о совпадении кода или логина, если они уж существуют в базе */
  show_warnings: XmlElem<boolean>;
  /** Блокировать добавление или изменение записей, если обнаружено, что код или логин уже существуют в базе */
  block_import: XmlElem<boolean>;
  /** Выбор организации */
  create_org_type: XmlElem<string>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Разделитель */
  separator: XmlElem<string>;
  /** Предварительно исполняемый код */
  pre_eval_code: XmlElem<string | null>;
  /** Регулярно исполняемый код */
  reg_eval_code: XmlElem<string | null>;
}

interface OrgBase extends EssentialsBase {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Условное название */
  disp_name: XmlElem<string | null>;
  /** Официальное название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Почтовый адрес */
  postal_address: XmlElem<string | null>;
  /** Телефон */
  phone: XmlElem<string | null>;
  /** Факс */
  fax: XmlElem<string | null>;
  email: XmlElem<string | null>;
  web: XmlElem<string | null>;
}

interface ProgramMethodBase extends CostCurrencyTypeBase {
  /** Название */
  name: XmlElem<string | null>;
  /** Тип проведения */
  type: XmlElem<string, typeof common.education_method_types>;
  /** Статус */
  state_id: XmlElem<string, typeof common.education_method_states>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Длительность в часах */
  duration: XmlElem<number | null>;
  /** Длительность в днях */
  duration_days: XmlElem<number | null>;
  /** Количество участников */
  person_num: XmlElem<number | null>;
  /** Тип документооборота */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
}

interface LectorsBaseLector {
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  hours: XmlElem<number | null>;
  weekend_hours: XmlElem<number | null>;
  webinar_url: XmlElem<string | null>;
  participation_id: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

interface LectorsBase {
  lectors: XmlMultiElem<LectorsBaseLector | null>;
}

interface AccessRoleBaseAccessBloc {
  id: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Чтение */
  can_read: XmlElem<boolean | null>;
  /** Запись */
  can_write: XmlElem<boolean | null>;
  /** Удаление */
  can_delete: XmlElem<boolean | null>;
}

interface AccessRoleBaseFuncBlockApplication {
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
  application_code: XmlElem<string | null>;
  /** Включен */
  is_enabled: XmlElem<boolean>;
  /** Уровень доступа */
  access_level: XmlElem<number | null>;
}

interface AccessRoleBaseFuncBlock {
  id: XmlElem<string | null>;
  /** Включен */
  is_enabled: XmlElem<boolean>;
  applications: XmlMultiElem<AccessRoleBaseFuncBlockApplication | null>;
}

interface AccessRoleBase {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Модули */
  access_blocs: XmlMultiElem<AccessRoleBaseAccessBloc | null>;
  /** Управление руководителями */
  can_edit_managers: XmlElem<boolean | null>;
  /** Управление правами доступа */
  can_edit_access: XmlElem<boolean | null>;
  admin_configuration_id: XmlElem<number | null, AdminConfigurationCatalogDocumentTopElem>;
  func_blocks: XmlMultiElem<AccessRoleBaseFuncBlock | null>;
}

interface WorkflowDataBaseWorkflowField {
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
  workflow_state: XmlElem<string | null>;
}

interface WorkflowDataBaseWorkflowLogEntry {
  create_date: XmlElem<Date | null>;
  action_id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  begin_state: XmlElem<string | null>;
  finish_state: XmlElem<string | null>;
  submited: XmlElem<boolean>;
}

interface WorkflowDataBaseWorkflowCustomStateCondition {
  type: XmlElem<string | null>;
  cur_user_type: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  and_or: XmlElem<string>;
  begin_bracket: XmlElem<string | null>;
  finish_bracket: XmlElem<string | null>;
}

interface WorkflowDataBaseWorkflowCustomState {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  next_workflow_custom_state_code: XmlElem<string | null>;
  common_state_code: XmlElem<string | null>;
  conditions: XmlMultiElem<WorkflowDataBaseWorkflowCustomStateCondition | null>;
  condition_eval_str: XmlElem<string | null>;
}

interface WorkflowDataBase {
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  workflow_state_name: XmlElem<string | null>;
  workflow_state_last_date: XmlElem<Date | null>;
  get_workflow_state_name(workflowDoc: unknown): unknown;
  set_workflow_state_last_date(param: unknown): unknown;
  add_workflow_log_entry(param: unknown): unknown;
  is_workflow_init: XmlElem<boolean>;
  workflow_fields: XmlMultiElem<WorkflowDataBaseWorkflowField | null>;
  workflow_log_entrys: XmlMultiElem<WorkflowDataBaseWorkflowLogEntry | null>;
  workflow_custom_states: XmlMultiElem<WorkflowDataBaseWorkflowCustomState | null>;
}

interface ConditionBase {
  type: XmlElem<string | null>;
  workflow_field_id: XmlElem<string | null>;
  workflow_field_value: XmlElem<string | null>;
  workflow_state_id: XmlElem<string | null>;
  cur_user_type: XmlElem<string | null>;
  and_or: XmlElem<string>;
  begin_bracket: XmlElem<string | null>;
  finish_bracket: XmlElem<string | null>;
  usl: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  eval_str: XmlElem<string | null>;
  cur_access_role: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
  cur_parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  cur_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  cur_group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  cur_activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
}

interface ConditionsBase {
  conditions: XmlMultiElem<ConditionBase | null>;
  condition_eval_str: XmlElem<string | null>;
  desc_str: XmlElem<string | null>;
  has_error: XmlElem<boolean>;
  is_false: XmlElem<boolean>;
  error_eval(): unknown;
}

interface PersonFillingBase {
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Должность сотрудника */
  person_position_id: XmlElem<number | null>;
  /** Название должности сотрудника */
  person_position_name: XmlElem<string | null>;
  person_position_code: XmlElem<string | null>;
  /** Организация сотрудника */
  person_org_id: XmlElem<number | null>;
  /** Название организации сотрудника */
  person_org_name: XmlElem<string | null>;
  person_org_code: XmlElem<string | null>;
  /** Подразделение сотрудника */
  person_subdivision_id: XmlElem<number | null>;
  person_subdivision_name: XmlElem<string | null>;
  person_subdivision_code: XmlElem<string | null>;
  /** Код сервера сотрудника */
  person_instance_id: XmlElem<string | null>;
  /** Код сотрудника */
  person_code: XmlElem<string | null>;
}

interface PersonForeignBase {
  person_fullname(): string;
  person_position_name(): unknown;
  person_org_name(): string;
  person_subdivision_name(): string;
  person_instance_id(): unknown;
  person_code(): string;
}

interface ServerBase {
  code: XmlElem<string | null>;
  password: XmlElem<string | null>;
  name: XmlElem<string | null>;
  customer: XmlElem<string | null>;
  package_url: XmlElem<string | null>;
  select_action: XmlElem<string | null>;
  default_replication_time: XmlElem<string>;
  create_exchange_server: XmlElem<boolean | null>;
  web_design_url: XmlElem<string | null>;
  custom_templates_url: XmlElem<string | null>;
  access_roles_url: XmlElem<string | null>;
  lists_url: XmlElem<string | null>;
  lngs_url: XmlElem<string | null>;
  license_file_url: XmlElem<string | null>;
  dlg_select_server_url: XmlElem<string | null>;
  start_info_url: XmlElem<string | null>;
  default_lng: XmlElem<string | null>;
  default_web_design: XmlElem<string | null>;
  recovery_empty_lng_const: XmlElem<boolean>;
}

interface SelectServerBaseInstall {
  skip_reg_page: XmlElem<boolean | null>;
  reg_user_name: XmlElem<string | null>;
  reg_org_name: XmlElem<string | null>;
}

interface SelectServerBase extends ServerBase {
  title_text: XmlElem<string | null>;
  label_text: XmlElem<string | null>;
  disp_select_password: XmlElem<boolean>;
  disp_select_replication_time: XmlElem<boolean>;
  selector_type: XmlElem<string | null>;
  servers: XmlMultiElem<ServerBase | null>;
  replication_time: XmlElem<string | null>;
  install: XmlElem<SelectServerBaseInstall | null>;
}

interface ViewColumnsBaseColumnTileItem {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  collor: XmlElem<string | null>;
}

interface ViewColumnsBaseColumn {
  /** Формула */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  const: XmlElem<string | null>;
  /** Ширина */
  width: XmlElem<string | null>;
  order: XmlElem<string | null>;
  order_field(): unknown;
  sort_field: XmlElem<string | null>;
  is_default: XmlElem<boolean>;
  category_field: XmlElem<string | null>;
  category_type: XmlElem<string | null>;
  catalog_name: XmlElem<string | null>;
  is_link: XmlElem<boolean>;
  tile_items: XmlMultiElem<ViewColumnsBaseColumnTileItem | null>;
  bk_color: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  prohibit_sort: XmlElem<boolean>;
}

interface ViewColumnsBase {
  disp_new_button: XmlElem<boolean>;
  new_button_text: XmlElem<string | null>;
  row_bk_color: XmlElem<string | null>;
  xquery_qual: XmlElem<string | null>;
  row_image_url: XmlElem<string | null>;
  disp_role_selector: XmlElem<boolean>;
  data_fields: XmlElem<string | null>;
  /** Столбцы */
  columns: XmlMultiElem<ViewColumnsBaseColumn | null>;
}

interface CatalogListBaseCatalogObject {
  object_id: XmlElem<number | null>;
  comment: XmlElem<string | null>;
}

interface CatalogListBaseCatalog {
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  title: XmlElem<string | null>;
  all: XmlElem<boolean>;
  objects: XmlMultiElem<CatalogListBaseCatalogObject | null>;
}

interface CatalogListBase {
  catalogs: XmlMultiElem<CatalogListBaseCatalog | null>;
}

interface ExpenseDistributionBaseExpenseItem {
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number | null>;
  unnamed_person_sum: XmlElem<number | null>;
}

interface ExpenseDistributionBase {
  expense_items: XmlMultiElem<ExpenseDistributionBaseExpenseItem | null>;
  expense_item_sum(): unknown;
}

interface ExchangeListsBaseObjectResourceType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ExchangeListsBaseCurrencyTypeModName {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  cent_name: XmlElem<string | null>;
}

interface ExchangeListsBaseCurrencyType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  short_name: XmlElem<string | null>;
  cent_name: XmlElem<string | null>;
  infinite: XmlElem<boolean | null>;
  image_link: XmlElem<string | null>;
  archive: XmlElem<boolean | null>;
  mod_names: XmlMultiElem<ExchangeListsBaseCurrencyTypeModName | null>;
}

interface ExchangeListsBaseLocation {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  url: XmlElem<string | null>;
  tracking_url: XmlElem<string | null>;
}

interface ExchangeListsBaseBenefit {
  name: XmlElem<string | null>;
}

interface ExchangeListsBaseEventForm {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ExchangeListsBaseOrganizationalForm {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ExchangeListsBaseFactColumn {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  query_name: XmlElem<string | null>;
  title: XmlElem<string | null>;
}

interface ExchangeListsBaseFactExtraColumn {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  title: XmlElem<string | null>;
}

interface ExchangeListsBaseFact {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  type: XmlElem<number | null>;
  catalog: XmlElem<string | null>;
  columns: XmlMultiElem<ExchangeListsBaseFactColumn | null>;
  extra_columns: XmlMultiElem<ExchangeListsBaseFactExtraColumn | null>;
}

interface ExchangeListsBaseFilter {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface ExchangeListsBasePersonState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ExchangeListsBaseProfessionalArea {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ExchangeListsBaseImportExcelPersonScheme extends ImportExcelPersonsBase {
  name: XmlElem<string | null>;
}

interface ExchangeListsBaseWebRequirement {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
}

interface ExchangeListsBaseExtExternalscript {
  id: XmlElem<string | null>;
  source_url: XmlElem<string | null>;
}

interface ExchangeListsBaseCompetenceType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ExchangeListsBase {
  object_resource_types: XmlMultiElem<ExchangeListsBaseObjectResourceType | null>;
  currency_types: XmlMultiElem<ExchangeListsBaseCurrencyType | null>;
  locations: XmlMultiElem<ExchangeListsBaseLocation | null>;
  benefits: XmlMultiElem<ExchangeListsBaseBenefit | null>;
  event_forms: XmlMultiElem<ExchangeListsBaseEventForm | null>;
  organizational_forms: XmlMultiElem<ExchangeListsBaseOrganizationalForm | null>;
  facts: XmlMultiElem<ExchangeListsBaseFact | null>;
  filters: XmlMultiElem<ExchangeListsBaseFilter | null>;
  person_states: XmlMultiElem<ExchangeListsBasePersonState | null>;
  professional_areas: XmlMultiElem<ExchangeListsBaseProfessionalArea | null>;
  import_excel_person_schemes: XmlMultiElem<ExchangeListsBaseImportExcelPersonScheme | null>;
  web_requirements: XmlMultiElem<ExchangeListsBaseWebRequirement | null>;
  ext_externalscripts: XmlMultiElem<ExchangeListsBaseExtExternalscript | null>;
  competence_types: XmlMultiElem<ExchangeListsBaseCompetenceType | null>;
}

interface WorkflowFieldsStatesBaseWorkflowFieldEntry {
  /** Значение */
  value: XmlElem<string | null>;
}

interface WorkflowFieldsStatesBaseWorkflowField {
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.template_field_types>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  title: XmlElem<string | null>;
  tooltip: XmlElem<string | null>;
  xquery_qual: XmlElem<string | null>;
  /** Список допустимых значений */
  entries: XmlMultiElem<WorkflowFieldsStatesBaseWorkflowFieldEntry | null>;
  external_value: XmlElem<string | null>;
  external_array: XmlElem<string | null>;
  field_group_id: XmlElem<string | null>;
  /** Обязательное для заполнения */
  is_required: XmlElem<boolean | null>;
}

interface WorkflowFieldsStatesBaseState {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  duration: XmlElem<number | null>;
  parameters: XmlElem<string | null>;
}

interface WorkflowFieldsStatesBase {
  workflow_fields: XmlMultiElem<WorkflowFieldsStatesBaseWorkflowField | null>;
  states: XmlMultiElem<WorkflowFieldsStatesBaseState | null>;
}

interface FuncManagersBaseFuncManager extends PersonFillingBase {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  subordinate_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Дата начала действия */
  start_date: XmlElem<Date | null>;
  /** Дата окончания действия */
  end_date: XmlElem<Date | null>;
  /** Является непосредственным руководителем */
  is_native: XmlElem<boolean>;
  /** Тип руководителя */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface FuncManagersBasePositionManager {
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Является непосредственным руководителем */
  is_native: XmlElem<boolean>;
  /** Тип руководителя */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface FuncManagersBase {
  /** Функциональные руководители */
  func_managers: XmlMultiElem<FuncManagersBaseFuncManager | null>;
  /** Функциональные руководители */
  position_managers: XmlMultiElem<FuncManagersBasePositionManager | null>;
  obtain_func_manager_by_id(personId: number, isNative: boolean): unknown;
}

interface AdminAccessBase {
  /** Роль пользователя */
  user_access_role: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
  /** Группа пользователя */
  user_group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface DocumentPersonsBaseDocumentPerson {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Может создавать */
  can_create: XmlElem<boolean | null>;
  /** Может редактировать */
  can_edit: XmlElem<boolean | null>;
  /** Может удалять */
  can_delete: XmlElem<boolean | null>;
}

interface DocumentPersonsBase {
  document_persons: XmlMultiElem<DocumentPersonsBaseDocumentPerson | null>;
}

interface PathSubsBasePathSub {
  id: XmlElem<number | null, SubCatalogDocumentTopElem>;
  type: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, SubCatalogDocumentTopElem>;
}

interface PathSubsBase {
  path_subs: XmlMultiElem<PathSubsBasePathSub | null>;
  filling_path_subs(): unknown;
}

interface AssessmentScaleValueScale {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Сумма */
  value: XmlElem<number | null>;
  /** Строка */
  value_str: XmlElem<string | null>;
}

interface AssessmentScaleValue {
  /** Шкалы */
  scales: XmlMultiElem<AssessmentScaleValueScale | null>;
}

interface ConstantItemBase {
  id: XmlElem<string | null>;
  rus_text: XmlElem<string | null>;
  rus_text_len: XmlElem<number | null>;
  line_text: XmlElem<string | null>;
  code: XmlElem<string | null>;
  line_index: XmlElem<number | null>;
  index: XmlElem<number | null>;
  col_index: XmlElem<number | null>;
  source_url: XmlElem<string | null>;
  source_url_full: XmlElem<string | null>;
  before_attr_name: XmlElem<string | null>;
  synonym: XmlElem<string | null>;
  synonym_type: XmlElem<string | null>;
  synonym_id: XmlElem<string | null>;
  web_lng_id: XmlElem<string | null>;
  lng_synonym_id: XmlElem<string | null>;
  type: XmlElem<string | null>;
  before_char: XmlElem<string | null>;
  after_char: XmlElem<string | null>;
  is_line_repeat: XmlElem<boolean | null>;
  is_const_block: XmlElem<boolean | null>;
}

interface LastAttemptTestLearningsBaseTestLearning {
  /** Тест */
  test_learning_id: XmlElem<number | null, TestLearningCatalogDocumentTopElem>;
  /** Состояние */
  state_id: XmlElem<number, typeof common.learning_states>;
  /** Баллы */
  score: XmlElem<number>;
  /** Дата начала изучения */
  start_usage_date: XmlElem<Date | null>;
  /** Дата последнего посещ. */
  last_usage_date: XmlElem<Date | null>;
}

interface LastAttemptTestLearningsBase {
  /** Попытки прохождения теста */
  test_learnings: XmlMultiElem<LastAttemptTestLearningsBaseTestLearning | null>;
}

interface DescBase {
  desc_update_hyper_object(): unknown;
  desc_save(descOff: boolean): unknown;
  get_desc(source: unknown): string;
}

interface AccessBlockBaseStructureItemItemItem {
  id: XmlElem<string | null>;
  title: XmlElem<string | null>;
  href: XmlElem<string | null>;
  icon: XmlElem<string | null>;
  access_block_id: XmlElem<string | null>;
  person_link_field: XmlElem<string | null>;
  person_link_catalog_name: XmlElem<string | null>;
}

interface AccessBlockBaseStructureItemItem {
  id: XmlElem<string | null>;
  title: XmlElem<string | null>;
  href: XmlElem<string | null>;
  icon: XmlElem<string | null>;
  access_block_id: XmlElem<string | null>;
  person_link_field: XmlElem<string | null>;
  person_link_catalog_name: XmlElem<string | null>;
  items: XmlMultiElem<AccessBlockBaseStructureItemItemItem | null>;
}

interface AccessBlockBaseStructureItem {
  id: XmlElem<string | null>;
  title: XmlElem<string | null>;
  href: XmlElem<string | null>;
  icon: XmlElem<string | null>;
  access_block_id: XmlElem<string | null>;
  person_link_field: XmlElem<string | null>;
  person_link_catalog_name: XmlElem<string | null>;
  items: XmlMultiElem<AccessBlockBaseStructureItemItem | null>;
}

interface AccessBlockBaseStructure {
  items: XmlMultiElem<AccessBlockBaseStructureItem | null>;
}

interface AccessBlockBase {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  objects_access: XmlElem<string | null>;
  icon_url: XmlElem<string | null>;
  first_catalog_url: XmlElem<string | null>;
  disp: XmlElem<boolean>;
  sys: XmlElem<boolean | null>;
  license_catalogs: XmlElem<string | null>;
  list_index: XmlElem<number | null>;
  structure: XmlElem<AccessBlockBaseStructure | null>;
  is_default: XmlElem<boolean | null>;
}

interface CompetenceScaleBaseScale {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  percent: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  comment_require: XmlElem<boolean>;
}

interface CompetenceScaleBase {
  scales: XmlMultiElem<CompetenceScaleBaseScale | null>;
}

interface CompetenceLevelBaseLevelEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface CompetenceLevelBaseLevelAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  assessment_score: XmlElem<number | null>;
}

interface CompetenceLevelBaseLevelDevelopmentMethod {
  development_method_id: XmlElem<number | null, DevelopmentMethodCatalogDocumentTopElem>;
}

interface CompetenceLevelBaseLevel {
  scale_id: XmlElem<string | null>;
  scale_name: XmlElem<string | null>;
  education_methods: XmlMultiElem<CompetenceLevelBaseLevelEducationMethod | null>;
  assessments: XmlMultiElem<CompetenceLevelBaseLevelAssessment | null>;
  development_methods: XmlMultiElem<CompetenceLevelBaseLevelDevelopmentMethod | null>;
}

interface CompetenceLevelBase {
  levels: XmlMultiElem<CompetenceLevelBaseLevel | null>;
}

interface SupplementaryQuestionsBaseSupplementaryQuestion {
  /** Код дополнительного вопроса */
  supplementary_question_id: XmlElem<number | null, SupplementaryQuestionCatalogDocumentTopElem>;
  /** Название вопроса */
  supplementary_question_name: XmlElem<string | null>;
  /** Тип вопроса */
  supplementary_question_type: XmlElem<string>;
  /** Оценка вопроса */
  supplementary_question_mark: XmlElem<string | null>;
  /** Группа */
  supplementary_question_group: XmlElem<string | null>;
}

interface SupplementaryQuestionsBase {
  /** Дополнительные вопросы */
  supplementary_questions: XmlMultiElem<SupplementaryQuestionsBaseSupplementaryQuestion | null>;
}

interface WorkflowFieldsAssessmentBaseWorkflowField {
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  title: XmlElem<string | null>;
  field_group_id: XmlElem<string | null>;
  value: XmlElem<string | null>;
  is_major: XmlElem<boolean>;
}

interface WorkflowFieldsAssessmentBase {
  workflow_fields: XmlMultiElem<WorkflowFieldsAssessmentBaseWorkflowField | null>;
}

interface ViewAssessmentAppraiseCompetenceReportBaseBlockCompetenceStatus {
  status_id: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  mark: XmlElem<number>;
  count: XmlElem<number>;
  weight: XmlElem<number>;
}

interface ViewAssessmentAppraiseCompetenceReportBaseBlockCompetence {
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  competence_name: XmlElem<string | null>;
  competence_mark: XmlElem<number>;
  competence_weight: XmlElem<number>;
  test_mark: XmlElem<number | null>;
  test_weight: XmlElem<number>;
  statuses: XmlMultiElem<ViewAssessmentAppraiseCompetenceReportBaseBlockCompetenceStatus | null>;
}

interface ViewAssessmentAppraiseCompetenceReportBaseBlockGlobalResults {
  previous_mark: XmlElem<number>;
  previous_weight: XmlElem<number>;
  current_weight: XmlElem<number>;
  result_mark: XmlElem<number | null>;
}

interface ViewAssessmentAppraiseCompetenceReportBaseBlock {
  block_id: XmlElem<number | null, CompetenceBlockCatalogDocumentTopElem>;
  block_name: XmlElem<string | null>;
  block_mark: XmlElem<number>;
  competences: XmlMultiElem<ViewAssessmentAppraiseCompetenceReportBaseBlockCompetence | null>;
  global_results: XmlElem<ViewAssessmentAppraiseCompetenceReportBaseBlockGlobalResults | null>;
}

interface ViewAssessmentAppraiseCompetenceReportBase {
  pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  test_weight: XmlElem<number>;
  blocks: XmlMultiElem<ViewAssessmentAppraiseCompetenceReportBaseBlock | null>;
}

interface DevelopmentPlanDataBaseCompetenceDevelopmentMethodEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBaseCompetenceDevelopmentMethod {
  development_method_id: XmlElem<number | null, DevelopmentMethodCatalogDocumentTopElem>;
  /** Учебные программы */
  education_methods: XmlMultiElem<DevelopmentPlanDataBaseCompetenceDevelopmentMethodEducationMethod | null>;
}

interface DevelopmentPlanDataBaseCompetenceEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBaseCompetenceEducationTypeEducationObject {
  education_object_id: XmlElem<number | null>;
}

interface DevelopmentPlanDataBaseCompetenceEducationType {
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  education_objects: XmlMultiElem<DevelopmentPlanDataBaseCompetenceEducationTypeEducationObject | null>;
}

interface DevelopmentPlanDataBaseCompetenceAim {
  task: XmlElem<string | null>;
  target_date: XmlElem<Date | null>;
  value: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.assessment_appraise_statuses>;
  comment: XmlElem<string | null>;
}

interface DevelopmentPlanDataBaseCompetence extends WorkflowFieldsAssessmentBase {
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  /** Способы развития */
  development_methods: XmlMultiElem<DevelopmentPlanDataBaseCompetenceDevelopmentMethod | null>;
  /** Учебные программы */
  education_methods: XmlMultiElem<DevelopmentPlanDataBaseCompetenceEducationMethod | null>;
  education_types: XmlMultiElem<DevelopmentPlanDataBaseCompetenceEducationType | null>;
  education_comment: XmlElem<string | null>;
  aims: XmlMultiElem<DevelopmentPlanDataBaseCompetenceAim | null>;
  /** Комментарии */
  comment: XmlElem<string | null>;
}

interface DevelopmentPlanDataBaseIndicatorDevelopmentMethod {
  development_method_id: XmlElem<number | null, DevelopmentMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBaseIndicatorEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBaseIndicatorEducationTypeEducationObject {
  education_object_id: XmlElem<number | null>;
}

interface DevelopmentPlanDataBaseIndicatorEducationType {
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  education_objects: XmlMultiElem<DevelopmentPlanDataBaseIndicatorEducationTypeEducationObject | null>;
}

interface DevelopmentPlanDataBaseIndicatorAim {
  task: XmlElem<string | null>;
  target_date: XmlElem<Date | null>;
  value: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.assessment_appraise_statuses>;
  comment: XmlElem<string | null>;
}

interface DevelopmentPlanDataBaseIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id: XmlElem<number | null, IndicatorCatalogDocumentTopElem>;
  /** Способы развития */
  development_methods: XmlMultiElem<DevelopmentPlanDataBaseIndicatorDevelopmentMethod | null>;
  /** Учебные программы */
  education_methods: XmlMultiElem<DevelopmentPlanDataBaseIndicatorEducationMethod | null>;
  education_types: XmlMultiElem<DevelopmentPlanDataBaseIndicatorEducationType | null>;
  education_comment: XmlElem<string | null>;
  aims: XmlMultiElem<DevelopmentPlanDataBaseIndicatorAim | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface DevelopmentPlanDataBasePlaindevelopmentDevelopmentMethod {
  development_method_id: XmlElem<number | null, DevelopmentMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBasePlaindevelopmentEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface DevelopmentPlanDataBasePlaindevelopmentEducationTypeEducationObject {
  education_object_id: XmlElem<number | null>;
}

interface DevelopmentPlanDataBasePlaindevelopmentEducationType {
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  education_objects: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentEducationTypeEducationObject | null>;
}

interface DevelopmentPlanDataBasePlaindevelopmentAim {
  task: XmlElem<string | null>;
  target_date: XmlElem<Date | null>;
  value: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.assessment_appraise_statuses>;
  comment: XmlElem<string | null>;
}

interface DevelopmentPlanDataBasePlaindevelopment extends WorkflowFieldsAssessmentBase {
  name: XmlElem<string | null>;
  /** Способы развития */
  development_methods: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentDevelopmentMethod | null>;
  /** Учебные программы */
  education_methods: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentEducationMethod | null>;
  education_types: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentEducationType | null>;
  education_comment: XmlElem<string | null>;
  aims: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopmentAim | null>;
  /** Комментарии */
  comment: XmlElem<string | null>;
}

interface DevelopmentPlanDataBase {
  /** Компетенции */
  competences: XmlMultiElem<DevelopmentPlanDataBaseCompetence | null>;
  /** Индикаторы */
  indicators: XmlMultiElem<DevelopmentPlanDataBaseIndicator | null>;
  plaindevelopments: XmlMultiElem<DevelopmentPlanDataBasePlaindevelopment | null>;
}

interface FieldNamesBase {

}

interface ColumnBaseColumnCCondition {
  option_type: XmlElem<string, typeof common.all_option_types>;
  color: XmlElem<string | null>;
  bkcolor: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface ColumnBaseColumnForeignField {
  name: XmlElem<string | null>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  is_custom: XmlElem<boolean | null>;
  target: XmlElem<string | null>;
}

interface ColumnBaseColumn {
  column_name: XmlElem<string>;
  column_title: XmlElem<string | null>;
  column_foreign_name: XmlElem<string | null>;
  column_foreign_catalog_2: XmlElem<string | null>;
  column_foreign_name_2: XmlElem<string | null>;
  column_value: XmlElem<string | null>;
  column_width: XmlElem<number | null>;
  column_width_unit: XmlElem<string>;
  column_color: XmlElem<string | null>;
  column_bkcolor: XmlElem<string | null>;
  datatype: XmlElem<string, typeof common.spxml_types>;
  flag_formula: XmlElem<boolean>;
  flag_formula_post_process: XmlElem<boolean>;
  flag_visible: XmlElem<boolean>;
  flag_lng: XmlElem<boolean>;
  c_conditions: XmlMultiElem<ColumnBaseColumnCCondition | null>;
  foreign_field: XmlElem<ColumnBaseColumnForeignField | null>;
}

interface ColumnBase {
  columns: XmlMultiElem<ColumnBaseColumn | null>;
}

interface ChartReportGraphBase {
  disp_legend: XmlElem<boolean>;
  chart_id: XmlElem<string, typeof common.charts>;
  flag_showvalues: XmlElem<boolean | null>;
  plot_type: XmlElem<string>;
}

interface CriterionBaseCriterionCatalogChain extends FieldNamesBase, ViewConditionsBase {
  catalog_name: XmlElem<string | null>;
  field: XmlElem<string | null>;
  scheme_id: XmlElem<string | null, typeof lists.view_conditions_schemes>;
}

interface CriterionBaseCriterion {
  value: XmlElem<string | null>;
  column_title: XmlElem<string | null>;
  type: XmlElem<string | null>;
  option_type: XmlElem<string, typeof common.all_option_types>;
  and_or: XmlElem<string>;
  is_custom_field: XmlElem<boolean>;
  catalog_chains: XmlMultiElem<CriterionBaseCriterionCatalogChain | null>;
  flag_value_filter: XmlElem<boolean>;
  flag_is_parameter: XmlElem<boolean>;
  flag_hierarchy: XmlElem<number>;
  flag_active: XmlElem<boolean>;
  open_bracket: XmlElem<string | null>;
  close_bracket: XmlElem<string | null>;
}

interface CriterionBase extends FieldNamesBase {
  criterions: XmlMultiElem<CriterionBaseCriterion | null>;
}

interface CustomReportBaseSort {
  col_index: XmlElem<number | null>;
  asc: XmlElem<boolean>;
}

interface CustomReportBaseAggregationAggregateSecondary {
  option_type: XmlElem<string, typeof common.all_option_types>;
  column_value: XmlElem<string | null>;
}

interface CustomReportBaseAggregation {
  aggregate_function: XmlElem<string | null>;
  aggregate_column: XmlElem<number | null>;
  flag_graph: XmlElem<boolean | null>;
  aggregate_secondary: XmlElem<CustomReportBaseAggregationAggregateSecondary | null>;
}

interface CustomReportBase extends CriterionBase, ColumnBase, ChartReportGraphBase {
  object_name_type: XmlElem<string>;
  object_name: XmlElem<string | null>;
  flag_open_param_tun_section: XmlElem<boolean>;
  flag_custom_x: XmlElem<boolean>;
  custom_x: XmlElem<string | null>;
  show_table: XmlElem<boolean>;
  show_chart: XmlElem<boolean>;
  get_report_data(reportId: number, userId: number): unknown;
  get_crit_hash(): unknown;
  extractVolatileData(): unknown;
  condenseVolatileData(volatile: unknown): unknown;
  report_result_date: XmlElem<Date | null>;
  report_result_author: XmlElem<string | null>;
  performance_launch_time: XmlElem<Date | null>;
  performance_search_time: XmlElem<Date | null>;
  performance_process_time: XmlElem<Date | null>;
  sort: XmlElem<CustomReportBaseSort | null>;
  categorize: XmlElem<boolean>;
  categorize_view: XmlElem<string>;
  categorize_hide_details: XmlElem<boolean>;
  aggregations: XmlMultiElem<CustomReportBaseAggregation | null>;
  show_total: XmlElem<boolean>;
  integrated_criterion_field: XmlElem<string | null>;
  integrated_criterion_field_is_custom: XmlElem<boolean | null>;
  integrated_criterion_value: XmlElem<string | null>;
}

interface KnowledgePartsFieldsBaseKnowledgePart {
  /** Значения карты знаний */
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  knowledge_part_name: XmlElem<string | null>;
  knowledge_part_level_id: XmlElem<number | null, KnowledgePartLevelCatalogDocumentTopElem>;
  /** Родительское значение */
  full_path: XmlElem<string | null>;
  current_level_id: XmlElem<string | null>;
  current_level_index: XmlElem<number | null>;
  current_level_name: XmlElem<string | null>;
  target_level_id: XmlElem<string | null>;
  target_level_index: XmlElem<number | null>;
  target_level_name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Требует подтверждения */
  require_acknowledgement: XmlElem<boolean>;
}

interface KnowledgePartsFieldsBase {
  knowledge_parts: XmlMultiElem<KnowledgePartsFieldsBaseKnowledgePart | null>;
}

interface KnowledgePartsKpBaseTag {
  tag_id: XmlElem<number | null, TagCatalogDocumentTopElem>;
  tag_name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Требует подтверждения */
  require_acknowledgement: XmlElem<boolean>;
}

interface KnowledgePartsKpBase extends KnowledgePartsFieldsBase {
  /** Тэги */
  tags: XmlMultiElem<KnowledgePartsKpBaseTag | null>;
  acquaint_time: XmlElem<number | null>;
  previous_version_object_id: XmlElem<number | null>;
  /** Статус */
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  /** Дата начала действия */
  kp_start_date: XmlElem<Date | null>;
  /** Дата окончания действия */
  kp_end_date: XmlElem<Date | null>;
}

interface KnowledgePartsBaseTag {
  tag_id: XmlElem<number | null, TagCatalogDocumentTopElem>;
  tag_name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Требует подтверждения */
  require_acknowledgement: XmlElem<boolean>;
}

interface KnowledgePartsBaseExpert {
  expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
}

interface KnowledgePartsBase extends KnowledgePartsFieldsBase {
  /** Тэги */
  tags: XmlMultiElem<KnowledgePartsBaseTag | null>;
  experts: XmlMultiElem<KnowledgePartsBaseExpert | null>;
  acquaint_time: XmlElem<number | null>;
  previous_version_object_id: XmlElem<number | null>;
  /** Статус */
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  /** Дата начала действия */
  kp_start_date: XmlElem<Date | null>;
  /** Дата окончания действия */
  kp_end_date: XmlElem<Date | null>;
}

interface KnowledgePartsBaseOld {
  /** Дата начала действия */
  start_date: XmlElem<Date | null>;
  /** Дата окончания действия */
  end_date: XmlElem<Date | null>;
}

interface CustomElemsBaseCustomElem {
  /** Название */
  name: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<null | undefined | string | Date | number | boolean | null>;
}

interface CustomElemsBase {
  /** Настраиваемые поля */
  custom_elems: XmlMultiElem<CustomElemsBaseCustomElem | null>;
  check_fields_default_value(curUser: CurUser): unknown;
}

interface EstimationLevelsBaseEstimationLevel {
  id: XmlElem<string | null>;
  score: XmlElem<number | null>;
  desc: XmlElem<string | null>;
}

interface EstimationLevelsBase {
  estimation_levels: XmlMultiElem<EstimationLevelsBaseEstimationLevel | null>;
}

interface TableDataBaseFile extends InsertFileBase {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  /** Тип ресурса */
  type: XmlElem<string, typeof common.resource_types>;
}

interface TableDataBaseRC {
  name: XmlElem<string | null>;
  t: XmlElem<string | null>;
  s: XmlElem<string | null>;
  cl: XmlElem<string | null>;
  r: XmlElem<number | null>;
}

interface TableDataBaseR {
  f: XmlElem<boolean | null>;
  ex: XmlElem<boolean | null>;
  bkc: XmlElem<string | null>;
  cs: XmlMultiElem<TableDataBaseRC | null>;
}

interface TableDataBase {
  /** Файлы */
  files: XmlMultiElem<TableDataBaseFile | null>;
  has_fixed_rows: XmlElem<boolean | null>;
  run_report: XmlElem<boolean | null>;
  last_sort_direction: XmlElem<string | null>;
  rs: XmlMultiElem<TableDataBaseR | null>;
}

interface TableDataBaseExtended {
  excel_file_url: XmlElem<string | null>;
  data: XmlElem<TableDataBase | null>;
  fnGetFile(fileId: number): unknown;
}

interface ObjectiveBase {
  objective_id: XmlElem<string | null>;
  score: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.learning_states>;
  completion_status: XmlElem<string | null, typeof common.objective_status_types>;
  success_status: XmlElem<string | null, typeof common.objective_success_status_types>;
  description: XmlElem<string | null>;
}

interface InteractionBase {
  interaction_id: XmlElem<string | null>;
  time: XmlElem<string | null>;
  objectives: XmlElem<string | null>;
  type_interaction: XmlElem<string | null, typeof common.interaction_types>;
  correct_responses: XmlElem<string | null>;
  student_response: XmlElem<string | null>;
  result: XmlElem<string | null>;
  weighting: XmlElem<string | null>;
  latency: XmlElem<string | null>;
  description: XmlElem<string | null>;
}

interface AnnalsObjectsBaseObjectDataAssessment {
  ident: XmlElem<unknown | null>;
  viewed: XmlElem<unknown | null>;
  answered: XmlElem<unknown | null>;
  completed: XmlElem<unknown | null>;
  timestamp: XmlElem<string | null>;
  latency: XmlElem<string | null>;
  duration: XmlElem<string | null>;
}

interface AnnalsObjectsBaseObjectDataSectionItemlistSectionitem {
  ident: XmlElem<unknown | null>;
}

interface AnnalsObjectsBaseObjectDataSectionItemlist {
  sectionitem: XmlElem<AnnalsObjectsBaseObjectDataSectionItemlistSectionitem | null>;
}

interface AnnalsObjectsBaseObjectDataSection {
  ident: XmlElem<unknown | null>;
  viewed: XmlElem<unknown | null>;
  answered: XmlElem<unknown | null>;
  completed: XmlElem<unknown | null>;
  timestamp: XmlElem<string | null>;
  latency: XmlElem<string | null>;
  duration: XmlElem<string | null>;
  itemlist: XmlElem<AnnalsObjectsBaseObjectDataSectionItemlist | null>;
}

interface AnnalsObjectsBaseObjectDataItemAttempts {
  max: XmlElem<unknown | null>;
  attempt: XmlMultiElemObject<string | null>;
}

interface AnnalsObjectsBaseObjectDataItemObjectivesObj {
  id: XmlElem<unknown | null>;
  type: XmlElem<unknown | null>;
  value: XmlElem<unknown | null>;
}

interface AnnalsObjectsBaseObjectDataItemObjectives {
  obj: XmlElem<AnnalsObjectsBaseObjectDataItemObjectivesObj | null>;
}

interface AnnalsObjectsBaseObjectDataItem {
  ident: XmlElem<unknown | null>;
  viewed: XmlElem<unknown | null>;
  answered: XmlElem<unknown | null>;
  completed: XmlElem<unknown | null>;
  status: XmlElem<unknown | null>;
  type: XmlElem<unknown | null>;
  itemnumber: XmlElem<unknown | null>;
  scoring: XmlElem<unknown | null>;
  shuffle: XmlElem<unknown | null>;
  maxnumber: XmlElem<unknown | null>;
  minnumber: XmlElem<unknown | null>;
  timestamp: XmlElem<string | null>;
  latency: XmlElem<string | null>;
  duration: XmlElem<string | null>;
  attempts: XmlElem<AnnalsObjectsBaseObjectDataItemAttempts | null>;
  objectives: XmlElem<AnnalsObjectsBaseObjectDataItemObjectives | null>;
  comment: XmlElem<string | null>;
}

interface AnnalsObjectsBaseObjectDataObjective {
  ident: XmlElem<unknown | null>;
  type: XmlElem<unknown | null>;
  value: XmlElem<unknown | null>;
}

interface AnnalsObjectsBaseObjectDataActiveTask {
  ident: XmlElem<unknown | null>;
}

interface AnnalsObjectsBaseObjectDataActive {
  screen: XmlElem<unknown | null>;
  task: XmlElem<AnnalsObjectsBaseObjectDataActiveTask | null>;
}

interface AnnalsObjectsBaseObjectDataSequenceScreenTask {
  ident: XmlElem<unknown | null>;
  num: XmlElem<unknown | null>;
  layout: XmlElem<unknown | null>;
  secnum: XmlElem<unknown | null>;
}

interface AnnalsObjectsBaseObjectDataSequenceScreen {
  num: XmlElem<unknown | null>;
  type: XmlElem<unknown | null>;
  task: XmlElem<AnnalsObjectsBaseObjectDataSequenceScreenTask | null>;
}

interface AnnalsObjectsBaseObjectDataSequence {
  type: XmlElem<unknown | null>;
  select: XmlElem<unknown | null>;
  screen: XmlElem<AnnalsObjectsBaseObjectDataSequenceScreen | null>;
}

interface AnnalsObjectsBaseObjectData {
  assessment: XmlElem<AnnalsObjectsBaseObjectDataAssessment | null>;
  sections: XmlMultiElem<AnnalsObjectsBaseObjectDataSection | null>;
  items: XmlMultiElem<AnnalsObjectsBaseObjectDataItem | null>;
  objectives: XmlMultiElem<AnnalsObjectsBaseObjectDataObjective | null>;
  active: XmlElem<AnnalsObjectsBaseObjectDataActive | null>;
  sequence: XmlElem<AnnalsObjectsBaseObjectDataSequence | null>;
}

interface AnnalsObjectsBaseObject {
  id: XmlElem<unknown | null>;
  attempt_id: XmlElem<string | null>;
  file: XmlElem<string | null>;
  objtype: XmlElem<string | null>;
  data: XmlElem<AnnalsObjectsBaseObjectData | null>;
}

interface AnnalsObjectsBase {
  objects: XmlMultiElem<AnnalsObjectsBaseObject | null>;
}

interface AnnalsNumsBase {
  /** Вопросов */
  question_num: XmlElem<number | null>;
  /** Вопросов отвечено */
  question_answered_num: XmlElem<number | null>;
  /** Вопросов, отвеченных верно */
  question_passed_num: XmlElem<number | null>;
}

interface LearningObjectivesInteractionsBase {
  objectives: XmlMultiElem<ObjectiveBase | null>;
  interactions: XmlMultiElem<InteractionBase | null>;
  scoring_type: XmlElem<string | null>;
}

interface CoreLessonBaseDataLesson {
  /** Блок данных Core_Vendor */
  core_vendor: XmlElem<string | null>;
  /** Блок данных Objectives_Status */
  objectives_status: XmlElem<string | null>;
  /** Блок данных Evaluation */
  evaluation: XmlElem<string | null>;
  /** Блок данных Comments */
  comments: XmlElem<string | null>;
  /** Блок данных Student_Data */
  student_data: XmlElem<string | null>;
  /** Блок данных Student_Preferences */
  student_preferences: XmlElem<string | null>;
  /** Блок данных Student_Demographics */
  student_demographics: XmlElem<string | null>;
}

interface CoreLessonBase {
  /** Данные курса */
  core_lesson: XmlElem<string | null>;
  /** Данные о прохождении курса */
  lesson_report: XmlElem<string | null>;
  /** Данные учебного модуля */
  data_lesson: XmlElem<CoreLessonBaseDataLesson | null>;
}

interface CoreLessonInfoBase {
  learning_part_id: XmlElem<number | null, LearningPartCatalogDocumentTopElem>;
  filing_learning_part(setChanged: boolean): unknown;
  save_learning_part(save: boolean): unknown;
}

interface LearningAssessmentBase extends AnnalsObjectsBase {
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Название теста */
  assessment_name: XmlElem<string | null>;
  /** Код теста */
  assessment_code: XmlElem<string | null>;
  /** QTI теста */
  qti_text: XmlElem<string | null>;
  qti_date: XmlElem<Date | null>;
  expert_eval: XmlElem<boolean>;
  adaptive_eval: XmlElem<boolean>;
  /** Назначен самостоятельно */
  is_self_enrolled: XmlElem<boolean | null>;
}

interface LearningPartBaseLog {
  date: XmlElem<Date | null>;
  location: XmlElem<string | null>;
  type: XmlElem<string | null>;
  text: XmlElem<string | null>;
  log: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

interface LearningPartBaseStatement {
  /** Учебная активность */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  /** Статус учебной активности */
  activity_state_id: XmlElem<number | null, ActivityStateCatalogDocumentTopElem>;
  score: XmlElem<number>;
}

interface LearningPartBase extends CoreLessonInfoBase, CoreLessonBase, LearningObjectivesInteractionsBase, LearningAssessmentBase, LastAttemptTestLearningsBase {
  /** Код */
  code: XmlElem<string | null>;
  /** Название раздела */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.course_part_types>;
  cl_module_protocol: XmlElem<string | null>;
  /** Родительский раздел */
  parent_part_code: XmlElem<string | null>;
  course_module_id: XmlElem<number | null>;
  object_id: XmlElem<number | null>;
  /** Статус */
  state_id: XmlElem<number, typeof common.learning_states>;
  /** Данные положения курса */
  lesson_location: XmlElem<string | null>;
  /** Баллы */
  score: XmlElem<number>;
  /** Строка баллов */
  score_str: XmlElem<string | null>;
  max_score_per_attempt: XmlElem<number>;
  /** Дата активации */
  start_usage_date: XmlElem<Date | null>;
  /** Дата последнего посещ. */
  last_usage_date: XmlElem<Date | null>;
  /** Время модуля */
  time: XmlElem<number | null>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
  /** Количество попыток */
  attempts_num: XmlElem<number>;
  /** Текущий номер попытки */
  cur_attempt_num: XmlElem<number>;
  use_proctoring: XmlElem<boolean | null>;
  logs: XmlMultiElem<LearningPartBaseLog | null>;
  statements: XmlMultiElem<LearningPartBaseStatement | null>;
}

interface WebVariablesBaseWvarEntry {
  /** Значение */
  id: XmlElem<string | null>;
  /** Описание */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.template_field_types>;
  /** Тип объекта */
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface WebVariablesBaseWvarViewCondition {
  id: XmlElem<string | null>;
  /** Параметр */
  wvar_name: XmlElem<string | null>;
  /** Условие */
  option_type: XmlElem<string, typeof common.all_option_types>;
  /** Значение */
  value: XmlElem<string | null>;
  /** Условие */
  and_or: XmlElem<string>;
}

interface WebVariablesBaseWvarView {
  /** Условия видимости */
  conditions: XmlMultiElem<WebVariablesBaseWvarViewCondition | null>;
}

interface WebVariablesBaseWvar {
  /** Название */
  name: XmlElem<string | null>;
  /** Родительский элемент */
  parent_wvar_name: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string, typeof common.template_field_types>;
  /** Тип объекта */
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Условие XQuery (относительно $elem) */
  xquery_qual: XmlElem<string | null>;
  /** Значения */
  entries: XmlMultiElem<WebVariablesBaseWvarEntry | null>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /** Описание */
  description: XmlElem<string | null>;
  silent: XmlElem<boolean>;
  /** Позиция */
  position: XmlElem<number>;
  view: XmlElem<WebVariablesBaseWvarView | null>;
  required: XmlElem<boolean>;
}

interface WebVariablesBase {
  /** Переменные */
  wvars: XmlMultiElem<WebVariablesBaseWvar | null>;
  wvars_num(): unknown;
}

interface EducGroupsBaseEducGroupCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface EducGroupsBaseEducGroupLector {
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
}

interface EducGroupsBaseEducGroup {
  group_id: XmlElem<string | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** Место проведения */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** Сотрудники */
  collaborators: XmlMultiElem<EducGroupsBaseEducGroupCollaborator | null>;
  /** Преподаватели */
  lectors: XmlMultiElem<EducGroupsBaseEducGroupLector | null>;
}

interface EducGroupsBase {
  /** Учебные группы */
  educ_groups: XmlMultiElem<EducGroupsBaseEducGroup | null>;
}

interface EventCatalogBase {
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Тип */
  type_id: XmlElem<string | null, typeof common.event_types>;
  /** Тип */
  event_type_id: XmlElem<number | null, EventTypeCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Статус */
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  /** Количество участников */
  person_num: XmlElem<number | null>;
  /** Количество неименованных участников */
  unnamed_person_num: XmlElem<number | null>;
  /** Организационная форма */
  organizational_form: XmlElem<string | null, typeof lists.organizational_forms>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Название обучающей организации */
  education_org_name: XmlElem<string | null>;
  /** Общая стоимость */
  total_cost: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
}

interface CostCentersBaseCostCenterExpenseItem {
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number | null>;
}

interface CostCentersBaseCostCenter {
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  person_num: XmlElem<number | null>;
  sum(): number;
  /** Статьи затрат */
  expense_items: XmlMultiElem<CostCentersBaseCostCenterExpenseItem | null>;
}

interface CostCentersBase {
  /** Центры затрат */
  cost_centers: XmlMultiElem<CostCentersBaseCostCenter | null>;
}

interface EduMethodTestingBasePrevTestingAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface EduMethodTestingBasePrevTesting {
  auto_assign: XmlElem<boolean | null>;
  assessments: XmlMultiElem<EduMethodTestingBasePrevTestingAssessment | null>;
}

interface EduMethodTestingBasePostTestingAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface EduMethodTestingBasePostTesting {
  auto_assign: XmlElem<boolean | null>;
  assessments: XmlMultiElem<EduMethodTestingBasePostTestingAssessment | null>;
}

interface EduMethodTestingBase {
  prev_testing: XmlElem<EduMethodTestingBasePrevTesting | null>;
  post_testing: XmlElem<EduMethodTestingBasePostTesting | null>;
}

interface EduMethodTestingBaseAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface SkillsBaseSkill {
  skill_id: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  skill_name: XmlElem<string | null>;
  skill_id_with_levels: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  level_id: XmlElem<string | null>;
  level_name: XmlElem<string | null>;
}

interface SkillsBase {
  /** Требуемые навыки */
  skills: XmlMultiElem<SkillsBaseSkill | null>;
}

interface RequirementsBaseRequirement {
  id: XmlElem<string | null>;
  /** Требование */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface RequirementsBaseCertificateType {
  /** Название */
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseCompoundProgram {
  /** Название */
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseEducationMethod {
  /** Название */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Периодичность назначения */
  period: XmlElem<number | null>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseTypicalDevelopmentProgram {
  /** Типовая программа развития */
  typical_development_program_id: XmlElem<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  job_transfer_type_id: XmlElem<string | null, typeof common.job_transfer_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface RequirementsBaseQualification {
  /** Название */
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseCourse {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
}

interface RequirementsBaseAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface RequirementsBaseRecomendedLibraryMaterial {
  /** Материал библиотеки */
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
}

interface RequirementsBaseProfessionalArea {
  professional_area_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
}

interface RequirementsBase extends SkillsBase {
  requirements: XmlMultiElem<RequirementsBaseRequirement | null>;
  /** Требуемые типы сертификатов */
  certificate_types: XmlMultiElem<RequirementsBaseCertificateType | null>;
  /** Требуемые модульные программы */
  compound_programs: XmlMultiElem<RequirementsBaseCompoundProgram | null>;
  /** Требуемые учебные программы */
  education_methods: XmlMultiElem<RequirementsBaseEducationMethod | null>;
  obligatory_education_amount: XmlElem<number | null>;
  education_period: XmlElem<number | null>;
  /** Требуемые типовые программы развития */
  typical_development_programs: XmlMultiElem<RequirementsBaseTypicalDevelopmentProgram | null>;
  /** Требуемые квалификации */
  qualifications: XmlMultiElem<RequirementsBaseQualification | null>;
  /** Курсы */
  courses: XmlMultiElem<RequirementsBaseCourse | null>;
  /** Требуемые тесты */
  assessments: XmlMultiElem<RequirementsBaseAssessment | null>;
  recomended_library_materials: XmlMultiElem<RequirementsBaseRecomendedLibraryMaterial | null>;
  /** Профессиональные области */
  professional_areas: XmlMultiElem<RequirementsBaseProfessionalArea | null>;
  /** Образование */
  educ_type_id: XmlElem<string | null, typeof common.educ_types>;
  /** Образование */
  education_type_id: XmlElem<number | null, EducationTypeCatalogDocumentTopElem>;
  /** Возраст от */
  age_min: XmlElem<number | null>;
  /** Возраст до */
  age_max: XmlElem<number | null>;
  experience_in_company: XmlElem<number | null>;
  experience_in_current_position: XmlElem<number | null>;
}

interface LearningCurrentStateBase {
  /** Текущие баллы */
  cur_score: XmlElem<number>;
  /** Текущая строка баллов */
  cur_score_str: XmlElem<string | null>;
  /** Текущее состояние */
  cur_state_id: XmlElem<number, typeof common.learning_states>;
}

interface CourseExpertsBasePerson extends PersonFillingBase {
  id: XmlElem<string | null>;
  /** Эксперт курса */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.course_expert_types>;
}

interface CourseExpertsBase {
  persons: XmlMultiElem<CourseExpertsBasePerson | null>;
}

interface GeneralStorageInfoBaseMssqlStorageModeParametrs {
  server: XmlElem<string | null>;
  trusted_connection: XmlElem<boolean>;
  username: XmlElem<string | null>;
  password: XmlElem<string | null>;
  database: XmlElem<string | null>;
  collation: XmlElem<string | null>;
  create_on_fail: XmlElem<boolean>;
  db_directory: XmlElem<string | null>;
  db_size: XmlElem<number>;
}

interface GeneralStorageInfoBaseOracleStorageModeParametrs {
  oracle_connection_string: XmlElem<string | null>;
  oracle_db_type: XmlElem<string, typeof common.oracle_db_types>;
  initialize_db: XmlElem<boolean>;
  scheme: XmlElem<string | null>;
  username: XmlElem<string | null>;
  password: XmlElem<string | null>;
}

interface GeneralStorageInfoBaseAzureStorageModeParametrs {
  server: XmlElem<string | null>;
  username: XmlElem<string | null>;
  password: XmlElem<string | null>;
  database: XmlElem<string | null>;
  collation: XmlElem<string | null>;
  create_on_fail: XmlElem<boolean>;
  db_size: XmlElem<number>;
  storage_account_name: XmlElem<string | null>;
  storage_account_key: XmlElem<string | null>;
  storage_account: XmlElem<string | null>;
}

interface GeneralStorageInfoBase {
  storage_mode: XmlElem<string | null, typeof common.possible_storages>;
  error_code: XmlElem<number | null>;
  error: XmlElem<string | null>;
  mssql_storage_mode_parametrs: XmlElem<GeneralStorageInfoBaseMssqlStorageModeParametrs | null>;
  oracle_storage_mode_parametrs: XmlElem<GeneralStorageInfoBaseOracleStorageModeParametrs | null>;
  azure_storage_mode_parametrs: XmlElem<GeneralStorageInfoBaseAzureStorageModeParametrs | null>;
}

interface PathPlacesBasePathPlace {
  id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
}

interface PathPlacesBase {
  old_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  path_places: XmlMultiElem<PathPlacesBasePathPlace | null>;
  filling_path_places(): unknown;
}

interface DownloadPackageBase {
  id: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.package_types>;
  url: XmlElem<string | null>;
  base_url: XmlElem<string | null>;
  package_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
}

interface DownloadPackageLogBaseObject {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  selected: XmlElem<boolean>;
  id_exists_type: XmlElem<string>;
  object_form: XmlElem<string | null>;
}

interface DownloadPackageLogBaseDeletedObjectsObject {
  id: XmlElem<number | null>;
  del_date: XmlElem<Date | null>;
  selected: XmlElem<boolean>;
}

interface DownloadPackageLogBaseDeletedObjects {
  object: XmlElem<DownloadPackageLogBaseDeletedObjectsObject | null>;
}

interface DownloadPackageLogBaseCustomTemplate {
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.template_field_types>;
  title: XmlElem<string | null>;
  selected: XmlElem<boolean>;
}

interface DownloadPackageLogBaseAccessRole {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  selected: XmlElem<boolean>;
}

interface DownloadPackageLogBaseList {
  field: XmlElem<string | null>;
  num: XmlElem<number | null>;
  selected: XmlElem<boolean>;
}

interface DownloadPackageLogBase {
  selected_custom_templates: XmlElem<boolean>;
  selected_roles: XmlElem<boolean>;
  objects: XmlMultiElem<DownloadPackageLogBaseObject | null>;
  deleted_objects: XmlElem<DownloadPackageLogBaseDeletedObjects | null>;
  custom_templates: XmlMultiElem<DownloadPackageLogBaseCustomTemplate | null>;
  access_roles: XmlMultiElem<DownloadPackageLogBaseAccessRole | null>;
  lists: XmlMultiElem<DownloadPackageLogBaseList | null>;
}

interface BlockReportsBaseBlockReportReportReport {
  url: XmlElem<string | null>;
  title: XmlElem<string | null>;
  disp_web_client: XmlElem<boolean>;
}

interface BlockReportsBaseBlockReportReport {
  url: XmlElem<string | null>;
  title: XmlElem<string | null>;
  disp_web_client: XmlElem<boolean>;
  reports: XmlMultiElem<BlockReportsBaseBlockReportReportReport | null>;
}

interface BlockReportsBaseBlockReport {
  id: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  reports: XmlMultiElem<BlockReportsBaseBlockReportReport | null>;
}

interface BlockReportsBase {
  block_reports: XmlMultiElem<BlockReportsBaseBlockReport | null>;
}

interface ZonesBaseZone {
  /** Название */
  name: XmlElem<string | null>;
  tag_id: XmlElem<string | null>;
  style: XmlElem<string | null>;
  class: XmlElem<string | null>;
  parent_zone: XmlElem<string | null>;
  is_mandatory: XmlElem<boolean>;
  position: XmlElem<number>;
}

interface ZonesBase {
  zones: XmlMultiElem<ZonesBaseZone | null>;
}

interface ViewDispButtonBase {
  disp_second_new_button: XmlElem<boolean>;
  second_button_text: XmlElem<string | null>;
  second_button_image_url: XmlElem<string | null>;
  no_doc: XmlElem<boolean>;
}

interface TalentPoolFuncManagersBaseTalentPoolFuncManager extends PersonFillingBase {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Является непосредственным руководителем */
  is_native: XmlElem<boolean>;
  /** Тип руководителя */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface TalentPoolFuncManagersBase {
  talent_pool_func_managers: XmlMultiElem<TalentPoolFuncManagersBaseTalentPoolFuncManager | null>;
  obtain_talent_pool_func_manager_by_id(personId: number, isNative: boolean): unknown;
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
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
}

interface CourseSettingsBaseSettings {
  /** Открывать автоматически, если в курсе один модуль */
  open_single_module: XmlElem<boolean>;
  /** Открывать автоматически первый модуль при первом входе */
  open_first_module: XmlElem<boolean>;
  /** Открывать автоматически последний посещенный модуль при продолжении обучения */
  open_last_visited: XmlElem<boolean>;
  /** Если последний посещенный модуль уже завершен, открыть автоматически следующий по порядку */
  open_next_after_completed: XmlElem<boolean>;
  no_display_status_msg: XmlElem<boolean>;
  /** Разрешить пользователю завершать курс */
  enable_user_completion: XmlElem<boolean>;
  /** Показывать сообщение при выполнении условий завершения */
  display_completion_msg: XmlElem<boolean>;
  /** Сообщение при выполнении условий завершения */
  completion_msg: XmlElem<string | null>;
  /** Разрешить проверки компонентов */
  allow_checks: XmlElem<boolean>;
  /** Действие, если отсутствуют требуемые компоненты */
  after_checks: XmlElem<string>;
  launch_type: XmlElem<string | null>;
  panel: XmlElem<boolean | null>;
  course_finish_action: XmlElem<string | null>;
  course_finish_msg: XmlElem<string | null>;
  course_manually_finish_msg: XmlElem<string | null>;
}

interface CourseSettingsBase {
  settings: XmlElem<CourseSettingsBaseSettings | null>;
}

interface WebChecksBaseChecksBrowserCheck {
  /** Тип */
  type: XmlElem<string | null, typeof lists.web_requirements>;
  /** Условие */
  cond: XmlElem<string | null, typeof common.all_option_types>;
  /** Версия */
  version: XmlElem<number | null>;
}

interface WebChecksBaseChecksBrowser {
  /** Браузер */
  check: XmlElem<WebChecksBaseChecksBrowserCheck | null>;
}

interface WebChecksBaseChecksPluginCheck {
  /** Тип */
  type: XmlElem<string | null, typeof lists.web_requirements>;
  /** Условие */
  cond: XmlElem<string | null, typeof common.all_option_types>;
  /** Версия */
  version: XmlElem<number | null>;
}

interface WebChecksBaseChecksPlugin {
  /** Плагин */
  check: XmlElem<WebChecksBaseChecksPluginCheck | null>;
}

interface WebChecksBaseChecks {
  /** Браузеры */
  browser: XmlElem<WebChecksBaseChecksBrowser | null>;
  /** Плагины */
  plugin: XmlElem<WebChecksBaseChecksPlugin | null>;
}

interface WebChecksBase {
  /** Требование к клиенту */
  checks: XmlElem<WebChecksBaseChecks | null>;
}

interface WebChecksBaseBrowserCheck {
  /** Тип */
  type: XmlElem<string | null, typeof lists.web_requirements>;
  /** Условие */
  cond: XmlElem<string | null, typeof common.all_option_types>;
  /** Версия */
  version: XmlElem<number | null>;
}

interface WebChecksBaseBrowser {
  /** Браузер */
  check: XmlElem<WebChecksBaseBrowserCheck | null>;
}

interface WebChecksBasePluginCheck {
  /** Тип */
  type: XmlElem<string | null, typeof lists.web_requirements>;
  /** Условие */
  cond: XmlElem<string | null, typeof common.all_option_types>;
  /** Версия */
  version: XmlElem<number | null>;
}

interface WebChecksBasePlugin {
  /** Плагин */
  check: XmlElem<WebChecksBasePluginCheck | null>;
}

interface ObjectTypeBase {
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
}

interface CustomDatasBaseCustomData {
  /** Название */
  name: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<string | null>;
}

interface CustomDatasBase {
  custom_datas: XmlMultiElem<CustomDatasBaseCustomData | null>;
  get_custom_data(name: string): unknown;
  set_custom_data(name: string, value: string): unknown;
}

interface SelectLearningOptionBase {
  start_learning_date: XmlElem<Date | null>;
  duration_type: XmlElem<string>;
  duration_days: XmlElem<number | null>;
  miss_last_learning_date: XmlElem<boolean>;
  last_learning_date: XmlElem<Date | null>;
  miss_only_success_learning: XmlElem<boolean>;
  logging: XmlElem<boolean | null>;
  commenting: XmlElem<boolean | null>;
  use_proctoring: XmlElem<boolean | null>;
  proctor_prefer_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  skip_dismissed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
}

interface TaskInfoBase {
  id: XmlElem<string | null>;
  type: XmlElem<string | null>;
  title: XmlElem<string | null>;
  status: XmlElem<string | null>;
  progress: XmlElem<number | null>;
  progress_max: XmlElem<number | null>;
  progress_text: XmlElem<string | null>;
  progress_date: XmlElem<Date | null>;
  result: XmlElem<string | null>;
  error: XmlElem<string | null>;
  error_text: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  user_id: XmlElem<number | null>;
  message: XmlElem<string | null>;
  message_result: XmlElem<string | null>;
  screen_url: XmlElem<string | null>;
  callback: XmlElem<string | null>;
}

interface GameBonusBaseGameBonus {
  id: XmlElem<string | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Сумма */
  sum: XmlElem<number | null>;
}

interface GameBonusBase {
  /** Бонусы */
  game_bonuss: XmlMultiElem<GameBonusBaseGameBonus | null>;
}

interface ClLocalizationsBaseLocalization {
  id: XmlElem<number | null, ClLocalizationCatalogDocumentTopElem>;
}

interface ClLocalizationsBase {
  localizations: XmlMultiElem<ClLocalizationsBaseLocalization | null>;
}

interface I18nBaseI18nParam {
  load_path: XmlElem<string | null>;
  code: XmlElem<string | null>;
}

interface I18nBase {
  i18n_param: XmlElem<I18nBaseI18nParam | null>;
}

interface ActorBaseAccount {
  homePage: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ActorBase {
  objectType: XmlElem<string | null>;
  name: XmlElem<string | null>;
  mbox: XmlElem<string | null>;
  mbox_sha1sum: XmlElem<string | null>;
  openid: XmlElem<string | null>;
  account: XmlElem<ActorBaseAccount | null>;
}

interface ProctoringBaseProctoring extends WebVariablesBase {
  is_basic_variables: XmlElem<boolean | null>;
  proctoring_system_id: XmlElem<number | null, ProctoringSystemCatalogDocumentTopElem>;
}

interface ProctoringBase {
  use_proctoring: XmlElem<boolean | null>;
  proctoring: XmlElem<ProctoringBaseProctoring | null>;
}

interface ResultFieldsBaseResultField {
  id: XmlElem<string | null>;
  /** Название поля */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.result_field_types>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  for_analytics: XmlElem<boolean>;
  for_analytics_aggregation: XmlElem<boolean>;
  for_analytics_aggregation_type: XmlElem<string | null, typeof common.aggregation_types>;
  for_analytics_scale_maximum: XmlElem<string | null>;
  /** Ширина */
  width: XmlElem<number | null>;
  bk_color: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  prohibit_sort: XmlElem<boolean>;
}

interface ResultFieldsBase {
  result_fields: XmlMultiElem<ResultFieldsBaseResultField | null>;
}

interface PersonObjectLinksBasePersonObjectProfile {
  person_object_profile_id: XmlElem<number | null, PersonObjectProfileCatalogDocumentTopElem>;
}

interface PersonObjectLinksBase {
  person_object_profiles: XmlMultiElem<PersonObjectLinksBasePersonObjectProfile | null>;
}

interface ExecCodeBaseExecCodeBinFile {
  /** Название */
  name: XmlElem<string | null>;
  /** Родительский элемент */
  parent_file_name: XmlElem<string | null>;
  /** Путь до файла */
  file_path: XmlElem<string | null>;
  /** Текст */
  value: XmlElem<string | null>;
  /** Позиция */
  position: XmlElem<number>;
  /** Дата */
  timestamp: XmlElem<Date | null>;
}

interface ExecCodeBaseExecCode {
  code_type: XmlElem<string | null>;
  code_url: XmlElem<string | null>;
  /** Выполняемый код */
  code_text: XmlElem<string | null>;
  entry_point: XmlElem<string | null>;
  code_hash: XmlElem<string | null>;
  configuration: XmlElem<string | null>;
  /** Файлы */
  bin_files: XmlMultiElem<ExecCodeBaseExecCodeBinFile | null>;
}

interface ExecCodeBase {
  exec_code: XmlElem<ExecCodeBaseExecCode | null>;
}

interface ExecCodeBaseBinFile {
  /** Название */
  name: XmlElem<string | null>;
  /** Родительский элемент */
  parent_file_name: XmlElem<string | null>;
  /** Путь до файла */
  file_path: XmlElem<string | null>;
  /** Текст */
  value: XmlElem<string | null>;
  /** Позиция */
  position: XmlElem<number>;
  /** Дата */
  timestamp: XmlElem<Date | null>;
}

interface ViewBaseLinkCatalog {
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  link_field: XmlElem<string | null>;
}

interface ViewBase extends ViewDispButtonBase, ViewColumnsBase {
  is_hier: XmlElem<boolean>;
  disp_dlg_new_button: XmlElem<boolean>;
  sort_field: XmlElem<string>;
  link_catalogs: XmlMultiElem<ViewBaseLinkCatalog | null>;
}

interface QaTestParamBase extends WebVariablesBase {
  /** Сотрудник */
  cur_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  use_cur_object: XmlElem<boolean>;
  /** Тип объекта */
  cur_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  cur_object_id: XmlElem<number | null>;
  use_cur_web_design: XmlElem<boolean>;
  /** Дизайн портала */
  cur_web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  use_cur_site: XmlElem<boolean>;
  /** Сайт */
  cur_site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  use_cur_lng: XmlElem<boolean>;
  /** Язык интерфейса */
  cur_lng: XmlElem<string | null>;
}

interface QaTestFixtureBaseFixture {
  fixture_id: XmlElem<number | null>;
  fixture_type: XmlElem<string | null, typeof common.exchange_object_types>;
  fixture_name: XmlElem<string | null>;
}

interface QaTestFixtureBase {
  fixture_type_id: XmlElem<string | null, typeof common.qa_fixture_types>;
  fixture_load_code: XmlElem<string | null>;
  fixture_unload_code: XmlElem<string | null>;
  fixture_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  fixture_load_function_name: XmlElem<string | null>;
  fixture_unload_function_name: XmlElem<string | null>;
  fixture_packet_uri: XmlElem<string | null>;
  clear_fixture_packet: XmlElem<boolean>;
  fixtures: XmlMultiElem<QaTestFixtureBaseFixture | null>;
}

interface QaTestAssertBaseAssert {
  id: XmlElem<string | null>;
  /** Наименование */
  name: XmlElem<string | null>;
  assert_type: XmlElem<string | null, typeof common.qa_test_assert_types>;
  check_inversion: XmlElem<boolean>;
  check_property: XmlElem<string | null>;
  template_is_collection: XmlElem<boolean>;
  template_type: XmlElem<string | null, typeof common.qa_test_assert_template_types>;
  template: XmlElem<string | null>;
}

interface QaTestAssertBase {
  asserts: XmlMultiElem<QaTestAssertBaseAssert | null>;
}

interface ChangeHashFieldsBase {
  current_hash: XmlElem<string | null>;
  processed_embedding_hash: XmlElem<string | null>;
}

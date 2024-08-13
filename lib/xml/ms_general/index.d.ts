interface AuFtFilter {
  fulltext: XmlElem<string | null>;
  used_fulltext: XmlElem<string | null>;
}

interface MsPersonSdInnerBaseSd {
  /** ФИО сотрудника */
  fullname: XmlElem<string | null>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название организации */
  org_name: XmlElem<string | null>;
  /** Является уволенным */
  is_dismiss: XmlElem<boolean | null>;
}

interface MsPersonSdInnerBase {
  sd: XmlElem<MsPersonSdInnerBaseSd | null> & XmlElem<number>;
}

interface MsPersonSdBase {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
}

interface MsEventSdInnerBaseSd {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
}

interface MsEventSdInnerBase {
  sd: XmlElem<MsEventSdInnerBaseSd | null> & XmlElem<number>;
}

interface MsEventSdBase {
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem> & MsEventSdInnerBase;
}

interface MsViewCatalogBase extends ViewConditionsBase {
  filter: XmlElem<AuFtFilter | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  is_hier: XmlElem<boolean>;
  scheme_id: XmlElem<string | null, typeof lists.view_conditions_schemes>;
  view_type: XmlElem<string | null>;
  view_type_env: XmlElem<unknown | null>;
  is_parametric: XmlElem<boolean>;
  category_field: XmlElem<string | null>;
}

interface MsDispBlockBase {
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  obj_title: XmlElem<string | null>;
  custom_flag: XmlElem<boolean | null>;
}

interface MsVariablesBaseVariable {
  name: XmlElem<string | null>;
  title: XmlElem<string | null>;
  type: XmlElem<string | null>;
  ext_eval: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  comment: XmlElem<string | null>;
}

interface MsVariablesBase {
  variables: XmlMultiElem<MsVariablesBaseVariable | null>;
}

interface MsParametersBaseParameter {
  /** Переменная */
  name: XmlElem<string | null>;
  /** Название */
  title: XmlElem<string | null>;
  /** Обязательный */
  is_mandatory: XmlElem<boolean>;
  /** Значение */
  value: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface MsParametersBase {
  /** Параметры */
  parameters: XmlMultiElem<MsParametersBaseParameter | null>;
}

interface MsWeekScheduleBaseWeekDay {
  id: XmlElem<string | null, typeof common.week_day_types>;
  /** Время начала */
  start_time: XmlElem<string | null>;
  /** Время окончания */
  finish_time: XmlElem<string | null>;
}

interface MsWeekScheduleBase {
  type: XmlElem<string>;
  /** Дни недели */
  week_days: XmlMultiElem<MsWeekScheduleBaseWeekDay | null>;
  check_week_schedule(curUserId: number, curUser: CurUser, session: Session): unknown;
}

interface WorkflowElemOperationBase {
  type: XmlElem<string | null, typeof common.workflow_operation_types>;
  workflow_state_id: XmlElem<string | null>;
  workflow_field_id: XmlElem<string | null>;
  workflow_field_value: XmlElem<string | null>;
  request_status_id: XmlElem<string | null, typeof common.request_status_types>;
  eval_str: XmlElem<string | null>;
  notification_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  print_form_id: XmlElem<number | null, PrintFormCatalogDocumentTopElem>;
  operation_id: XmlElem<number | null, OperationCatalogDocumentTopElem> & MsParametersBase;
}

interface WorkflowElemOperationsBase {
  operations: XmlMultiElem<WorkflowElemOperationBase | null>;
}

interface MsViewTemplatesBaseCss extends WebVariablesBase {
  /** Шаблон портала с CSS */
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
}

interface MsViewTemplatesBase {
  /** Стили портала */
  css: XmlElem<MsViewTemplatesBaseCss | null>;
}

interface MsPeriodityBase {
  /** Запускать агент */
  trigger_type: XmlElem<string, typeof common.trigger_types>;
  /** Период запуска */
  period: XmlElem<number>;
  /** Дата начала */
  start_time: XmlElem<string | null>;
  /** Дата окончания */
  finish_time: XmlElem<string | null>;
  /** Весь день */
  all_day: XmlElem<boolean | null>;
  /** День месяца запуска */
  start_day: XmlElem<number | null>;
  /** День недели запуска */
  start_week_day: XmlElem<number | null>;
  /** Начало периода запуска */
  start_date: XmlElem<Date | null>;
  /** Конец периода запуска */
  finish_date: XmlElem<Date | null>;
  /** Дата последнего запуска */
  last_run_date: XmlElem<Date | null>;
}

interface MsViewConfigurationBaseMessageText {
  code: XmlElem<string | null>;
  text: XmlElem<string | null>;
}

interface MsViewConfigurationBaseCategory extends WebVariablesBase {
  id: XmlElem<string | null>;
  category_field: XmlElem<string | null>;
  remote_collection_id: XmlElem<number | null, RemoteCollectionCatalogDocumentTopElem>;
  /** UI шаблон */
  custom_admin_template_id: XmlElem<number | null, CustomAdminTemplateCatalogDocumentTopElem>;
  admin_template: XmlElem<WebVariablesBase | null>;
}

interface MsViewConfigurationBaseViewConfigurationFilterItem {
  id: XmlElem<string | null>;
  /** Название */
  title: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<string | null>;
}

interface MsViewConfigurationBaseViewConfigurationFilter {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  value: XmlElem<string | null>;
  /** Значения */
  items: XmlMultiElem<MsViewConfigurationBaseViewConfigurationFilterItem | null>;
}

interface MsViewConfigurationBase extends WebVariablesBase {
  disp_column_selector: XmlElem<boolean>;
  disp_preview_button: XmlElem<boolean>;
  row_custom_admin_template_id: XmlElem<number | null, CustomAdminTemplateCatalogDocumentTopElem>;
  row_admin_template: XmlElem<WebVariablesBase | null>;
  preview_custom_admin_template_id: XmlElem<number | null, CustomAdminTemplateCatalogDocumentTopElem>;
  preview_custom_admin_template_array: XmlElem<string | null>;
  preview_id_field: XmlElem<string | null>;
  preview_template: XmlElem<WebVariablesBase | null>;
  display_roles: XmlElem<boolean>;
  can_create_roles: XmlElem<boolean>;
  can_edit_preview: XmlElem<boolean>;
  disp_link_views: XmlElem<boolean>;
  disp_search: XmlElem<boolean>;
  search_type: XmlElem<string | null>;
  disp_filter: XmlElem<boolean>;
  disp_list_menu: XmlElem<boolean>;
  disp_std_menu: XmlElem<boolean>;
  use_ext_menu: XmlElem<boolean>;
  can_open_doc: XmlElem<boolean>;
  can_delete_doc: XmlElem<boolean>;
  /** UI шаблон */
  custom_admin_template_id: XmlElem<number | null, CustomAdminTemplateCatalogDocumentTopElem>;
  doc_id_field: XmlElem<string | null>;
  custom_is_dlg: XmlElem<boolean>;
  admin_template: XmlElem<WebVariablesBase | null>;
  message_texts: XmlMultiElem<MsViewConfigurationBaseMessageText | null>;
  remote_collection_mode: XmlElem<string | null>;
  remote_collection_id: XmlElem<number | null, RemoteCollectionCatalogDocumentTopElem>;
  category: XmlElem<MsViewConfigurationBaseCategory | null>;
  categorys: XmlMultiElem<MsViewConfigurationBaseCategory | null>;
  view_configuration_filters: XmlMultiElem<MsViewConfigurationBaseViewConfigurationFilter | null>;
}

interface MsConfirmationBaseConfirmationAssessment {
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface MsConfirmationBaseConfirmationCourse {
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
}

interface MsConfirmationBaseConfirmationCertificate {
  /** Сертификат */
  certificates_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
}

interface MsConfirmationBase {
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  cost: XmlElem<number | null>;
  confirmation_expert_type: XmlElem<string | null, typeof common.confirmation_expert_types>;
  /** Тип руководителя */
  confirmation_boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Сотрудник */
  confirmation_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Участник проекта */
  project_participant_id: XmlElem<number | null, ProjectParticipantCatalogDocumentTopElem>;
  /** Тесты */
  confirmation_assessments: XmlMultiElem<MsConfirmationBaseConfirmationAssessment | null>;
  /** Курсы */
  confirmation_courses: XmlMultiElem<MsConfirmationBaseConfirmationCourse | null>;
  /** Сертификаты */
  confirmation_certificates: XmlMultiElem<MsConfirmationBaseConfirmationCertificate | null>;
}

interface MsCodeLibraryConditionBaseMethodParam {
  id: XmlElem<string | null>;
  value: XmlElem<string | null>;
  eval_code: XmlElem<boolean>;
}

interface MsCodeLibraryConditionBase {
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  method_name: XmlElem<string | null>;
  method_params: XmlMultiElem<MsCodeLibraryConditionBaseMethodParam | null>;
}

interface MsCodeLibraryCondition extends MsCodeLibraryConditionBase {
  perfom_condition_type: XmlElem<string | null, typeof common.perfom_condition_types>;
  classification_model_id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
  statistic_rec_id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
  statistic_param: XmlElem<string | null>;
  /** Условие */
  statistic_option_type: XmlElem<string, typeof common.all_option_types>;
  condition_value: XmlElem<string | null>;
}

interface ChangeHashBase {
  current_hash(): unknown;
  processed_embedding_hash: XmlElem<string | null>;
}

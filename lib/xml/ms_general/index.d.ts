interface AuFtFilter {
  fulltext: XmlElem<string>;
  used_fulltext: XmlElem<string>;
}

interface MsPersonSdInnerBaseSd {
  fullname: XmlElem<string>;
  position_name: XmlElem<string>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  org_name: XmlElem<string>;
  is_dismiss: XmlElem<boolean>;
}

interface MsPersonSdInnerBase {
  sd: XmlElem<MsPersonSdInnerBaseSd> & XmlElem<number>;
}

interface MsPersonSdBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
}

interface MsEventSdInnerBaseSd {
  code: XmlElem<string>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
}

interface MsEventSdInnerBase {
  sd: XmlElem<MsEventSdInnerBaseSd> & XmlElem<number>;
}

interface MsEventSdBase {
  event_id: XmlElem<number, EventCatalogDocumentTopElem> & MsEventSdInnerBase;
}

interface MsViewCatalogBase extends ViewConditionsBase {
  filter: XmlElem<AuFtFilter>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  is_hier: XmlElem<boolean>;
  scheme_id: XmlElem<string, typeof lists.view_conditions_schemes>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  is_parametric: XmlElem<boolean>;
  category_field: XmlElem<string>;
}

interface MsDispBlockBase {
  access_block_type: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  obj_title: XmlElem<string>;
  custom_flag: XmlElem<boolean>;
}

interface MsVariablesBaseVariable {
  name: XmlElem<string>;
  title: XmlElem<string>;
  type: XmlElem<string>;
  ext_eval: XmlElem<string>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  comment: XmlElem<string>;
}

interface MsVariablesBase {
  variables: XmlMultiElem<MsVariablesBaseVariable>;
}

interface MsParametersBaseParameter {
  name: XmlElem<string>;
  title: XmlElem<string>;
  is_mandatory: XmlElem<boolean>;
  value: XmlElem<string>;
  comment: XmlElem<string>;
}

interface MsParametersBase {
  parameters: XmlMultiElem<MsParametersBaseParameter>;
}

interface MsWeekScheduleBaseWeekDay {
  id: XmlElem<string, typeof common.week_day_types>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
}

interface MsWeekScheduleBase {
  type: XmlElem<string>;
  week_days: XmlMultiElem<MsWeekScheduleBaseWeekDay>;
  check_week_schedule(curUserId: number, curUser: CurUser, session: Session): unknown;
}

interface WorkflowElemOperationBase {
  type: XmlElem<string, typeof common.workflow_operation_types>;
  workflow_state_id: XmlElem<string>;
  workflow_field_id: XmlElem<string>;
  workflow_field_value: XmlElem<string>;
  request_status_id: XmlElem<string, typeof common.request_status_types>;
  eval_str: XmlElem<string>;
  notification_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  print_form_id: XmlElem<number, PrintFormCatalogDocumentTopElem>;
  operation_id: XmlElem<number, OperationCatalogDocumentTopElem> & MsParametersBase;
}

interface WorkflowElemOperationsBase {
  operations: XmlMultiElem<WorkflowElemOperationBase>;
}

interface MsViewTemplatesBaseCss extends WebVariablesBase {
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
}

interface MsViewTemplatesBase {
  css: XmlElem<MsViewTemplatesBaseCss>;
}

interface MsPeriodityBase {
  trigger_type: XmlElem<string, typeof common.trigger_types>;
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

interface MsViewConfigurationBaseMessageText {
  code: XmlElem<string>;
  text: XmlElem<string>;
}

interface MsViewConfigurationBaseCategory extends WebVariablesBase {
  id: XmlElem<string>;
  category_field: XmlElem<string>;
  remote_collection_id: XmlElem<number, RemoteCollectionCatalogDocumentTopElem>;
  custom_admin_template_id: XmlElem<number, CustomAdminTemplateCatalogDocumentTopElem>;
  admin_template: XmlElem<WebVariablesBase>;
}

interface MsViewConfigurationBaseViewConfigurationFilterItem {
  id: XmlElem<string>;
  title: XmlElem<string>;
  value: XmlElem<string>;
}

interface MsViewConfigurationBaseViewConfigurationFilter {
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  value: XmlElem<string>;
  items: XmlMultiElem<MsViewConfigurationBaseViewConfigurationFilterItem>;
}

interface MsViewConfigurationBase extends WebVariablesBase {
  disp_column_selector: XmlElem<boolean>;
  disp_preview_button: XmlElem<boolean>;
  row_custom_admin_template_id: XmlElem<number, CustomAdminTemplateCatalogDocumentTopElem>;
  row_admin_template: XmlElem<WebVariablesBase>;
  preview_custom_admin_template_id: XmlElem<number, CustomAdminTemplateCatalogDocumentTopElem>;
  preview_custom_admin_template_array: XmlElem<string>;
  preview_id_field: XmlElem<string>;
  preview_template: XmlElem<WebVariablesBase>;
  display_roles: XmlElem<boolean>;
  can_create_roles: XmlElem<boolean>;
  can_edit_preview: XmlElem<boolean>;
  disp_link_views: XmlElem<boolean>;
  disp_search: XmlElem<boolean>;
  search_type: XmlElem<string>;
  disp_filter: XmlElem<boolean>;
  disp_list_menu: XmlElem<boolean>;
  disp_std_menu: XmlElem<boolean>;
  use_ext_menu: XmlElem<boolean>;
  can_open_doc: XmlElem<boolean>;
  can_delete_doc: XmlElem<boolean>;
  custom_admin_template_id: XmlElem<number, CustomAdminTemplateCatalogDocumentTopElem>;
  doc_id_field: XmlElem<string>;
  custom_is_dlg: XmlElem<boolean>;
  admin_template: XmlElem<WebVariablesBase>;
  message_texts: XmlMultiElem<MsViewConfigurationBaseMessageText>;
  remote_collection_mode: XmlElem<string>;
  remote_collection_id: XmlElem<number, RemoteCollectionCatalogDocumentTopElem>;
  category: XmlElem<MsViewConfigurationBaseCategory>;
  categorys: XmlMultiElem<MsViewConfigurationBaseCategory>;
  view_configuration_filters: XmlMultiElem<MsViewConfigurationBaseViewConfigurationFilter>;
}

interface MsConfirmationBaseConfirmationAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface MsConfirmationBaseConfirmationCourse {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
}

interface MsConfirmationBaseConfirmationCertificate {
  certificates_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
}

interface MsConfirmationBase {
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  cost: XmlElem<number>;
  confirmation_expert_type: XmlElem<string, typeof common.confirmation_expert_types>;
  confirmation_boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  confirmation_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  project_participant_id: XmlElem<number, ProjectParticipantCatalogDocumentTopElem>;
  confirmation_assessments: XmlMultiElem<MsConfirmationBaseConfirmationAssessment>;
  confirmation_courses: XmlMultiElem<MsConfirmationBaseConfirmationCourse>;
  confirmation_certificates: XmlMultiElem<MsConfirmationBaseConfirmationCertificate>;
}

interface MsCodeLibraryConditionBaseMethodParam {
  id: XmlElem<string>;
  value: XmlElem<string>;
  eval_code: XmlElem<boolean>;
}

interface MsCodeLibraryConditionBase {
  code_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  method_name: XmlElem<string>;
  method_params: XmlMultiElem<MsCodeLibraryConditionBaseMethodParam>;
}

interface MsCodeLibraryCondition extends MsCodeLibraryConditionBase {
  perfom_condition_type: XmlElem<string, typeof common.perfom_condition_types>;
  classification_model_id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
  statistic_rec_id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
  statistic_param: XmlElem<string>;
  statistic_option_type: XmlElem<string, typeof common.all_option_types>;
  condition_value: XmlElem<string>;
}

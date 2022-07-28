interface AuFtFilter {
  fulltext?: XmlElem<string>;
  used_fulltext?: XmlElem<string>;
}

interface MsPersonSdInnerBaseSd {
  fullname?: XmlElem<string>;
  position_name?: XmlElem<string>;
  position_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  is_dismiss?: XmlElem<boolean>;
}

interface MsPersonSdInnerBase {
  sd?: XmlElem<MsPersonSdInnerBaseSd>;
}

interface MsPersonSdBase {
  person_id?: XmlElem<number>;
}

interface MsEventSdInnerBaseSd {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
}

interface MsEventSdInnerBase {
  sd?: XmlElem<MsEventSdInnerBaseSd>;
}

interface MsEventSdBase {
  event_id?: XmlElem<number>;
}

interface MsViewCatalogBase extends ViewConditionsBase {
  catalog_name?: XmlElem<string>;
  is_hier?: XmlElem<boolean>;
  scheme_id?: XmlElem<string>;
  view_type?: XmlElem<string>;
  view_type_env?: XmlElem<unknown>;
  is_parametric?: XmlElem<boolean>;
  category_field?: XmlElem<string>;
  export_type?: XmlElem<string>;
  filter?: XmlElem<AuFtFilter>;
}

interface MsDispBlockBase {
  access_block_type?: XmlElem<string>;
  obj_title?: XmlElem<string>;
  custom_flag?: XmlElem<boolean>;
}

interface MsVariablesBaseVariable {
  name?: XmlElem<string>;
  title?: XmlElem<string>;
  type?: XmlElem<string>;
  ext_eval?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface MsVariablesBase {
  variables?: XmlMultiElem<MsVariablesBaseVariable>;
}

interface MsParametersBaseParameter {
  name?: XmlElem<string>;
  title?: XmlElem<string>;
  is_mandatory?: XmlElem<boolean>;
  value?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface MsParametersBase {
  parameters?: XmlMultiElem<MsParametersBaseParameter>;
}

interface MsWeekScheduleBaseWeekDay {
  id?: XmlElem<string>;
  start_time?: XmlElem<string>;
  finish_time?: XmlElem<string>;
}

interface MsWeekScheduleBase {
  type?: XmlElem<string>;
  week_days?: XmlMultiElem<MsWeekScheduleBaseWeekDay>;
  check_week_schedule?(): any;
}

interface WorkflowElemOperationBase {
  type?: XmlElem<string>;
  workflow_state_id?: XmlElem<string>;
  workflow_field_id?: XmlElem<string>;
  workflow_field_value?: XmlElem<string>;
  request_status_id?: XmlElem<string>;
  eval_str?: XmlElem<string>;
  notification_id?: XmlElem<number>;
  print_form_id?: XmlElem<number>;
  operation_id?: XmlElem<number>;
}

interface MsViewTemplatesBaseCss extends WebVariablesBase {
  custom_web_template_id?: XmlElem<number>;
}

interface MsViewTemplatesBase {
  css?: XmlElem<MsViewTemplatesBaseCss>;
}

interface MsPeriodityBase {
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

interface MsViewConfigurationBaseMessageText {
  code?: XmlElem<string>;
  text?: XmlElem<string>;
}

interface MsViewConfigurationBaseCategory extends WebVariablesBase {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  category_field?: XmlElem<string>;
  remote_collection_id?: XmlElem<number>;
  custom_admin_template_id?: XmlElem<number>;
  admin_template?: XmlElem<WebVariablesBase>;
}

interface MsViewConfigurationBaseViewConfigurationFilterItem {
  id?: XmlElem<string>;
  title?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface MsViewConfigurationBaseViewConfigurationFilter {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  value?: XmlElem<string>;
  items?: XmlMultiElem<MsViewConfigurationBaseViewConfigurationFilterItem>;
}

interface MsViewConfigurationBaseCategory extends WebVariablesBase {
  id?: XmlElem<string>;
  category_field?: XmlElem<string>;
  remote_collection_id?: XmlElem<number>;
  custom_admin_template_id?: XmlElem<number>;
  admin_template?: XmlElem<WebVariablesBase>;
}

interface MsViewConfigurationBase extends WebVariablesBase {
  disp_column_selector?: XmlElem<boolean>;
  disp_preview_button?: XmlElem<boolean>;
  row_custom_admin_template_id?: XmlElem<number>;
  preview_custom_admin_template_id?: XmlElem<number>;
  preview_id_field?: XmlElem<string>;
  display_roles?: XmlElem<boolean>;
  can_create_roles?: XmlElem<boolean>;
  can_edit_preview?: XmlElem<boolean>;
  disp_link_views?: XmlElem<boolean>;
  disp_search?: XmlElem<boolean>;
  search_type?: XmlElem<string>;
  disp_filter?: XmlElem<boolean>;
  disp_list_menu?: XmlElem<boolean>;
  disp_std_menu?: XmlElem<boolean>;
  use_ext_menu?: XmlElem<boolean>;
  can_open_doc?: XmlElem<boolean>;
  can_delete_doc?: XmlElem<boolean>;
  custom_admin_template_id?: XmlElem<number>;
  doc_id_field?: XmlElem<string>;
  custom_is_dlg?: XmlElem<boolean>;
  remote_collection_mode?: XmlElem<string>;
  remote_collection_id?: XmlElem<number>;
  row_admin_template?: XmlElem<WebVariablesBase>;
  preview_template?: XmlElem<WebVariablesBase>;
  admin_template?: XmlElem<WebVariablesBase>;
  message_texts?: XmlMultiElem<MsViewConfigurationBaseMessageText>;
  categorys?: XmlMultiElem<MsViewConfigurationBaseCategory>;
  view_configuration_filters?: XmlMultiElem<MsViewConfigurationBaseViewConfigurationFilter>;
  category?: XmlElem<MsViewConfigurationBaseCategory>;
}

interface MsConfirmationBaseConfirmationAssessment {
  assessment_id?: XmlElem<number>;
}

interface MsConfirmationBaseConfirmationCourse {
  course_id?: XmlElem<number>;
}

interface MsConfirmationBaseConfirmationCertificate {
  certificates_id?: XmlElem<number>;
}

interface MsConfirmationBase {
  currency_type_id?: XmlElem<string>;
  cost?: XmlElem<number>;
  confirmation_expert_type?: XmlElem<string>;
  confirmation_boss_type_id?: XmlElem<number>;
  confirmation_person_id?: XmlElem<number>;
  project_participant_id?: XmlElem<number>;
  confirmation_assessments?: XmlMultiElem<MsConfirmationBaseConfirmationAssessment>;
  confirmation_courses?: XmlMultiElem<MsConfirmationBaseConfirmationCourse>;
  confirmation_certificates?: XmlMultiElem<MsConfirmationBaseConfirmationCertificate>;
}

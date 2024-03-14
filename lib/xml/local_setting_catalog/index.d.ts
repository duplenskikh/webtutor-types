interface LocalSettingsDocumentNewsAuth {
  login: XmlElem<string>;
  password: XmlElem<string>;
}

interface LocalSettingsDocumentBlockInformer {
  id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
}

interface LocalSettingsDocumentBlock {
  id: XmlElem<string>;
  is_custom: XmlElem<boolean>;
  informers: XmlMultiElem<LocalSettingsDocumentBlockInformer>;
}

interface LocalSettingsDocumentViewDisplayRole {
  catalog_name: XmlElem<string>;
  disp: XmlElem<boolean>;
}

interface LocalSettingsDocumentView {
  sel_date: XmlElem<Date>;
  is_work_month: XmlElem<boolean>;
  view_section: XmlElem<boolean>;
  display_roles: XmlMultiElem<LocalSettingsDocumentViewDisplayRole>;
  display_empty_roles: XmlElem<boolean>;
  view_sub_type: XmlElem<string>;
  view_expanded_type: XmlElem<boolean>;
  text_selector: XmlElem<string>;
  list_hier_view_selector: XmlElem<string>;
  hier_view_disp_type: XmlElem<string>;
  disp_calendar_event_preview: XmlElem<boolean>;
  disp_calendar_event_phase: XmlElem<boolean>;
  preview_width_index: XmlElem<number>;
  preview_location: XmlElem<string>;
  remember_last_reports_settings: XmlElem<boolean>;
}

interface LocalSettingsDocumentViewFilter {
  catalog: XmlElem<string>;
  scheme_id: XmlElem<string, typeof lists.view_conditions_schemes>;
}

interface LocalSettingsDocumentTab {
  url: XmlElem<string>;
  title: XmlElem<string>;
  image_url: XmlElem<string>;
  access_block: XmlElem<string>;
  catalog_name: XmlElem<string>;
}

interface LocalSettingsDocumentViewTypeColumn {
  name: XmlElem<string>;
}

interface LocalSettingsDocumentViewType {
  catalog: XmlElem<string>;
  columns: XmlMultiElem<LocalSettingsDocumentViewTypeColumn>;
  link_selector: XmlElem<string>;
}

interface LocalSettingsDocumentSmallAccessBlock {
  id: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
}

interface LocalSettingsDocumentHome {
  last_action_date: XmlElem<Date>;
  last_forum_date: XmlElem<Date>;
  last_stat_date: XmlElem<Date>;
}

interface LocalSettingsDocumentViewCourseIntegralEfficiencyReportResponseTypeField {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
}

interface LocalSettingsDocumentViewCourseIntegralEfficiencyReport {
  response_type_id: XmlElem<number>;
  response_type_fields: XmlMultiElem<LocalSettingsDocumentViewCourseIntegralEfficiencyReportResponseTypeField>;
  formula_column_value: XmlElem<string>;
  formula_column_title: XmlElem<string>;
}

interface LocalSettingsDocumentViewQuestionsAnalyticsReport {
  percent_difficult: XmlElem<number>;
  percent_simple: XmlElem<number>;
  elapsed_percent: XmlElem<number>;
  correlation_coefficient: XmlElem<number>;
  variance: XmlElem<number>;
}

interface LocalSettingsDocumentAdminConfiguration {
  func_block_id: XmlElem<string>;
  disp_desc: XmlElem<boolean>;
}

interface LocalSettingsDocumentResourceSetting {
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  role_id: XmlElem<number>;
}

interface LocalSettingsDocumentCustomData {
  id: XmlElem<string>;
  value: XmlElem<string>;
}

type LocalSettingCatalogDocumentTopElem = XmlTopElem & {
  settings: XmlElem<LocalSettingsBase>;
  news_auth: XmlElem<LocalSettingsDocumentNewsAuth>;
  blocks: XmlMultiElem<LocalSettingsDocumentBlock>;
  certificate_template_exists: XmlElem<boolean>;
  ui_lng_id: XmlElem<string>;
  view: XmlElem<LocalSettingsDocumentView>;
  get_access_block_items(): unknown;
  view_filters: XmlMultiElem<LocalSettingsDocumentViewFilter>;
  package_id: XmlElem<string, PackageObjectCatalogDocumentTopElem>;
  first_catalog_url: XmlElem<string>;
  last_catalog_url: XmlElem<string>;
  tabs: XmlMultiElem<LocalSettingsDocumentTab>;
  first_list_url: XmlElem<string>;
  view_types: XmlMultiElem<LocalSettingsDocumentViewType>;
  small_access_blocks: XmlMultiElem<LocalSettingsDocumentSmallAccessBlock>;
  first_disp_small_access_blocks: XmlElem<boolean>;
  access_block_view_type: XmlElem<string>;
  home: XmlElem<LocalSettingsDocumentHome>;
  view_course_integral_efficiency_report: XmlElem<LocalSettingsDocumentViewCourseIntegralEfficiencyReport>;
  view_questions_analytics_report: XmlElem<LocalSettingsDocumentViewQuestionsAnalyticsReport>;
  cur_user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  tab_block_id: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  last_block_id: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  tab_block_type: XmlElem<string>;
  task_progress_delay: XmlElem<number>;
  admin_configuration: XmlElem<LocalSettingsDocumentAdminConfiguration>;
  resource_settings: XmlMultiElem<LocalSettingsDocumentResourceSetting>;
  custom_datas: XmlMultiElem<LocalSettingsDocumentCustomData>;
};

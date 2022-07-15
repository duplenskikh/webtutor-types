interface ApplicationAccessBlock {
  id?: XmlElem<string>;
  can_read?: XmlElem<boolean>;
  can_write?: XmlElem<boolean>;
  can_delete?: XmlElem<boolean>;
  access_level_id?: XmlElem<number>;
}

interface ApplicationAccessLevel {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface ApplicationViewConfigurationAccessLevel {
  access_level_id?: XmlElem<number>;
}

interface ApplicationViewConfiguration extends WebVariablesBase {
  id?: XmlElem<string>;
  view_configuration_id?: XmlElem<number>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  access_levels?: XmlMultiElem<ApplicationViewConfigurationAccessLevel>;
}

interface ApplicationRemoteActionAccessLevel {
  access_level_id?: XmlElem<number>;
}

interface ApplicationRemoteAction extends WebVariablesBase {
  id?: XmlElem<string>;
  remote_action_id?: XmlElem<number>;
  name?: XmlElem<string>;
  code?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  menu_id?: XmlElem<string>;
  ignore_catalog?: XmlElem<boolean>;
  access_levels?: XmlMultiElem<ApplicationRemoteActionAccessLevel>;
}

interface ApplicationReportTemplateAccessLevel {
  access_level_id?: XmlElem<number>;
}

interface ApplicationReportTemplate extends WebVariablesBase {
  id?: XmlElem<string>;
  report_template_id?: XmlElem<number>;
  report_template_url?: XmlElem<string>;
  report_template_type?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  access_levels?: XmlMultiElem<ApplicationReportTemplateAccessLevel>;
}

interface ApplicationActionMenu {
  id?: XmlElem<string>;
  title?: XmlElem<string>;
}

interface ApplicationApplicationMenu {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  color?: XmlElem<string>;
  image_url?: XmlElem<string>;
  is_dialog?: XmlElem<boolean>;
}

interface ApplicationApplicationUnitItem {
  id?: XmlElem<string>;
  parent_id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  list_object_id?: XmlElem<string>;
  color?: XmlElem<string>;
  image_url?: XmlElem<string>;
  is_dialog?: XmlElem<boolean>;
  view_type?: XmlElem<string>;
}

interface ApplicationApplicationUnit {
  id?: XmlElem<string>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  items?: XmlMultiElem<ApplicationApplicationUnitItem>;
}

interface ApplicationInstance extends WebVariablesBase {
}

interface ApplicationView extends DescBase {
  file_url?: XmlElem<string>;
  file_name?: XmlElem<string>;
  file_size?: XmlElem<number>;
  run_code?: XmlElem<string>;
  unit_item_id?: XmlElem<string>;
}

interface ApplicationTopElem extends XmlTopElem<ApplicationDocument>, ObjectCodeNameBase, WebVariablesBase, FuncManagersBase, CatalogListBase {
  type?: XmlElem<string>;
  disp_type?: XmlElem<string>;
  use_instances?: XmlElem<boolean>;
  version?: XmlElem<string>;
  prev_version?: XmlElem<string>;
  server_version?: XmlElem<string>;
  vendor?: XmlElem<string>;
  vendor_library?: XmlElem<string>;
  release_date?: XmlElem<Date>;
  lic_type?: XmlElem<string>;
  list_xms_url?: XmlElem<string>;
  default_xms_url?: XmlElem<string>;
  library_url?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  changed?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  instance?: XmlElem<WebVariablesBase>;
  role_id?: XmlMultiElem<number>;
  web_mode_id?: XmlMultiElem<number>;
  access_blocks?: XmlMultiElem<ApplicationAccessBlock>;
  access_levels?: XmlMultiElem<ApplicationAccessLevel>;
  view_configurations?: XmlMultiElem<ApplicationViewConfiguration>;
  remote_actions?: XmlMultiElem<ApplicationRemoteAction>;
  report_templates?: XmlMultiElem<ApplicationReportTemplate>;
  action_menus?: XmlMultiElem<ApplicationActionMenu>;
  application_menus?: XmlMultiElem<ApplicationApplicationMenu>;
  application_units?: XmlMultiElem<ApplicationApplicationUnit>;
  instance?: XmlElem<ApplicationInstance>;
  view?: XmlElem<ApplicationView>;
}

type ApplicationDocument = XmlDocument<ApplicationTopElem>;

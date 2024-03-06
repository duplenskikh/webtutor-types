interface ApplicationDocumentAccessBlock {
  id: XmlElem<string, typeof common.access_block_types>;
  can_read: XmlElem<boolean>;
  can_write: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
  access_level_id: XmlElem<number>;
}

interface ApplicationDocumentAccessLevel {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

interface ApplicationDocumentViewConfigurationAccessLevel {
  access_level_id: XmlElem<number>;
  can_create_roles: XmlElem<boolean>;
  can_create_root_roles: XmlElem<boolean>;
  can_edit_roles: XmlElem<boolean>;
  can_delete_roles: XmlElem<boolean>;
}

interface ApplicationDocumentViewConfigurationRemoteAction {
  id: XmlElem<string>;
}

interface ApplicationDocumentViewConfiguration extends WebVariablesBase {
  id: XmlElem<string>;
  view_configuration_id: XmlElem<number, ViewConfigurationCatalogDocumentTopElem>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  disp_role_selector: XmlElem<boolean>;
  can_create_roles: XmlElem<boolean>;
  config_set: XmlElem<boolean>;
  access_levels: XmlMultiElem<ApplicationDocumentViewConfigurationAccessLevel>;
  is_custom_menu: XmlElem<boolean>;
  remote_actions: XmlMultiElem<ApplicationDocumentViewConfigurationRemoteAction>;
}

interface ApplicationDocumentRemoteActionAccessLevel {
  access_level_id: XmlElem<number>;
}

interface ApplicationDocumentRemoteAction extends WebVariablesBase {
  id: XmlElem<string>;
  remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  access_levels: XmlMultiElem<ApplicationDocumentRemoteActionAccessLevel>;
  menu_id: XmlElem<string>;
  ignore_catalog: XmlElem<boolean>;
}

interface ApplicationDocumentReportTemplateAccessLevel {
  access_level_id: XmlElem<number>;
}

interface ApplicationDocumentReportTemplate extends WebVariablesBase {
  id: XmlElem<string>;
  report_template_id: XmlElem<number>;
  report_template_url: XmlElem<string>;
  report_template_type: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  access_levels: XmlMultiElem<ApplicationDocumentReportTemplateAccessLevel>;
}

interface ApplicationDocumentActionMenu {
  id: XmlElem<string>;
  title: XmlElem<string>;
}

interface ApplicationDocumentApplicationMenu {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  color: XmlElem<string>;
  image_url: XmlElem<string>;
  is_dialog: XmlElem<boolean>;
}

interface ApplicationDocumentApplicationUnitItem {
  id: XmlElem<string>;
  parent_id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  list_object_id: XmlElem<string>;
  color: XmlElem<string>;
  image_url: XmlElem<string>;
  is_dialog: XmlElem<boolean>;
  view_type: XmlElem<string>;
}

interface ApplicationDocumentApplicationUnit {
  id: XmlElem<string>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  items: XmlMultiElem<ApplicationDocumentApplicationUnitItem>;
}

interface ApplicationDocumentLibraryAccessObjectClaim {
  access_level_id: XmlElem<number>;
  object_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  element_code: XmlElem<string>;
}

interface ApplicationDocumentLibraryAccess {
  object_claims: XmlMultiElem<ApplicationDocumentLibraryAccessObjectClaim>;
}

type ApplicationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase &
FuncManagersBase &
CatalogListBase & {
  Doc: ApplicationDocument;
  type: XmlElem<string, typeof common.application_types>;
  disp_type: XmlElem<string>;
  use_instances: XmlElem<boolean>;
  version: XmlElem<string>;
  prev_version: XmlElem<string>;
  server_version: XmlElem<string>;
  vendor: XmlElem<string>;
  vendor_library: XmlElem<string>;
  release_date: XmlElem<Date>;
  lic_type: XmlElem<string>;
  list_xms_url: XmlElem<string>;
  default_xms_url: XmlElem<string>;
  library_url: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  instance: XmlElem<WebVariablesBase>;
  access_blocks: XmlMultiElem<ApplicationDocumentAccessBlock>;
  access_levels: XmlMultiElem<ApplicationDocumentAccessLevel>;
  view_configurations: XmlMultiElem<ApplicationDocumentViewConfiguration>;
  remote_actions: XmlMultiElem<ApplicationDocumentRemoteAction>;
  report_templates: XmlMultiElem<ApplicationDocumentReportTemplate>;
  action_menus: XmlMultiElem<ApplicationDocumentActionMenu>;
  application_menus: XmlMultiElem<ApplicationDocumentApplicationMenu>;
  application_units: XmlMultiElem<ApplicationDocumentApplicationUnit>;
  library_access: XmlElem<ApplicationDocumentLibraryAccess>;
  role_id: XmlMultiElemObject<number>;
  web_mode_id: XmlMultiElemObject<number, WebModeCatalogDocumentTopElem>;
};

type ApplicationDocument = XmlDocument & {
  TopElem: ApplicationDocumentTopElem;
  application: ApplicationDocumentTopElem;
  DocDesc(): unknown;
};

interface ApplicationDocumentAccessBlock {
  id: XmlElem<string | null, typeof common.access_block_types>;
  /** Чтение */
  can_read: XmlElem<boolean | null>;
  /** Запись */
  can_write: XmlElem<boolean | null>;
  /** Удаление */
  can_delete: XmlElem<boolean | null>;
  /** Уровень */
  access_level_id: XmlElem<number | null>;
}

interface ApplicationDocumentAccessLevel {
  /** Уровень */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
}

interface ApplicationDocumentViewConfigurationAccessLevel {
  /** Уровень */
  access_level_id: XmlElem<number | null>;
  can_create_roles: XmlElem<boolean | null>;
  can_create_root_roles: XmlElem<boolean | null>;
  can_edit_roles: XmlElem<boolean | null>;
  can_delete_roles: XmlElem<boolean | null>;
}

interface ApplicationDocumentViewConfigurationRemoteAction {
  id: XmlElem<string | null>;
}

interface ApplicationDocumentViewConfiguration extends WebVariablesBase {
  id: XmlElem<string | null>;
  view_configuration_id: XmlElem<number | null, ViewConfigurationCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  disp_role_selector: XmlElem<boolean | null>;
  can_create_roles: XmlElem<boolean | null>;
  config_set: XmlElem<boolean | null>;
  access_levels: XmlMultiElem<ApplicationDocumentViewConfigurationAccessLevel | null>;
  is_custom_menu: XmlElem<boolean | null>;
  remote_actions: XmlMultiElem<ApplicationDocumentViewConfigurationRemoteAction | null>;
}

interface ApplicationDocumentRemoteActionAccessLevel {
  /** Уровень */
  access_level_id: XmlElem<number | null>;
}

interface ApplicationDocumentRemoteAction extends WebVariablesBase {
  id: XmlElem<string | null>;
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  access_levels: XmlMultiElem<ApplicationDocumentRemoteActionAccessLevel | null>;
  menu_id: XmlElem<string | null>;
  ignore_catalog: XmlElem<boolean>;
}

interface ApplicationDocumentReportTemplateAccessLevel {
  /** Уровень */
  access_level_id: XmlElem<number | null>;
}

interface ApplicationDocumentReportTemplate extends WebVariablesBase {
  id: XmlElem<string | null>;
  report_template_id: XmlElem<number | null>;
  report_template_url: XmlElem<string | null>;
  report_template_type: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  access_levels: XmlMultiElem<ApplicationDocumentReportTemplateAccessLevel | null>;
}

interface ApplicationDocumentActionMenu {
  id: XmlElem<string | null>;
  title: XmlElem<string | null>;
}

interface ApplicationDocumentApplicationMenu {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  color: XmlElem<string | null>;
  image_url: XmlElem<string | null>;
  is_dialog: XmlElem<boolean | null>;
}

interface ApplicationDocumentApplicationUnitItem {
  id: XmlElem<string | null>;
  parent_id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  list_object_id: XmlElem<string | null>;
  color: XmlElem<string | null>;
  image_url: XmlElem<string | null>;
  is_dialog: XmlElem<boolean | null>;
  view_type: XmlElem<string | null>;
}

interface ApplicationDocumentApplicationUnit {
  id: XmlElem<string | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  items: XmlMultiElem<ApplicationDocumentApplicationUnitItem | null>;
}

interface ApplicationDocumentLibraryAccessObjectClaim {
  /** Уровень */
  access_level_id: XmlElem<number | null>;
  object_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  element_code: XmlElem<string | null>;
}

interface ApplicationDocumentLibraryAccess {
  object_claims: XmlMultiElem<ApplicationDocumentLibraryAccessObjectClaim | null>;
}

type ApplicationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase &
FuncManagersBase &
CatalogListBase & {
  Doc: ApplicationDocument;
  /** Тип */
  type: XmlElem<string, typeof common.application_types>;
  /** Тип отображения */
  disp_type: XmlElem<string | null>;
  use_instances: XmlElem<boolean>;
  /** Версия */
  version: XmlElem<string | null>;
  /** Предыдущая версия */
  prev_version: XmlElem<string | null>;
  /** Версия */
  server_version: XmlElem<string | null>;
  vendor: XmlElem<string | null>;
  vendor_library: XmlElem<string | null>;
  release_date: XmlElem<Date | null>;
  lic_type: XmlElem<string | null>;
  list_xms_url: XmlElem<string | null>;
  default_xms_url: XmlElem<string | null>;
  /** Ссылка на файл библиотеки функций */
  library_url: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  instance: XmlElem<WebVariablesBase | null>;
  access_blocks: XmlMultiElem<ApplicationDocumentAccessBlock | null>;
  access_levels: XmlMultiElem<ApplicationDocumentAccessLevel | null>;
  view_configurations: XmlMultiElem<ApplicationDocumentViewConfiguration | null>;
  remote_actions: XmlMultiElem<ApplicationDocumentRemoteAction | null>;
  report_templates: XmlMultiElem<ApplicationDocumentReportTemplate | null>;
  action_menus: XmlMultiElem<ApplicationDocumentActionMenu | null>;
  application_menus: XmlMultiElem<ApplicationDocumentApplicationMenu | null>;
  application_units: XmlMultiElem<ApplicationDocumentApplicationUnit | null>;
  library_access: XmlElem<ApplicationDocumentLibraryAccess | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  web_mode_id: XmlMultiElemObject<number | null, WebModeCatalogDocumentTopElem>;
};

type ApplicationDocument = XmlDocument & {
  TopElem: ApplicationDocumentTopElem;
  application: ApplicationDocumentTopElem;
  DocDesc(): string;
};

interface HostDocumentAuthRule extends WebVariablesBase {
  id: XmlElem<string | null>;
  user_agent: XmlElem<string | null>;
  auth_type_id: XmlElem<number | null, AuthTypeCatalogDocumentTopElem>;
}

interface HostDocumentHeaderHost {
  /** Узел */
  host_name: XmlElem<string | null>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlockGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlock {
  groups: XmlMultiElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlockGroup | null>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlockOrg {
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlock {
  orgs: XmlMultiElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlockOrg | null>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfig {
  workspace_config_id: XmlElem<number | null, WorkspaceConfigCatalogDocumentTopElem>;
  group_block: XmlElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlock | null>;
  org_block: XmlElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlock | null>;
}

interface HostDocumentWorkspaceConfigBlock {
  workspace_configs: XmlMultiElem<HostDocumentWorkspaceConfigBlockWorkspaceConfig | null>;
}

type HostDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase & {
  Doc: HostDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Имя узла или IP */
  hostname: XmlElem<string | null>;
  /** Порт */
  port: XmlElem<number | null>;
  /** Узел */
  host(): unknown;
  /** Тип портала */
  portal_type: XmlElem<string, typeof common.portal_types>;
  /** Путь переадресации (referer URL) */
  referer_host_path: XmlElem<string | null>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  mobile_app_config_id: XmlElem<number | null, MobileAppConfigCatalogDocumentTopElem>;
  /** Аутентификация на портале (по умолчанию) */
  portal_auth_type: XmlElem<string>;
  /** Перенаправлять, если передан логин */
  redirect_login: XmlElem<string | null>;
  /** По ссылке (программный код, возвращающий строку с URL) */
  redirect_url_eval: XmlElem<string | null>;
  /** Формула логина */
  auth_login_eval: XmlElem<string | null>;
  /** Формула доступа */
  auth_pass_eval: XmlElem<string | null>;
  /** Программный код предварительного вычисления аутентификационных данных */
  auth_prev_eval: XmlElem<string | null>;
  /** Логин чувствителен к регистру */
  login_case_sensitive: XmlElem<boolean>;
  /** Требуется указание домена в логине */
  login_domen_sensitive: XmlElem<boolean>;
  /** Название поля логина */
  auth_cookie_login: XmlElem<string>;
  /** Название поля пароля */
  auth_cookie_pass: XmlElem<string>;
  /** Домен */
  auth_cookie_domain: XmlElem<string | null>;
  /** Период хранения (часов) */
  auth_cookie_period: XmlElem<number | null>;
  /** Отображать поля для ввода логина и пароля */
  disp_login_pass: XmlElem<boolean>;
  allow_lds_auth: XmlElem<boolean>;
  auth_type_id: XmlElem<number | null, AuthTypeCatalogDocumentTopElem>;
  auth_rules: XmlMultiElem<HostDocumentAuthRule | null>;
  header_hosts: XmlMultiElem<HostDocumentHeaderHost | null>;
  register_logged_in: XmlElem<boolean>;
  workspace_config_block: XmlElem<HostDocumentWorkspaceConfigBlock | null>;
  /** Является системным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  set_auth_type(authType: unknown, authRuleId: string): unknown;
};

type HostDocument = XmlDocument & {
  TopElem: HostDocumentTopElem;
  host: HostDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

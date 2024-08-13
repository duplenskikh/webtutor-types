interface HostDocumentAuthRule extends WebVariablesBase {
  id: XmlElem<string | null>;
  user_agent: XmlElem<string | null>;
  auth_type_id: XmlElem<number | null, AuthTypeCatalogDocumentTopElem>;
}

interface HostDocumentHeaderHost {
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
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  hostname: XmlElem<string | null>;
  port: XmlElem<number | null>;
  host(): unknown;
  portal_type: XmlElem<string, typeof common.portal_types>;
  referer_host_path: XmlElem<string | null>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  mobile_app_config_id: XmlElem<number | null, MobileAppConfigCatalogDocumentTopElem>;
  portal_auth_type: XmlElem<string>;
  redirect_login: XmlElem<string | null>;
  redirect_url_eval: XmlElem<string | null>;
  auth_login_eval: XmlElem<string | null>;
  auth_pass_eval: XmlElem<string | null>;
  auth_prev_eval: XmlElem<string | null>;
  login_case_sensitive: XmlElem<boolean>;
  login_domen_sensitive: XmlElem<boolean>;
  auth_cookie_login: XmlElem<string>;
  auth_cookie_pass: XmlElem<string>;
  auth_cookie_domain: XmlElem<string | null>;
  auth_cookie_period: XmlElem<number | null>;
  disp_login_pass: XmlElem<boolean>;
  allow_lds_auth: XmlElem<boolean>;
  auth_type_id: XmlElem<number | null, AuthTypeCatalogDocumentTopElem>;
  auth_rules: XmlMultiElem<HostDocumentAuthRule | null>;
  header_hosts: XmlMultiElem<HostDocumentHeaderHost | null>;
  register_logged_in: XmlElem<boolean>;
  workspace_config_block: XmlElem<HostDocumentWorkspaceConfigBlock | null>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
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

interface HostDocumentHeaderHost {
  host_name: XmlElem<string>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlockGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlock {
  groups: XmlMultiElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlockGroup>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlockOrg {
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlock {
  orgs: XmlMultiElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlockOrg>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfig {
  workspace_config_id: XmlElem<number, WorkspaceConfigCatalogDocumentTopElem>;
  group_block: XmlElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlock>;
  org_block: XmlElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlock>;
}

interface HostDocumentWorkspaceConfigBlock {
  workspace_configs: XmlMultiElem<HostDocumentWorkspaceConfigBlockWorkspaceConfig>;
}

type HostDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase & {
  Doc: HostDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  hostname: XmlElem<string>;
  port: XmlElem<number>;
  host(): unknown;
  portal_type: XmlElem<string, typeof common.portal_types>;
  referer_host_path: XmlElem<string>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  mobile_app_config_id: XmlElem<number, MobileAppConfigCatalogDocumentTopElem>;
  portal_auth_type: XmlElem<string>;
  redirect_login: XmlElem<string>;
  redirect_url_eval: XmlElem<string>;
  auth_login_eval: XmlElem<string>;
  auth_pass_eval: XmlElem<string>;
  auth_prev_eval: XmlElem<string>;
  login_case_sensitive: XmlElem<boolean>;
  login_domen_sensitive: XmlElem<boolean>;
  auth_cookie_login: XmlElem<string>;
  auth_cookie_pass: XmlElem<string>;
  auth_cookie_domain: XmlElem<string>;
  auth_cookie_period: XmlElem<number>;
  disp_login_pass: XmlElem<boolean>;
  allow_lds_auth: XmlElem<boolean>;
  auth_type_id: XmlElem<number, AuthTypeCatalogDocumentTopElem>;
  header_hosts: XmlMultiElem<HostDocumentHeaderHost>;
  register_logged_in: XmlElem<boolean>;
  workspace_config_block: XmlElem<HostDocumentWorkspaceConfigBlock>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  set_auth_type(authType: unknown): unknown;
};

type HostDocument = XmlDocument & {
  TopElem: HostDocumentTopElem;
  host: HostDocumentTopElem;
  OnSave(): unknown;
  DocDesc(): unknown;
};

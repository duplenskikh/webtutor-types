type HostDocumentTopElem = XmlTopElem & { Doc: HostDocument } & 
  CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  hostname: XmlElem<string>;
  port: XmlElem<number>;
  host(): unknown;
  portal_type: XmlElem<string>;
  referer_host_path: XmlElem<string>;
  site_id: XmlElem<number>;
  mobile_app_config_id: XmlElem<number>;
  portal_auth_type: XmlElem<string>;
  auth_login_eval: XmlElem<string>;
  auth_pass_eval: XmlElem<string>;
  auth_prev_eval: XmlElem<string>;
  login_case_sensitive: XmlElem<boolean>;
  login_domen_sensitive: XmlElem<boolean>;
  auth_cookie_login: XmlElem<string>;
  auth_cookie_pass: XmlElem<string>;
  auth_cookie_domain: XmlElem<string>;
  auth_cookie_period: XmlElem<number>;
  redirect_login: XmlElem<string>;
  redirect_url_eval: XmlElem<string>;
  disp_login_pass: XmlElem<boolean>;
  allow_lds_auth: XmlElem<boolean>;
  register_logged_in: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type HostDocument = XmlDocument & { TopElem: HostDocumentTopElem; };

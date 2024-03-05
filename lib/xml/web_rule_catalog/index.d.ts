type WebRuleCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  url: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  is_pattern: XmlElem<boolean>;
  use_matches: XmlElem<boolean>;
  redirect_url: XmlElem<string>;
  redirect_type: XmlElem<number>;
  redirect_web_mode_id: XmlElem<number, WebModeCatalogDocumentTopElem>;
  weight: XmlElem<number>;
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  OnBuild(): unknown;
};

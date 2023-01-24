type WebRuleCatalogDocumentTopElem = XmlTopElem & { Doc: WebRuleCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  url: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  is_pattern: XmlElem<boolean>;
  use_matches: XmlElem<boolean>;
  redirect_url: XmlElem<string>;
  redirect_type: XmlElem<number>;
  redirect_web_mode_id: XmlElem<number>;
  weight: XmlElem<number>;
  web_design_id: XmlElem<number>;
  site_id: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
}

type WebRuleCatalogDocument = XmlDocument & { TopElem: WebRuleCatalogDocumentTopElem; };

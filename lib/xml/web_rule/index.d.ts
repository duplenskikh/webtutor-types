type WebRuleDocumentTopElem = XmlTopElem & {
  Doc: WebRuleDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_pattern(): boolean;
  use_matches(): boolean;
  url: XmlElem<string | null>;
  script: XmlElem<string | null>;
  is_enabled: XmlElem<boolean>;
  redirect_url: XmlElem<string | null>;
  redirect_type: XmlElem<number>;
  redirect_web_mode_id: XmlElem<number | null, WebModeCatalogDocumentTopElem>;
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  weight: XmlElem<number | null>;
  role_id: XmlMultiElemObject<number | null>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  script_validate(path: unknown, parameters: unknown): unknown;
};

type WebRuleDocument = XmlDocument & {
  TopElem: WebRuleDocumentTopElem;
  web_rule: WebRuleDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

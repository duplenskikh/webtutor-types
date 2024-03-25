type WebRuleDocumentTopElem = XmlTopElem & {
  Doc: WebRuleDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_pattern(): boolean;
  use_matches(): boolean;
  url: XmlElem<string>;
  script: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  redirect_url: XmlElem<string>;
  redirect_type: XmlElem<number>;
  redirect_web_mode_id: XmlElem<number, WebModeCatalogDocumentTopElem>;
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  weight: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  script_validate(pATH: unknown, pARAMETERS: unknown): unknown;
};

type WebRuleDocument = XmlDocument & {
  TopElem: WebRuleDocumentTopElem;
  web_rule: WebRuleDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

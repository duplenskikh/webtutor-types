type OverrideWebTemplateDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: OverrideWebTemplateDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  parent_id: XmlElem<number | null, OverrideWebTemplateCatalogDocumentTopElem>;
  mode: XmlElem<string | null>;
  mode_exception: XmlElem<string | null>;
  zone: XmlElem<string | null>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  custom_web_template_name: XmlElem<string | null>;
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  weight: XmlElem<number>;
  is_enabled: XmlElem<boolean>;
  cache_static: XmlElem<string | null>;
  cache_dynamic: XmlElem<string | null>;
  cache_html: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
  cache_refresh: XmlElem<boolean | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type OverrideWebTemplateDocument = XmlDocument & {
  TopElem: OverrideWebTemplateDocumentTopElem;
  override_web_template: OverrideWebTemplateDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

type OverrideWebTemplateDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: OverrideWebTemplateDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): string;
  parent_id: XmlElem<number, OverrideWebTemplateCatalogDocumentTopElem>;
  mode: XmlElem<string>;
  mode_exception: XmlElem<string>;
  zone: XmlElem<string>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  custom_web_template_name: XmlElem<string>;
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  weight: XmlElem<number>;
  is_enabled: XmlElem<boolean>;
  cache_static: XmlElem<string>;
  cache_dynamic: XmlElem<string>;
  cache_html: XmlElem<string>;
  cache_vars: XmlElem<string>;
  cache_refresh: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
};

type OverrideWebTemplateDocument = XmlDocument & {
  TopElem: OverrideWebTemplateDocumentTopElem;
  override_web_template: OverrideWebTemplateDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

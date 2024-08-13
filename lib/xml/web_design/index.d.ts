type WebDesignDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: WebDesignDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  css_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  default_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  home_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  resources_url: XmlElem<string | null>;
  xaml_interpreter_id: XmlElem<string | null, typeof common.xaml_interpreters>;
  xaml_interpreter_css_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  additional_css_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  throbber_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  lp_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WebDesignDocument = XmlDocument & {
  TopElem: WebDesignDocumentTopElem;
  web_design: WebDesignDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

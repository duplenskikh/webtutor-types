type WebDesignDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: WebDesignDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  css_custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  default_custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  home_custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  resources_url: XmlElem<string>;
  xaml_interpreter_id: XmlElem<string, typeof common.xaml_interpreters>;
  xaml_interpreter_css_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  additional_css_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  throbber_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  lp_custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type WebDesignDocument = XmlDocument & {
  TopElem: WebDesignDocumentTopElem;
  web_design: WebDesignDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

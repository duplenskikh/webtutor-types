type WebDesignDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: WebDesignDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Шаблон портала с CSS */
  css_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Шаблон разметки для неавторизованного доступа */
  default_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Шаблон разметки авторизованного доступа */
  home_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Относительная ссылка на ресурсы */
  resources_url: XmlElem<string | null>;
  /** Интерпретатор XAML */
  xaml_interpreter_id: XmlElem<string | null, typeof common.xaml_interpreters>;
  /** Шаблон с XAML CSS */
  xaml_interpreter_css_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Дополнительный шаблон CSS */
  additional_css_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  throbber_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  lp_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Является системным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WebDesignDocument = XmlDocument & {
  TopElem: WebDesignDocumentTopElem;
  web_design: WebDesignDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

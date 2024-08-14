interface WebModeDocumentTemplateLink extends ViewConditionsBase {
  id: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  source_template_id: XmlElem<number | null, OverrideWebTemplateCatalogDocumentTopElem>;
  target_template_id: XmlElem<number | null, OverrideWebTemplateCatalogDocumentTopElem>;
}

interface WebModeDocumentStatisticRec extends WebVariablesBase {
  statistic_rec_id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
}

type WebModeDocumentTopElem = XmlTopElem &
ObjectTypeBase &
I18nBase &
FuncManagersBase &
WebVariablesBase & {
  Doc: WebModeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** По умолчанию */
  is_default: XmlElem<boolean>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  placeholder_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  template_links: XmlMultiElem<WebModeDocumentTemplateLink | null>;
  /** Показатели */
  statistic_recs: XmlMultiElem<WebModeDocumentStatisticRec | null>;
  /** Является системным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  postloading: XmlElem<boolean | null>;
  loading_instruction: XmlElem<string | null>;
  use_fcache: XmlElem<boolean | null>;
  searchable_portal: XmlElem<boolean | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  use_lpapi(): boolean;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type WebModeDocument = XmlDocument & {
  TopElem: WebModeDocumentTopElem;
  web_mode: WebModeDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

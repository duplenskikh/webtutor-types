interface WebModeDocumentTemplateLink extends ViewConditionsBase {
  id: XmlElem<string | null>;
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
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_default: XmlElem<boolean>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  placeholder_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  access: XmlElem<AccessDocBase | null>;
  template_links: XmlMultiElem<WebModeDocumentTemplateLink | null>;
  statistic_recs: XmlMultiElem<WebModeDocumentStatisticRec | null>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  postloading: XmlElem<boolean | null>;
  loading_instruction: XmlElem<string | null>;
  use_fcache: XmlElem<boolean | null>;
  searchable_portal: XmlElem<boolean | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  use_lpapi(): boolean;
  role_id: XmlMultiElemObject<number | null>;
};

type WebModeDocument = XmlDocument & {
  TopElem: WebModeDocumentTopElem;
  web_mode: WebModeDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

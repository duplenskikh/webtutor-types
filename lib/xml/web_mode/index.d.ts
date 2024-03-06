interface WebModeDocumentTemplateLink extends ViewConditionsBase {
  id: XmlElem<string>;
  type: XmlElem<string>;
  source_template_id: XmlElem<number, OverrideWebTemplateCatalogDocumentTopElem>;
  target_template_id: XmlElem<number, OverrideWebTemplateCatalogDocumentTopElem>;
}

interface WebModeDocumentStatisticRec extends WebVariablesBase {
  statistic_rec_id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
}

type WebModeDocumentTopElem = XmlTopElem &
ObjectTypeBase &
I18nBase &
FuncManagersBase &
WebVariablesBase & {
  Doc: WebModeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_default: XmlElem<boolean>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  placeholder_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  access: XmlElem<AccessDocBase>;
  template_links: XmlMultiElem<WebModeDocumentTemplateLink>;
  statistic_recs: XmlMultiElem<WebModeDocumentStatisticRec>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  postloading: XmlElem<boolean>;
  loading_instruction: XmlElem<string>;
  use_fcache: XmlElem<boolean>;
  searchable_portal: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  use_lpapi(): unknown;
  role_id: XmlMultiElemObject<number>;
};

type WebModeDocument = XmlDocument & {
  TopElem: WebModeDocumentTopElem;
  web_mode: WebModeDocumentTopElem;
  OnSave(): unknown;
  DocDesc(): unknown;
};

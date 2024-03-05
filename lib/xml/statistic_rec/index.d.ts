interface StatisticRecDocumentAnalyticsParamWvar {
  wvar_id: XmlElem<string>;
}

interface StatisticRecDocumentAnalytics {
  param_wvars: XmlMultiElem<StatisticRecDocumentAnalyticsParamWvar>;
  filter_start_date: XmlElem<string>;
  filter_finish_date: XmlElem<string>;
  filter_person_ids: XmlElem<string>;
}

interface StatisticRecDocumentPeriodType {
  type: XmlElem<string, typeof common.perioditys>;
  weight: XmlElem<number>;
  before_depth: XmlElem<number>;
  after_depth: XmlElem<number>;
  norm_from: XmlElem<number>;
  norm_to: XmlElem<number>;
  aggregation: XmlElem<string>;
}

interface StatisticRecDocumentCatalog {
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  xquery_qual: XmlElem<string>;
  enabled: XmlElem<boolean>;
}

interface StatisticRecDocumentInformer {
  auto_use: XmlElem<boolean>;
  color: XmlElem<string>;
  title: XmlElem<string>;
  output_type: XmlElem<string>;
}

type StatisticRecDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ResultFieldsBase &
WebVariablesBase &
I18nBase & {
  Doc: StatisticRecDocument;
  url: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  auto_calc: XmlElem<boolean>;
  last_calculate_date: XmlElem<Date>;
  calc_period: XmlElem<number>;
  context_calc: XmlElem<boolean>;
  ready_to_analytics: XmlElem<boolean>;
  period_calc_type: XmlElem<string, typeof common.period_calc_types>;
  analytics: XmlElem<StatisticRecDocumentAnalytics>;
  period_types: XmlMultiElem<StatisticRecDocumentPeriodType>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  detail_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  graph_color: XmlElem<string>;
  notification_type_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  xquery_qual: XmlElem<string>;
  catalogs: XmlMultiElem<StatisticRecDocumentCatalog>;
  run_code: XmlElem<string>;
  informer: XmlElem<StatisticRecDocumentInformer>;
  launch_settings: XmlElem<MsPeriodityBase>;
  disp_block: XmlElem<MsDispBlockBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  calculate_on_server(iObjectIdParam: number): unknown;
  calculate(ObjectParam: unknown, dFrom: Date, dTo: Date, sPeriodParam: string, oOptionPARAM: unknown): unknown;
  calculate_context(teObjectParam: unknown, Env: unknown): unknown;
  role_id: XmlMultiElemObject<number>;
};

type StatisticRecDocument = XmlDocument & {
  TopElem: StatisticRecDocumentTopElem;
};

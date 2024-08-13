interface StatisticRecDocumentAnalyticsParamWvar {
  wvar_id: XmlElem<string | null>;
}

interface StatisticRecDocumentAnalytics {
  param_wvars: XmlMultiElem<StatisticRecDocumentAnalyticsParamWvar | null>;
  filter_start_date: XmlElem<string | null>;
  filter_finish_date: XmlElem<string | null>;
  filter_person_ids: XmlElem<string | null>;
}

interface StatisticRecDocumentPeriodType {
  type: XmlElem<string | null, typeof common.perioditys>;
  weight: XmlElem<number | null>;
  before_depth: XmlElem<number | null>;
  after_depth: XmlElem<number | null>;
  norm_from: XmlElem<number | null>;
  norm_to: XmlElem<number | null>;
  aggregation: XmlElem<string | null>;
}

interface StatisticRecDocumentCatalog {
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  xquery_qual: XmlElem<string | null>;
  enabled: XmlElem<boolean>;
}

interface StatisticRecDocumentInformer {
  auto_use: XmlElem<boolean>;
  color: XmlElem<string | null>;
  title: XmlElem<string | null>;
  output_type: XmlElem<string | null>;
}

type StatisticRecDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ResultFieldsBase &
WebVariablesBase &
ExecCodeBase &
I18nBase & {
  Doc: StatisticRecDocument;
  url: XmlElem<string | null>;
  is_enabled: XmlElem<boolean>;
  auto_calc: XmlElem<boolean>;
  last_calculate_date: XmlElem<Date | null>;
  calc_period: XmlElem<number | null>;
  context_calc: XmlElem<boolean | null>;
  ready_to_analytics: XmlElem<boolean>;
  period_calc_type: XmlElem<string, typeof common.period_calc_types>;
  analytics: XmlElem<StatisticRecDocumentAnalytics | null>;
  period_types: XmlMultiElem<StatisticRecDocumentPeriodType | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  detail_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  graph_color: XmlElem<string | null>;
  notification_type_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  xquery_qual: XmlElem<string | null>;
  catalogs: XmlMultiElem<StatisticRecDocumentCatalog | null>;
  run_code: XmlElem<string | null>;
  informer: XmlElem<StatisticRecDocumentInformer | null>;
  launch_settings: XmlElem<MsPeriodityBase | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  calculate_on_server(objectId: number): unknown;
  calculate(object: unknown, from: Date, to: Date, period: string, option: unknown): unknown;
  calculate_context(objectTopElem: unknown, env: unknown, configuration: string): unknown;
  role_id: XmlMultiElemObject<number | null>;
};

type StatisticRecDocument = XmlDocument & {
  TopElem: StatisticRecDocumentTopElem;
  statistic_rec: StatisticRecDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

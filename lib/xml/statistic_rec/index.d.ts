interface StatisticRecDocumentPeriodType {
  type: XmlElem<string>;
  weight: XmlElem<number>;
  before_depth: XmlElem<number>;
  after_depth: XmlElem<number>;
  norm_from: XmlElem<number>;
  norm_to: XmlElem<number>;
  aggregation: XmlElem<string>;
}

interface StatisticRecDocumentCatalog {
  catalog_name: XmlElem<string>;
  xquery_qual: XmlElem<string>;
  enabled: XmlElem<boolean>;
}

type StatisticRecDocumentTopElem = XmlTopElem & { Doc: StatisticRecDocument } & 
ObjectCodeNameBase &
WebVariablesBase & {
  url: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  auto_calc: XmlElem<boolean>;
  last_calculate_date: XmlElem<Date>;
  calc_period: XmlElem<number>;
  context_calc: XmlElem<boolean>;
  period_calc_type: XmlElem<string>;
  period_types: XmlMultiElem<StatisticRecDocumentPeriodType>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  detail_web_template_id: XmlElem<number>;
  graph_color: XmlElem<string>;
  notification_type_id: XmlElem<number>;
  catalog_name: XmlElem<string>;
  xquery_qual: XmlElem<string>;
  catalogs: XmlMultiElem<StatisticRecDocumentCatalog>;
  run_code: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  calculate_on_server?(): unknown;
  calculate?(): unknown;
  role_id: XmlMultiElem<number>;
}

type StatisticRecDocument = XmlDocument & { TopElem: StatisticRecDocumentTopElem; };

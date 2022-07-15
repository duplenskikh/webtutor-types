interface StatisticRecPeriodType {
  type?: XmlElem<string>;
  weight?: XmlElem<number>;
  before_depth?: XmlElem<number>;
  after_depth?: XmlElem<number>;
  norm_from?: XmlElem<number>;
  norm_to?: XmlElem<number>;
  aggregation?: XmlElem<string>;
}

interface StatisticRecCatalog {
  catalog_name?: XmlElem<string>;
  xquery_qual?: XmlElem<string>;
  enabled?: XmlElem<boolean>;
}

interface StatisticRecInformer {
  auto_use?: XmlElem<boolean>;
  color?: XmlElem<string>;
  title?: XmlElem<string>;
  output_type?: XmlElem<string>;
}

interface StatisticRecLaunchSettings extends MsPeriodityBase {
}

interface StatisticRecDispBlock extends MsDispBlockBase {
}

interface StatisticRecView extends ObjectTypeBase {
  person_id?: XmlElem<number>;
  test_result_obj?: XmlElem<any>;
  referer_url?: XmlElem<string>;
}

interface StatisticRecTopElem extends XmlTopElem<StatisticRecDocument>, ObjectCodeNameBase, WebVariablesBase {
  url?: XmlElem<string>;
  is_enabled?: XmlElem<boolean>;
  auto_calc?: XmlElem<boolean>;
  last_calculate_date?: XmlElem<Date>;
  calc_period?: XmlElem<number>;
  context_calc?: XmlElem<boolean>;
  period_calc_type?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  detail_web_template_id?: XmlElem<number>;
  graph_color?: XmlElem<string>;
  notification_type_id?: XmlElem<number>;
  catalog_name?: XmlElem<string>;
  xquery_qual?: XmlElem<string>;
  run_code?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  launch_settings?: XmlElem<MsPeriodityBase>;
  disp_block?: XmlElem<MsDispBlockBase>;
  role_id?: XmlMultiElem<number>;
  period_types?: XmlMultiElem<StatisticRecPeriodType>;
  catalogs?: XmlMultiElem<StatisticRecCatalog>;
  informer?: XmlElem<StatisticRecInformer>;
  launch_settings?: XmlElem<StatisticRecLaunchSettings>;
  disp_block?: XmlElem<StatisticRecDispBlock>;
  view?: XmlElem<StatisticRecView>;
  calculate_on_server?(): any;
  calculate?(): any;
}

type StatisticRecDocument = XmlDocument<StatisticRecTopElem>;

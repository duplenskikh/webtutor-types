type StatisticRecCatalogDocumentTopElem = XmlTopElem & { Doc: StatisticRecCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  auto_calc: XmlElem<boolean>;
  last_calculate_date: XmlElem<Date>;
  calc_period: XmlElem<number>;
  context_calc: XmlElem<boolean>;
  ready_to_analytics: XmlElem<boolean>;
  catalog_name: XmlElem<string>;
  period_type: XmlMultiElem<string>;
  period_calc_type: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  depth: XmlElem<number>;
  norm_from: XmlElem<number>;
  norm_to: XmlElem<number>;
  notification_type_id: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  catalog: XmlMultiElem<string>;
  access_block_type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type StatisticRecCatalogDocument = XmlDocument & { TopElem: StatisticRecCatalogDocumentTopElem; };

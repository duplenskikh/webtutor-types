type StatisticDataDocumentTopElem = XmlTopElem & {
  Doc: StatisticDataDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): string;
  statistic_rec_id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  value: XmlElem<number>;
  value_str: XmlElem<string>;
  value_date: XmlElem<Date>;
  value_desc: XmlElem<string>;
  statistic_date: XmlElem<Date>;
  additinal_info: XmlElem<string>;
  period_type: XmlElem<string, typeof common.perioditys>;
  period_minute: XmlElem<number>;
  period_hour: XmlElem<number>;
  period_day: XmlElem<number>;
  period_month: XmlElem<number>;
  period_quarter: XmlElem<number>;
  period_year: XmlElem<number>;
  flag: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type StatisticDataDocument = XmlDocument & {
  TopElem: StatisticDataDocumentTopElem;
  statistic_data: StatisticDataDocumentTopElem;
  DocDesc(): string;
};

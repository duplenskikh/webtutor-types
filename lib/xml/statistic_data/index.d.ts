type StatisticDataDocumentTopElem = XmlTopElem & {
  Doc: StatisticDataDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  statistic_rec_id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  value: XmlElem<number | null>;
  value_str: XmlElem<string | null>;
  value_date: XmlElem<Date | null>;
  value_desc: XmlElem<string | null>;
  statistic_date: XmlElem<Date | null>;
  additinal_info: XmlElem<string | null>;
  period_type: XmlElem<string | null, typeof common.perioditys>;
  period_minute: XmlElem<number | null>;
  period_hour: XmlElem<number | null>;
  period_day: XmlElem<number | null>;
  period_month: XmlElem<number | null>;
  period_quarter: XmlElem<number | null>;
  period_year: XmlElem<number | null>;
  flag: XmlElem<number | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatisticDataDocument = XmlDocument & {
  TopElem: StatisticDataDocumentTopElem;
  statistic_data: StatisticDataDocumentTopElem;
  DocDesc(): string;
};

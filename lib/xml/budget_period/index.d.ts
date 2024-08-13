interface BudgetPeriodDocumentDay {
  date: XmlElem<Date | null>;
  type: XmlElem<string | null, typeof common.day_types>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
}

type BudgetPeriodDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: BudgetPeriodDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  period_type: XmlElem<string, typeof common.perioditys>;
  days: XmlMultiElem<BudgetPeriodDocumentDay | null>;
  role_id: XmlMultiElemObject<number | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type BudgetPeriodDocument = XmlDocument & {
  TopElem: BudgetPeriodDocumentTopElem;
  budget_period: BudgetPeriodDocumentTopElem;
  DocDesc(): string;
};

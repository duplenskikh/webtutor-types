interface BudgetPeriodDocumentDay {
  date: XmlElem<Date>;
  type: XmlElem<string, typeof common.day_types>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  comment: XmlElem<string>;
}

type BudgetPeriodDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: BudgetPeriodDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  period_type: XmlElem<string, typeof common.perioditys>;
  days: XmlMultiElem<BudgetPeriodDocumentDay>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type BudgetPeriodDocument = XmlDocument & {
  TopElem: BudgetPeriodDocumentTopElem;
  budget_period: BudgetPeriodDocumentTopElem;
  DocDesc(): unknown;
};

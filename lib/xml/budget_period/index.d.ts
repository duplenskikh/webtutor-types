interface BudgetPeriodDocumentDay {
  date?: XmlElem<Date>;
  type?: XmlElem<string>;
  region_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

type BudgetPeriodDocumentTopElem = XmlTopElem & { Doc: BudgetPeriodDocument } & 
AdminAccessBase &
CustomElemsBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  period_type?: XmlElem<string>;
  days?: XmlMultiElem<BudgetPeriodDocumentDay>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type BudgetPeriodDocument = XmlDocument & { TopElem: BudgetPeriodDocumentTopElem; };

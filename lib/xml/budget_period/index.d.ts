interface BudgetPeriodDay {
  date?: XmlElem<Date>;
  type?: XmlElem<string>;
  region_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface BudgetPeriodTopElem extends XmlTopElem<BudgetPeriodDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  period_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  days?: XmlMultiElem<BudgetPeriodDay>;
}

type BudgetPeriodDocument = XmlDocument<BudgetPeriodTopElem>;

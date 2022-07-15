interface IWTBudgetPeriodTopElem extends AdminAccessBase,
  IWTCustomElemsBase,
  IWTDocInfo {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  period_type?: XmlElem<string>;
  days?: XmlMultiElem<IWTBudgetPeriodDay>;
  comment?: XmlElem<string>;
}

type IWTBudgetPeriodDocument = XmlDocument<IWTBudgetPeriodTopElem>;

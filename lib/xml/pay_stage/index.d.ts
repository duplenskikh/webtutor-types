interface PayStageCostMin {
  value?: XmlElem<number>;
  date?: XmlElem<Date>;
  currency_type_id?: XmlElem<string>;
  rate?: XmlElem<number>;
}

interface PayStageCostMax {
  value?: XmlElem<number>;
  date?: XmlElem<Date>;
  currency_type_id?: XmlElem<string>;
  rate?: XmlElem<number>;
}

interface PayStageCostFact {
  value?: XmlElem<number>;
  date?: XmlElem<Date>;
  currency_type_id?: XmlElem<string>;
  rate?: XmlElem<number>;
}

interface PayStageCost {
  min?: XmlElem<PayStageCostMin>;
  max?: XmlElem<PayStageCostMax>;
  fact?: XmlElem<PayStageCostFact>;
}

interface PayStageView extends DescBase {
}

interface PayStageTopElem extends XmlTopElem<PayStageDocument>, CustomElemsBase, FileListBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  client_org_id?: XmlElem<number>;
  sale_contract_id?: XmlElem<number>;
  agent_contract_id?: XmlElem<number>;
  is_agent_sale_contract?: XmlElem<boolean>;
  agent_org_id?: XmlElem<number>;
  is_prepayment?: XmlElem<boolean>;
  type_id?: XmlElem<string>;
  closing_method?: XmlElem<string>;
  cost_center_id?: XmlElem<number>;
  is_autoclosing?: XmlElem<boolean>;
  autoclosing_period?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  cost?: XmlElem<PayStageCost>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<PayStageView>;
}

type PayStageDocument = XmlDocument<PayStageTopElem>;

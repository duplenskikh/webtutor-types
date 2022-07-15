interface OutstaffOrderPeriodHour {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  start_hour?: XmlElem<number>;
  finish_hour?: XmlElem<number>;
  hour_num?: XmlElem<number>;
  full_time?: XmlElem<boolean>;
  person_num?: XmlElem<number>;
}

interface OutstaffOrderPeriod {
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  hours?: XmlMultiElem<OutstaffOrderPeriodHour>;
  sum_person?(): any;
  sum_person_hour?(): any;
}

interface OutstaffOrderView extends DescBase {
  last_status?: XmlElem<string>;
}

interface OutstaffOrderTopElem extends XmlTopElem<OutstaffOrderDocument>, PersonFillingBase, FileListBase, AdminAccessBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  status?: XmlElem<string>;
  formed_date?: XmlElem<Date>;
  paid_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  outstaff_provider_id?: XmlElem<number>;
  outstaff_contract_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  position_common_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  period_type?: XmlElem<string>;
  cost_hour?: XmlElem<number>;
  cost_sum?: XmlElem<number>;
  currency?: XmlElem<string>;
  agreement_person_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  periods?: XmlMultiElem<OutstaffOrderPeriod>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<OutstaffOrderView>;
  name?(): any;
  periods_sum_person?(): any;
  periods_sum_person_hour?(): any;
  update_periods?(): any;
}

type OutstaffOrderDocument = XmlDocument<OutstaffOrderTopElem>;

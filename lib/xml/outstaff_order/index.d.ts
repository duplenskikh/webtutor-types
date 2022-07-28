interface OutstaffOrderDocumentPeriodHour {
  id: XmlElem<string>;
  name: XmlElem<string>;
  start_hour: XmlElem<number>;
  finish_hour: XmlElem<number>;
  hour_num: XmlElem<number>;
  full_time: XmlElem<boolean>;
  person_num: XmlElem<number>;
}
interface OutstaffOrderDocumentPeriod {
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  hours: XmlMultiElem<OutstaffOrderDocumentPeriodHour>;
  sum_person(): unknown;
  sum_person_hour(): unknown;
}

type OutstaffOrderDocumentTopElem = XmlTopElem & { Doc: OutstaffOrderDocument } & 
  PersonFillingBase &
  FileListBase &
  AdminAccessBase &
  CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
  status: XmlElem<string>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  person_id: XmlElem<number>;
  outstaff_provider_id: XmlElem<number>;
  outstaff_contract_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  subdivision_id: XmlElem<number>;
  position_common_id: XmlElem<number>;
  region_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  period_type: XmlElem<string>;
  periods: XmlMultiElem<OutstaffOrderDocumentPeriod>;
  periods_sum_person(): unknown;
  periods_sum_person_hour(): unknown;
  cost_hour: XmlElem<number>;
  cost_sum: XmlElem<number>;
  currency: XmlElem<string>;
  agreement_person_id: XmlElem<number>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  update_periods(): unknown;
}

type OutstaffOrderDocument = XmlDocument & { TopElem: OutstaffOrderDocumentTopElem; };

interface OutstaffOrderExecutionDocumentStage extends CostCurrencyBase,
  CustomElemsBase {
  id?: XmlElem<string>;
  parent_stage_id?: XmlElem<string>;
  collaborator_id?: XmlElem<number>;
  provider_person_fullname?: XmlElem<string>;
  date?: XmlElem<Date>;
  fact_date?: XmlElem<Date>;
  hour_num?: XmlElem<number>;
  hours_worked?: XmlElem<number>;
  is_assist?: XmlElem<boolean>;
  outstaff_order_execution_status_type?: XmlElem<string>;
  comment?: XmlElem<string>;
}

type OutstaffOrderExecutionDocumentTopElem = XmlTopElem & { Doc: OutstaffOrderExecutionDocument } & 
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?(): unknown;
  status?: XmlElem<string>;
  formed_date?: XmlElem<Date>;
  paid_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  collaborator_fullname?: XmlElem<string>;
  outstaff_provider_id?: XmlElem<number>;
  outstaff_contract_id?: XmlElem<number>;
  outstaff_contract_name?: XmlElem<string>;
  outstaff_order_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  subdivision_name?: XmlElem<string>;
  budget_period_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  position_common_id?: XmlElem<number>;
  position_common_name?: XmlElem<string>;
  stage_num?: XmlElem<number>;
  stages?: XmlMultiElem<OutstaffOrderExecutionDocumentStage>;
  access?: XmlElem<AccessDocBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  update_stages?(): unknown;
}

type OutstaffOrderExecutionDocument = XmlDocument & { TopElem: OutstaffOrderExecutionDocumentTopElem; };

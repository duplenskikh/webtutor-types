interface PersonnelReserveTask extends FileListBase {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  plan_date?: XmlElem<Date>;
  fact_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
  score?: XmlElem<number>;
  comment?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  active_test_learning_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  assessment_appraise_result_id?: XmlElem<number>;
  poll_result_id?: XmlElem<number>;
  poll_procedure_id?: XmlElem<number>;
}

interface PersonnelReserveRecommendator extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface PersonnelReserveViewTalentPoolFuncManager {
  person_id?: XmlElem<number>;
}

interface PersonnelReserveView extends DescBase {
  part_index?: XmlElem<number>;
  talent_pool_func_managers?: XmlMultiElem<PersonnelReserveViewTalentPoolFuncManager>;
}

interface PersonnelReserveTopElem extends XmlTopElem<PersonnelReserveDocument>, MsPersonSdBase, TalentPoolFuncManagersBase, FileListBase, AdminAccessBase, CustomElemsBase {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  include_reserve_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  status?: XmlElem<string>;
  career_reserve_type_id?: XmlElem<number>;
  exclusion_reason_id?: XmlElem<number>;
  nomination_id?: XmlElem<number>;
  development_potential_id?: XmlElem<number>;
  efficiency_estimation_id?: XmlElem<number>;
  overall_comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  tasks?: XmlMultiElem<PersonnelReserveTask>;
  recommendators?: XmlMultiElem<PersonnelReserveRecommendator>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<PersonnelReserveView>;
  set_task?(): any;
  change_func_managers_list?(): any;
}

type PersonnelReserveDocument = XmlDocument<PersonnelReserveTopElem>;

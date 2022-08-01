interface PersonnelReserveDocumentTask extends FileListBase {
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

interface PersonnelReserveDocumentRecommendator extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

type PersonnelReserveDocumentTopElem = XmlTopElem & 
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PersonnelReserveDocument;
  id: XmlElem<number>;
  name(): string;
  start_date: XmlElem<Date>;
  include_reserve_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  status: XmlElem<string>;
  career_reserve_type_id: XmlElem<number>;
  exclusion_reason_id: XmlElem<number>;
  nomination_id: XmlElem<number>;
  development_potential_id: XmlElem<number>;
  efficiency_estimation_id: XmlElem<number>;
  tasks: XmlMultiElem<PersonnelReserveDocumentTask>;
  recommendators: XmlMultiElem<PersonnelReserveDocumentRecommendator>;
  overall_comment: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  set_task(): unknown;
  change_func_managers_list(): unknown;
  role_id: XmlMultiElem<number>;
}

type PersonnelReserveDocument = XmlDocument & {
  TopElem: PersonnelReserveDocumentTopElem;
};

interface PersonnelReserveDocumentTask extends FileListBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.career_reserve_type_tasks_types>;
  status: XmlElem<string, typeof common.personnel_reserve_task_status_types>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  desc: XmlElem<string>;
  score: XmlElem<number>;
  comment: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  active_test_learning_id: XmlElem<number, ActiveTestLearningCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_appraise_result_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  add_exist_appraise: XmlElem<boolean>;
  poll_result_id: XmlElem<number, PollResultCatalogDocumentTopElem>;
  poll_procedure_id: XmlElem<number, PollProcedureCatalogDocumentTopElem>;
}

interface PersonnelReserveDocumentRecommendator extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

type PersonnelReserveDocumentTopElem = XmlTopElem &
MsPersonSdBase &
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PersonnelReserveDocument;
  id: XmlElem<number>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  include_reserve_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.personnel_reserve_status_types>;
  career_reserve_type_id: XmlElem<number, CareerReserveTypeCatalogDocumentTopElem>;
  exclusion_reason_id: XmlElem<number, ExclusionReasonCatalogDocumentTopElem>;
  nomination_id: XmlElem<number, TalentPoolNominationCatalogDocumentTopElem>;
  development_potential_id: XmlElem<number, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number, EfficiencyEstimationCatalogDocumentTopElem>;
  tasks: XmlMultiElem<PersonnelReserveDocumentTask>;
  recommendators: XmlMultiElem<PersonnelReserveDocumentRecommendator>;
  overall_comment: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  set_task(task: unknown): unknown;
  change_func_managers_list(): unknown;
  role_id: XmlMultiElemObject<number>;
};

type PersonnelReserveDocument = XmlDocument & {
  TopElem: PersonnelReserveDocumentTopElem;
  personnel_reserve: PersonnelReserveDocumentTopElem;
  OnLocalInit(): unknown;
  DocDesc(): unknown;
};

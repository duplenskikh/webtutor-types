interface PersonnelReserveDocumentTask extends FileListBase {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.career_reserve_type_tasks_types>;
  status: XmlElem<string, typeof common.personnel_reserve_task_status_types>;
  plan_date: XmlElem<Date | null>;
  fact_date: XmlElem<Date | null>;
  desc: XmlElem<string | null>;
  score: XmlElem<number | null>;
  comment: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  active_test_learning_id: XmlElem<number | null, ActiveTestLearningCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_appraise_result_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  add_exist_appraise: XmlElem<boolean | null>;
  poll_result_id: XmlElem<number | null, PollResultCatalogDocumentTopElem>;
  poll_procedure_id: XmlElem<number | null, PollProcedureCatalogDocumentTopElem>;
}

interface PersonnelReserveDocumentRecommendator extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type PersonnelReserveDocumentTopElem = XmlTopElem &
MsPersonSdBase &
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PersonnelReserveDocument;
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  include_reserve_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.personnel_reserve_status_types>;
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  exclusion_reason_id: XmlElem<number | null, ExclusionReasonCatalogDocumentTopElem>;
  nomination_id: XmlElem<number | null, TalentPoolNominationCatalogDocumentTopElem>;
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  tasks: XmlMultiElem<PersonnelReserveDocumentTask | null>;
  recommendators: XmlMultiElem<PersonnelReserveDocumentRecommendator | null>;
  overall_comment: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  set_task(task: unknown): string | void;
  change_func_managers_list(): unknown;
  role_id: XmlMultiElemObject<number | null>;
};

type PersonnelReserveDocument = XmlDocument & {
  TopElem: PersonnelReserveDocumentTopElem;
  personnel_reserve: PersonnelReserveDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};

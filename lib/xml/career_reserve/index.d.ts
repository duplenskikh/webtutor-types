interface CareerReserveDocumentTutor extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  is_responsible: XmlElem<boolean>;
  comment: XmlElem<string>;
}

interface CareerReserveDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  score: XmlElem<number>;
  comment: XmlElem<string>;
}

interface CareerReserveDocumentTask extends CustomElemsBase, FileListBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.career_reserve_tasks_types>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  parent_task_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  start_edit_date: XmlElem<Date>;
  typical_development_program_id: XmlElem<number, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  typical_development_program_task_id: XmlElem<string>;
  tutor_id: XmlElem<number>;
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  score: XmlElem<number>;
  person_comment: XmlElem<string>;
  tutor_comment: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  active_test_learning_id: XmlElem<number, ActiveTestLearningCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_result_id: XmlElem<number, EventResultCatalogDocumentTopElem>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  active_learning_id: XmlElem<number, ActiveLearningCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_appraise_result_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  add_exist_appraise: XmlElem<boolean>;
  poll_result_id: XmlElem<number, PollResultCatalogDocumentTopElem>;
  poll_procedure_id: XmlElem<number, PollProcedureCatalogDocumentTopElem>;
  type_document: XmlElem<string, typeof common.career_reserve_material_types>;
  link_document: XmlElem<string>;
  task_id: XmlElem<number, TaskCatalogDocumentTopElem>;
  learning_task_result_id: XmlElem<number, LearningTaskResultCatalogDocumentTopElem>;
  forbid_task_portal_edit: XmlElem<boolean>;
  commission_persons: XmlMultiElem<CareerReserveDocumentTaskCommissionPerson>;
  position: XmlElem<number>;
}

type CareerReserveDocumentTopElem = XmlTopElem &
MsPersonSdBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CareerReserveDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
  start_date: XmlElem<Date>;
  plan_readiness_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  readiness_percent: XmlElem<number>;
  autocalculate_readiness_percent: XmlElem<boolean>;
  personnel_reserve_id: XmlElem<number, PersonnelReserveCatalogDocumentTopElem>;
  successor_id: XmlElem<number, SuccessorCatalogDocumentTopElem>;
  career_plan_id: XmlElem<number, CareerPlanCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  position_type: XmlElem<string>;
  position_name: XmlElem<string>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  staff_position_id: XmlElem<number, StaffPositionCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  tutors: XmlMultiElem<CareerReserveDocumentTutor>;
  current_competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  target_competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  development_plan_id: XmlElem<number, DevelopmentPlanCatalogDocumentTopElem>;
  forbid_tasks_edit: XmlElem<boolean>;
  tasks: XmlMultiElem<CareerReserveDocumentTask>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  get_linked_position_common_id(): unknown;
  assign_typical_program(typicalProgramId: number): unknown;
  set_task(task: unknown, typicalProgramId: number, parentTaskId: string): unknown;
  change_tutors_list(): unknown;
  calc_position(task: unknown): unknown;
  filling_empty_position_field(): unknown;
  role_id: XmlMultiElemObject<number>;
};

type CareerReserveDocument = XmlDocument & {
  TopElem: CareerReserveDocumentTopElem;
  career_reserve: CareerReserveDocumentTopElem;
  OnLocalInit(): unknown;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};

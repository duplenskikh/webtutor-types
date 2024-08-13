interface CareerReserveDocumentTutor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  is_responsible: XmlElem<boolean>;
  comment: XmlElem<string | null>;
}

interface CareerReserveDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  score: XmlElem<number | null>;
  comment: XmlElem<string | null>;
}

interface CareerReserveDocumentTask extends CustomElemsBase, FileListBase {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.career_reserve_tasks_types>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  parent_task_id: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  plan_date: XmlElem<Date | null>;
  fact_date: XmlElem<Date | null>;
  start_edit_date: XmlElem<Date | null>;
  typical_development_program_id: XmlElem<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  typical_development_program_task_id: XmlElem<string | null>;
  tutor_id: XmlElem<number | null>;
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  score: XmlElem<number | null>;
  person_comment: XmlElem<string | null>;
  tutor_comment: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  active_test_learning_id: XmlElem<number | null, ActiveTestLearningCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  event_result_id: XmlElem<number | null, EventResultCatalogDocumentTopElem>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_appraise_result_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  add_exist_appraise: XmlElem<boolean | null>;
  poll_result_id: XmlElem<number | null, PollResultCatalogDocumentTopElem>;
  poll_procedure_id: XmlElem<number | null, PollProcedureCatalogDocumentTopElem>;
  type_document: XmlElem<string | null, typeof common.career_reserve_material_types>;
  link_document: XmlElem<string | null>;
  task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  learning_task_result_id: XmlElem<number | null, LearningTaskResultCatalogDocumentTopElem>;
  forbid_task_portal_edit: XmlElem<boolean>;
  commission_persons: XmlMultiElem<CareerReserveDocumentTaskCommissionPerson | null>;
  position: XmlElem<number>;
}

type CareerReserveDocumentTopElem = XmlTopElem &
MsPersonSdBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CareerReserveDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  start_date: XmlElem<Date | null>;
  plan_readiness_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  readiness_percent: XmlElem<number | null>;
  autocalculate_readiness_percent: XmlElem<boolean>;
  personnel_reserve_id: XmlElem<number | null, PersonnelReserveCatalogDocumentTopElem>;
  successor_id: XmlElem<number | null, SuccessorCatalogDocumentTopElem>;
  career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  position_type: XmlElem<string>;
  position_name: XmlElem<string | null>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  tutors: XmlMultiElem<CareerReserveDocumentTutor | null>;
  current_competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  target_competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  development_plan_id: XmlElem<number | null, DevelopmentPlanCatalogDocumentTopElem>;
  forbid_tasks_edit: XmlElem<boolean>;
  tasks: XmlMultiElem<CareerReserveDocumentTask | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  get_linked_position_common_id(): number;
  assign_typical_program(typicalProgramId: number): void;
  set_task(task: unknown, typicalProgramId: number, parentTaskId: string): string | void;
  change_tutors_list(): void;
  calc_position(task: unknown): void;
  filling_empty_position_field(): void;
  role_id: XmlMultiElemObject<number | null>;
};

type CareerReserveDocument = XmlDocument & {
  TopElem: CareerReserveDocumentTopElem;
  career_reserve: CareerReserveDocumentTopElem;
  OnLocalInit(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};

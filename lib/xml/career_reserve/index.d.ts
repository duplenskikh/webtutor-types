interface CareerReserveDocumentTutor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Является непосредственным руководителем */
  is_native: XmlElem<boolean>;
  /** Тип руководителя */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Является ответственным */
  is_responsible: XmlElem<boolean>;
  comment: XmlElem<string | null>;
}

interface CareerReserveDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Оценка */
  score: XmlElem<number | null>;
  comment: XmlElem<string | null>;
}

interface CareerReserveDocumentTask extends CustomElemsBase, FileListBase {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.career_reserve_tasks_types>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  /** Родительская задача */
  parent_task_id: XmlElem<string | null>;
  /** Дата включения */
  start_date: XmlElem<Date | null>;
  /** Плановая дата выполнения */
  plan_date: XmlElem<Date | null>;
  /** Фактическая дата выполнения */
  fact_date: XmlElem<Date | null>;
  start_edit_date: XmlElem<Date | null>;
  /** Типовая программа развития */
  typical_development_program_id: XmlElem<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  typical_development_program_task_id: XmlElem<string | null>;
  tutor_id: XmlElem<number | null>;
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  /** Оценка */
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
  /** Запретить редактирование задачи на портале */
  forbid_task_portal_edit: XmlElem<boolean>;
  commission_persons: XmlMultiElem<CareerReserveDocumentTaskCommissionPerson | null>;
  /** Позиция */
  position: XmlElem<number>;
}

type CareerReserveDocumentTopElem = XmlTopElem &
MsPersonSdBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CareerReserveDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Дата включения */
  start_date: XmlElem<Date | null>;
  /** Дата планируемой готовности */
  plan_readiness_date: XmlElem<Date | null>;
  /** Дата фактической готовности */
  finish_date: XmlElem<Date | null>;
  /** Процент готовности */
  readiness_percent: XmlElem<number | null>;
  autocalculate_readiness_percent: XmlElem<boolean>;
  /** Кадровый резерв */
  personnel_reserve_id: XmlElem<number | null, PersonnelReserveCatalogDocumentTopElem>;
  /** Преемник */
  successor_id: XmlElem<number | null, SuccessorCatalogDocumentTopElem>;
  career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
  /** Статус */
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  /** Тип */
  position_type: XmlElem<string>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  /** Место проведения */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Наставники */
  tutors: XmlMultiElem<CareerReserveDocumentTutor | null>;
  /** Начальный профиль компетенции */
  current_competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Целевой профиль компетенции */
  target_competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** План развития */
  development_plan_id: XmlElem<number | null, DevelopmentPlanCatalogDocumentTopElem>;
  /** Запретить изменение списка задач */
  forbid_tasks_edit: XmlElem<boolean>;
  tasks: XmlMultiElem<CareerReserveDocumentTask | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  get_linked_position_common_id(): number;
  assign_typical_program(typicalProgramId: number): void;
  set_task(task: unknown, typicalProgramId: number, parentTaskId: string): string | void;
  change_tutors_list(): void;
  calc_position(task: unknown): void;
  filling_empty_position_field(): void;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type CareerReserveDocument = XmlDocument & {
  TopElem: CareerReserveDocumentTopElem;
  career_reserve: CareerReserveDocumentTopElem;
  OnLocalInit(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};

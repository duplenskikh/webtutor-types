interface EducationPlanDocumentProgramStartLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramStartAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramFinishLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramFinishAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramFinishNotifiation {
  /** Шаблон уведомления */
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  /** Тема */
  subject: XmlElem<string | null>;
  /** Сообщение */
  body: XmlElem<string | null>;
  /** Формат сообщения */
  body_type: XmlElem<string | null>;
  edit_notification: XmlElem<boolean>;
}

interface EducationPlanDocumentProgramStartNotifiation {
  /** Шаблон уведомления */
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  /** Тема */
  subject: XmlElem<string | null>;
  /** Сообщение */
  body: XmlElem<string | null>;
  /** Формат сообщения */
  body_type: XmlElem<string | null>;
  edit_notification: XmlElem<boolean>;
}

interface EducationPlanDocumentProgramResultObject {
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип результата */
  result_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  result_object_id: XmlElem<number | null>;
}

interface EducationPlanDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number | null>;
}

interface EducationPlanDocumentProgramProgramResult {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string | null>;
  /** Дата создания */
  date: XmlElem<Date | null>;
}

interface EducationPlanDocumentProgram extends CustomElemsBase {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Корневой раздел */
  parent_progpam_id: XmlElem<number | null>;
  /** Учебная программа */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Набор программ */
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  /** Доступ после завершения разделов */
  start_learning_tasks: XmlMultiElem<EducationPlanDocumentProgramStartLearningTask | null>;
  /** Доступ после завершения разделов */
  start_assessments: XmlMultiElem<EducationPlanDocumentProgramStartAssessment | null>;
  /** Доступ после завершения разделов */
  finish_learning_tasks: XmlMultiElem<EducationPlanDocumentProgramFinishLearningTask | null>;
  /** Доступ после завершения разделов */
  finish_assessments: XmlMultiElem<EducationPlanDocumentProgramFinishAssessment | null>;
  finish_notifiation: XmlElem<EducationPlanDocumentProgramFinishNotifiation | null>;
  start_notifiation: XmlElem<EducationPlanDocumentProgramStartNotifiation | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Код */
  object_code: XmlElem<string | null>;
  object_start_date: XmlElem<Date | null>;
  catalog_name: XmlElem<string | null, typeof common.learning_catalogs>;
  /** Тема */
  subject: XmlElem<string | null>;
  /** Сообщение */
  body: XmlElem<string | null>;
  /** Формат сообщения */
  body_type: XmlElem<string | null>;
  edit_notification: XmlElem<boolean>;
  /** Дней */
  delay_days: XmlElem<number | null>;
  /** Дней */
  days: XmlElem<number | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Планируемая дата */
  plan_date: XmlElem<Date | null>;
  /** Тип результата */
  result_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  result_object_id: XmlElem<number | null>;
  /** Название объекта */
  result_object_name: XmlElem<string | null>;
  /** Код */
  result_object_code: XmlElem<string | null>;
  result_object_start_date: XmlElem<Date | null>;
  result_object_finish_date: XmlElem<Date | null>;
  result_objects: XmlMultiElem<EducationPlanDocumentProgramResultObject | null>;
  /** Статус */
  state_id: XmlElem<number, typeof common.education_learning_states>;
  /** Ответственный */
  tutor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Вес, % */
  weight: XmlElem<number | null>;
  /** Процент готовности */
  readiness_percent: XmlElem<number | null>;
  start_type: XmlElem<string | null>;
  /** Оценка */
  mark: XmlElem<number | null>;
  /** Незаконченный электронный курс */
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  /** Электронный курс */
  learning_id: XmlElem<number | null, LearningCatalogDocumentTopElem>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Обязательный раздел */
  required: XmlElem<boolean>;
  /** Доступ после завершения разделов */
  completed_parent_programs: XmlMultiElem<EducationPlanDocumentProgramCompletedParentProgram | null>;
  program_results: XmlMultiElem<EducationPlanDocumentProgramProgramResult | null>;
}

type EducationPlanDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: EducationPlanDocument;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Модульная программа */
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  /** Тип */
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Ответственный */
  tutor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  update_status_and_activity: XmlElem<boolean>;
  strong_date_control: XmlElem<boolean>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  fact_finish_date: XmlElem<Date | null>;
  last_activity_date: XmlElem<Date | null>;
  /** Планируемая дата */
  plan_date: XmlElem<Date | null>;
  /** Общая оценка */
  mark: XmlElem<number | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Процент готовности */
  readiness_percent: XmlElem<number | null>;
  /** Статус */
  state_id: XmlElem<number, typeof common.education_learning_states>;
  /** Статус */
  last_state_id: XmlElem<number | null, typeof common.education_learning_states>;
  /** Разделы плана */
  programs: XmlMultiElem<EducationPlanDocumentProgram | null>;
  calculate_state_id(): unknown;
  /** План развития */
  development_plan_id: XmlElem<number | null, DevelopmentPlanCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Процедура */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  getEducationPlanAccess(objId: number, userId: number, objectTopElem: unknown): unknown;
  calculateMark(): EducationPlanDocument;
};

type EducationPlanDocument = XmlDocument & {
  TopElem: EducationPlanDocumentTopElem;
  education_plan: EducationPlanDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

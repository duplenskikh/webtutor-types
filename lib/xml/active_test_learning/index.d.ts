type ActiveTestLearningDocumentTopElem = XmlTopElem &
LearningAssessmentBase &
PersonFillingBase &
LearningCurrentStateBase &
LearningObjectivesInteractionsBase &
LastAttemptTestLearningsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ActiveTestLearningDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  activation_code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Текущее состояние сотрудника */
  person_current_state: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Название мероприятия */
  event_name: XmlElem<string | null>;
  /** Дата начала мероприятия */
  event_start_date: XmlElem<Date | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  proctor_prefer_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Продолжительность в днях */
  duration: XmlElem<number | null>;
  /** Количество попыток */
  attempts_num: XmlElem<number>;
  /** Статус */
  state_id: XmlElem<number, typeof common.learning_states>;
  lesson_location: XmlElem<string | null>;
  /** Баллы */
  score: XmlElem<number>;
  score_str: XmlElem<string | null>;
  /** Служебная информация */
  core_lesson: XmlElem<string | null>;
  /** Отчет по результатам */
  lesson_report: XmlElem<string | null>;
  /** Дата активации */
  start_usage_date: XmlElem<Date | null>;
  /** Дата начала обучения */
  start_learning_date: XmlElem<Date | null>;
  /** Дата последнего посещ. */
  last_usage_date: XmlElem<Date | null>;
  /** Дата планир. завершения */
  max_end_date: XmlElem<Date | null>;
  /** Время модуля */
  time: XmlElem<number | null>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  question_num: XmlElem<number | null>;
  question_answered_num(): number;
  question_passed_num(): number;
  no_encoding_core_lesson: XmlElem<boolean | null>;
  use_proctoring: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  testing_link: XmlElem<string | null>;
  calc_max_end_date(): Date | null;
  complete_test(): number;
};

type ActiveTestLearningDocument = XmlDocument & {
  TopElem: ActiveTestLearningDocumentTopElem;
  active_test_learning: ActiveTestLearningDocumentTopElem;
  OnLocalInit(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};

interface AssessmentAppraiseDocumentAuditory {
  /** ID оцениваемого сотрудника */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_name: XmlElem<string | null>;
  position_name: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentDepartment {
  /** ID оцениваемого подразделения */
  department_id: XmlElem<number | null>;
}

interface AssessmentAppraiseDocumentAssessmentObject {
  /** Объект */
  assessment_object_id: XmlElem<number | null>;
}

interface AssessmentAppraiseDocumentAssPositionCommon {
  /** ID оцениваемой должности */
  ass_position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentGrade {
  /** ID грейда */
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  /** Требуемый балл */
  level: XmlElem<number | null>;
  comment: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentParticipantParameter {
  /** Значения параметра */
  parameter_id: XmlElem<string | null, typeof common.assessment_appraise_parameters>;
}

interface AssessmentAppraiseDocumentParticipantCustomizeExpert {
  /** ID эксперта */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО эксперта */
  person_fullname: XmlElem<string | null>;
  /** Должность эксперта */
  person_position_name: XmlElem<string | null>;
  /** Роль эксперта */
  role: XmlElem<string | null>;
  /** Ответственный */
  responsible: XmlElem<boolean>;
}

interface AssessmentAppraiseDocumentParticipantCustomize {
  /** Минимальное количество */
  min: XmlElem<number | null>;
  /** Максимальное количество */
  max: XmlElem<number | null>;
  /** Проводящий сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Эксперты */
  is_custom_experts: XmlElem<boolean>;
  /** Определение согласующего руководителя */
  custom_title: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlMultiElem<AssessmentAppraiseDocumentParticipantCustomizeExpert | null>;
  /** Дополнительный исполняемый код поиска участников оценки. Существует массив MASTERS_PACK[], состоящий из ID элементов типа "collaborator", который уже сформирован из начальных значений автоматически. LBOUND (integer) - минимальное количество оценщиков, UBOUND (integer) - максимальное количество оценщиков. personDoc - TopElem карточки collaborator, personID - ID карточки collaborator */
  additional_participants_code: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentParticipantAssessmentAppraiseType extends SupplementaryQuestionsBase, WebVariablesBase {
  /** Код типа оценочной процедуры */
  assessment_appraise_type_id: XmlElem<string | null, typeof common.assessment_appraise_types>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Системное значение */
  flag_01: XmlElem<boolean>;
  /** Системное значение */
  flag_02: XmlElem<string>;
  /** Системное значение */
  flag_03: XmlElem<number | null>;
  /** Системное значение */
  flag_04: XmlElem<string | null>;
  /** Системное значение */
  flag_05: XmlElem<number | null>;
  /** Системное значение */
  flag_06: XmlElem<boolean | null>;
  /** Системное значение */
  flag_07: XmlElem<string | null>;
  /** Формула общего значения (для оценки задач) */
  formula: XmlElem<string | null>;
  /** Формула расчета проекта */
  sub_formula: XmlElem<string | null>;
  /** Расчет общего значения KPI */
  additional_formula: XmlElem<string | null>;
  /** Расчет оценки по ролям */
  is_formuled_result: XmlElem<boolean>;
  /** Расчет оценки по ролям */
  advanced_columns_formula: XmlElem<string | null>;
  /** Запретить редактирование */
  is_formuled_result_readonly: XmlElem<boolean>;
  /** Сдвиг значений */
  incrementation: XmlElem<number>;
  /** Начало периода */
  period_start: XmlElem<Date | null>;
  /** Конец периода */
  period_end: XmlElem<Date | null>;
  /** Заголовок для типа оценки */
  type_title: XmlElem<string | null>;
  /** Печатная форма */
  print_form_id: XmlElem<number | null, PrintFormCatalogDocumentTopElem>;
  /** Настраиваемый шаблон */
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Настраиваемый код POST обработки */
  custom_post_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Индекс */
  index: XmlElem<number>;
  career_plan_type: XmlElem<string | null>;
  career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentParticipant {
  /** Код роли оценки */
  participant_id: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Параметры */
  parameters: XmlMultiElem<AssessmentAppraiseDocumentParticipantParameter | null>;
  /** Настройки роли оценки */
  customize: XmlElem<AssessmentAppraiseDocumentParticipantCustomize | null>;
  /** Роль является результирующей */
  is_final: XmlElem<boolean>;
  /** Типы оценочных процедур */
  assessment_appraise_types: XmlMultiElem<AssessmentAppraiseDocumentParticipantAssessmentAppraiseType | null>;
}

interface AssessmentAppraiseDocumentAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentExercise {
  exercise_id: XmlElem<number | null, ExerciseCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentCustomHeader {
  display_eval: XmlElem<string | null>;
  title: XmlElem<string | null>;
  value_eval: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentCustomObject {
  custom_object_id: XmlElem<number | null>;
  custom_object_name: XmlElem<string | null>;
  custom_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface AssessmentAppraiseDocumentImpersonatePerson {
  impersonator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  impersonator_fullname: XmlElem<string | null>;
  face_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  face_person_fullname: XmlElem<string | null>;
  from_date: XmlElem<Date | null>;
  to_date: XmlElem<Date | null>;
}

type AssessmentAppraiseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: AssessmentAppraiseDocument;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Статус */
  status: XmlElem<string, typeof common.assessment_appraise_statuses>;
  /** Просмотр результатов */
  web_display: XmlElem<boolean>;
  /** Объект хранения статуса */
  flag_use_plan: XmlElem<boolean>;
  /** Эталонная */
  is_model: XmlElem<boolean>;
  /** Ответственный за проведение */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Объект оценки */
  assessment_object_type: XmlElem<string>;
  /** Кол-во */
  max_auditory: XmlElem<number | null>;
  /** Оцениваемые */
  auditorys: XmlMultiElem<AssessmentAppraiseDocumentAuditory | null>;
  /** Оцениваемые группы */
  groups: XmlMultiElem<AssessmentAppraiseDocumentGroup | null>;
  /** Оцениваемые подразделения */
  departments: XmlMultiElem<AssessmentAppraiseDocumentDepartment | null>;
  assessment_objects: XmlMultiElem<AssessmentAppraiseDocumentAssessmentObject | null>;
  /** Оцениваемые должности */
  ass_position_commons: XmlMultiElem<AssessmentAppraiseDocumentAssPositionCommon | null>;
  /** Уровни грейд */
  grades: XmlMultiElem<AssessmentAppraiseDocumentGrade | null>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Оцениваемые */
  is_visible_auditorys: XmlElem<boolean>;
  is_visible_evaluatings: XmlElem<boolean>;
  /** Эксперты */
  is_visible_experts: XmlElem<boolean>;
  /** Матрица ответственности */
  assessment_appraise_matrix_id: XmlElem<number | null, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  /** Роли оценки */
  participants: XmlMultiElem<AssessmentAppraiseDocumentParticipant | null>;
  /** Выборка участников */
  participant_select: XmlElem<string | null, ParticipantCatalogDocumentTopElem>;
  /** Игнорировать присутствие */
  ignore_presence: XmlElem<boolean>;
  /** Учитывать уволенных сотрудников */
  include_fired: XmlElem<boolean>;
  /** Проверять согласующих */
  always_check_custom_experts: XmlElem<boolean>;
  /** Публикация результатов */
  external_display_options: XmlElem<string | null>;
  /** Назначенные тесты */
  assessments: XmlMultiElem<AssessmentAppraiseDocumentAssessment | null>;
  /** Упражнения */
  exercises: XmlMultiElem<AssessmentAppraiseDocumentExercise | null>;
  /** Настраиваемые заголовки форм */
  custom_headers: XmlMultiElem<AssessmentAppraiseDocumentCustomHeader | null>;
  /** Тип объектов */
  custom_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Дополнительные объекты */
  custom_objects: XmlMultiElem<AssessmentAppraiseDocumentCustomObject | null>;
  /** Инструкция на портале */
  manual_document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  /** Стандартные комментарии */
  is_basic_comment: XmlElem<boolean | null>;
  /** Необходимо заполнить комментарий */
  is_comment_required: XmlElem<boolean | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Журнал */
  log: XmlElem<string | null>;
  /** Журнал */
  report_id: XmlElem<number | null, ActionReportCatalogDocumentTopElem>;
  /** Настраиваемый шаблон, выполняющийся перед загрузкой каждой формы */
  prefix_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Настраиваемый шаблон, заменяющий стандартное дерево */
  tree_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Настраиваемый шаблон, заменяющий стандартный заголовок форм */
  header_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  data_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  css_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  xml_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Агент, запускаемый из панели инструментов процедуры */
  server_agent_id: XmlElem<number | null, ServerAgentCatalogDocumentTopElem>;
  player: XmlElem<number>;
  /** Делегирование */
  impersonate_persons: XmlMultiElem<AssessmentAppraiseDocumentImpersonatePerson | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type AssessmentAppraiseDocument = XmlDocument & {
  TopElem: AssessmentAppraiseDocumentTopElem;
  assessment_appraise: AssessmentAppraiseDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

interface PaDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface PaDocumentLabour {
  cash: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  standard_hours: XmlElem<number | null>;
  tenure: XmlElem<number | null>;
  work_hours: XmlElem<number | null>;
}

interface PaDocumentHierSnapshot {
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

interface PaDocumentCompetenceExercise {
  exercise_id: XmlElem<number | null, ExerciseCatalogDocumentTopElem>;
  /** Оценка */
  mark: XmlElem<string | null>;
}

interface PaDocumentCompetenceIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id: XmlElem<number | null, IndicatorCatalogDocumentTopElem>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  plan_text: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  /** Оценка */
  mark: XmlElem<string | null>;
  mark_text: XmlElem<string | null>;
  mark_value: XmlElem<number | null>;
  /** Вес */
  weight: XmlElem<number>;
  comment: XmlElem<string | null>;
}

interface PaDocumentCompetence extends WorkflowFieldsAssessmentBase {
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  plan_text: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  /** Оценка */
  mark: XmlElem<string | null>;
  mark_text: XmlElem<string | null>;
  mark_value: XmlElem<number | null>;
  /** Вес */
  weight: XmlElem<number>;
  comment: XmlElem<string | null>;
  type: XmlElem<string | null, typeof lists.competence_types>;
  /** Упражнения */
  exercises: XmlMultiElem<PaDocumentCompetenceExercise | null>;
  /** Индикаторы */
  indicators: XmlMultiElem<PaDocumentCompetenceIndicator | null>;
}

interface PaDocumentKpi extends WorkflowFieldsAssessmentBase {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  /** Порог */
  threshold: XmlElem<number | null>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  /** Вызов */
  challenge: XmlElem<number | null>;
  /** Фактическая величина */
  fact: XmlElem<string | null>;
  /** Оценка */
  mark: XmlElem<string | null>;
  /** Вес */
  weight: XmlElem<number>;
  source_pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  kpi_value_id: XmlElem<number | null, KpiValueCatalogDocumentTopElem>;
  kpi_plan_id: XmlElem<number | null, KpiPlanCatalogDocumentTopElem>;
  position: XmlElem<number | null>;
  parent_kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
}

interface PaDocumentProject extends WorkflowFieldsAssessmentBase {
  project_id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Порог */
  threshold: XmlElem<number | null>;
  /** План */
  plan: XmlElem<string | null>;
  /** Вызов */
  challenge: XmlElem<number | null>;
  /** Факт */
  fact: XmlElem<string | null>;
  /** Оценка */
  mark: XmlElem<number | null>;
  /** Вес */
  weight: XmlElem<number>;
  standard_project_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
}

interface PaDocumentObjectiveSubobjective extends WorkflowFieldsAssessmentBase {
  /** Название */
  name: XmlElem<string | null>;
  /** План */
  plan: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Факт */
  fact: XmlElem<string | null>;
  /** Оценка */
  mark: XmlElem<number | null>;
  /** Бюджетный период */
  plan_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Бюджетный период */
  fact_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
}

interface PaDocumentObjective extends WorkflowFieldsAssessmentBase {
  objective_id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Вес */
  weight: XmlElem<number>;
  /** Оценка */
  mark: XmlElem<number | null>;
  /** Бюджетный период */
  plan_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Бюджетный период */
  fact_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Подцели */
  subobjectives: XmlMultiElem<PaDocumentObjectiveSubobjective | null>;
}

interface PaDocumentTask {
  task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  /** Вес */
  weight: XmlElem<number>;
  position: XmlElem<number | null>;
  value_text: XmlElem<string | null>;
  /** Оценка */
  value: XmlElem<number | null>;
  parent_task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
}

interface PaDocumentCustomExpert {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_type: XmlElem<number | null>;
  is_done: XmlElem<boolean>;
  responsible: XmlElem<boolean>;
  expert_code: XmlElem<string | null>;
}

interface PaDocumentCustomComment {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  comment_date: XmlElem<Date | null>;
}

interface PaDocumentLastData {
  /** Признак завершения */
  is_done: XmlElem<boolean>;
  workflow_state: XmlElem<string | null>;
}

interface PaDocumentStageCustomField {
  /** Код */
  name: XmlElem<string | null>;
  /** Название */
  title: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface PaDocumentStage {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  career_transition_direction: XmlElem<string, typeof common.career_transition_direction_types>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  check_requirements: XmlElem<boolean>;
  /** Плановая дата выполнения */
  plan_date: XmlElem<Date | null>;
  /** Фактическая дата выполнения */
  fact_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Дополнительные условия */
  stipulation: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  custom_fields: XmlMultiElem<PaDocumentStageCustomField | null>;
}

type PaDocumentTopElem = XmlTopElem &
WorkflowDataBase &
SupplementaryQuestionsBase &
CustomElemsBase &
AdminAccessBase &
FileListBase & {
  Doc: PaDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Оценивающий */
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Ограничить оценивающих по группе */
  restrict_by_group: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Подразделение */
  department_id: XmlElem<number | null>;
  /** Название подразделения */
  department_name: XmlElem<string | null>;
  /** Оценить структуру */
  flag_appraise_department: XmlElem<boolean>;
  /** Объект оценки */
  assessment_object_type: XmlElem<string>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Планы оценки */
  assessment_plan_id: XmlElem<number | null, AssessmentPlanCatalogDocumentTopElem>;
  /** Статус */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Признак завершения */
  is_done: XmlElem<boolean>;
  /** Признак готовности (для параллельной оценки) */
  is_ready: XmlElem<boolean>;
  /** Признак результирующей формы */
  is_final: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  /** Тип процедуры */
  assessment_appraise_type: XmlElem<string | null, typeof common.assessment_appraise_types>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Код профиля компетенций */
  competence_codes: XmlElem<string | null>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<PaDocumentKpiProfile | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  salary: XmlElem<number | null>;
  labour: XmlElem<PaDocumentLabour | null>;
  hier_snapshot: XmlElem<PaDocumentHierSnapshot | null>;
  boss_treat: XmlElem<string | null>;
  revised_value: XmlElem<number | null>;
  /** Сотрудник */
  workflow_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** План. дата завершения */
  workflow_end_date: XmlElem<Date | null>;
  /** Матрица ответственности */
  assessment_appraise_matrix_id: XmlElem<number | null, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  /** Компетенции */
  competences: XmlMultiElem<PaDocumentCompetence | null>;
  period_start: XmlElem<Date | null>;
  period_end: XmlElem<Date | null>;
  /** Профиль компетенций */
  kpis: XmlMultiElem<PaDocumentKpi | null>;
  /** Проекты */
  projects: XmlMultiElem<PaDocumentProject | null>;
  /** Цели */
  objectives: XmlMultiElem<PaDocumentObjective | null>;
  tasks: XmlMultiElem<PaDocumentTask | null>;
  /** Согласующие эксперты */
  custom_experts: XmlMultiElem<PaDocumentCustomExpert | null>;
  custom_comments: XmlMultiElem<PaDocumentCustomComment | null>;
  overall: XmlElem<number | null>;
  appraise_date: XmlElem<Date | null>;
  temp: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  file_name: XmlElem<string | null>;
  file_url: XmlElem<string | null>;
  index: XmlElem<number>;
  /** Сохраненные данные */
  last_data: XmlElem<PaDocumentLastData | null>;
  career_plan_type: XmlElem<string | null>;
  career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
  stages: XmlMultiElem<PaDocumentStage | null>;
  experiment_foo(string: string): unknown;
  calculate(params: unknown): unknown;
  load_kpi_values(): unknown;
};

type PaDocument = XmlDocument & {
  TopElem: PaDocumentTopElem;
  pa: PaDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

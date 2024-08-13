interface PaDocumentKpiProfile {
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
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
  mark: XmlElem<string | null>;
}

interface PaDocumentCompetenceIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id: XmlElem<number | null, IndicatorCatalogDocumentTopElem>;
  plan: XmlElem<string | null>;
  plan_text: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  mark: XmlElem<string | null>;
  mark_text: XmlElem<string | null>;
  mark_value: XmlElem<number | null>;
  weight: XmlElem<number>;
  comment: XmlElem<string | null>;
}

interface PaDocumentCompetence extends WorkflowFieldsAssessmentBase {
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  plan: XmlElem<string | null>;
  plan_text: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  mark: XmlElem<string | null>;
  mark_text: XmlElem<string | null>;
  mark_value: XmlElem<number | null>;
  weight: XmlElem<number>;
  comment: XmlElem<string | null>;
  type: XmlElem<string | null, typeof lists.competence_types>;
  exercises: XmlMultiElem<PaDocumentCompetenceExercise | null>;
  indicators: XmlMultiElem<PaDocumentCompetenceIndicator | null>;
}

interface PaDocumentKpi extends WorkflowFieldsAssessmentBase {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  threshold: XmlElem<number | null>;
  plan: XmlElem<string | null>;
  challenge: XmlElem<number | null>;
  fact: XmlElem<string | null>;
  mark: XmlElem<string | null>;
  weight: XmlElem<number>;
  source_pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  kpi_value_id: XmlElem<number | null, KpiValueCatalogDocumentTopElem>;
  kpi_plan_id: XmlElem<number | null, KpiPlanCatalogDocumentTopElem>;
  position: XmlElem<number | null>;
  parent_kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
}

interface PaDocumentProject extends WorkflowFieldsAssessmentBase {
  project_id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  threshold: XmlElem<number | null>;
  plan: XmlElem<string | null>;
  challenge: XmlElem<number | null>;
  fact: XmlElem<string | null>;
  mark: XmlElem<number | null>;
  weight: XmlElem<number>;
  standard_project_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
}

interface PaDocumentObjectiveSubobjective extends WorkflowFieldsAssessmentBase {
  name: XmlElem<string | null>;
  plan: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  fact: XmlElem<string | null>;
  mark: XmlElem<number | null>;
  plan_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  fact_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
}

interface PaDocumentObjective extends WorkflowFieldsAssessmentBase {
  objective_id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  weight: XmlElem<number>;
  mark: XmlElem<number | null>;
  plan_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  fact_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  subobjectives: XmlMultiElem<PaDocumentObjectiveSubobjective | null>;
}

interface PaDocumentTask {
  task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  weight: XmlElem<number>;
  position: XmlElem<number | null>;
  value_text: XmlElem<string | null>;
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
  is_done: XmlElem<boolean>;
  workflow_state: XmlElem<string | null>;
}

interface PaDocumentStageCustomField {
  name: XmlElem<string | null>;
  title: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface PaDocumentStage {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  career_transition_direction: XmlElem<string, typeof common.career_transition_direction_types>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  check_requirements: XmlElem<boolean>;
  plan_date: XmlElem<Date | null>;
  fact_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  stipulation: XmlElem<string | null>;
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
  code: XmlElem<string | null>;
  name(): string;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  restrict_by_group: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  department_id: XmlElem<number | null>;
  department_name: XmlElem<string | null>;
  flag_appraise_department: XmlElem<boolean>;
  assessment_object_type: XmlElem<string>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_plan_id: XmlElem<number | null, AssessmentPlanCatalogDocumentTopElem>;
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  is_done: XmlElem<boolean>;
  is_ready: XmlElem<boolean>;
  is_final: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  assessment_appraise_type: XmlElem<string | null, typeof common.assessment_appraise_types>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  competence_codes: XmlElem<string | null>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<PaDocumentKpiProfile | null>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  salary: XmlElem<number | null>;
  labour: XmlElem<PaDocumentLabour | null>;
  hier_snapshot: XmlElem<PaDocumentHierSnapshot | null>;
  boss_treat: XmlElem<string | null>;
  revised_value: XmlElem<number | null>;
  workflow_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_end_date: XmlElem<Date | null>;
  assessment_appraise_matrix_id: XmlElem<number | null, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  competences: XmlMultiElem<PaDocumentCompetence | null>;
  period_start: XmlElem<Date | null>;
  period_end: XmlElem<Date | null>;
  kpis: XmlMultiElem<PaDocumentKpi | null>;
  projects: XmlMultiElem<PaDocumentProject | null>;
  objectives: XmlMultiElem<PaDocumentObjective | null>;
  tasks: XmlMultiElem<PaDocumentTask | null>;
  custom_experts: XmlMultiElem<PaDocumentCustomExpert | null>;
  custom_comments: XmlMultiElem<PaDocumentCustomComment | null>;
  overall: XmlElem<number | null>;
  appraise_date: XmlElem<Date | null>;
  temp: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  file_name: XmlElem<string | null>;
  file_url: XmlElem<string | null>;
  index: XmlElem<number>;
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

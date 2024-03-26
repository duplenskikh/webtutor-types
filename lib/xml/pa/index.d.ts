interface PaDocumentKpiProfile {
  id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  comment: XmlElem<string>;
}

interface PaDocumentLabour {
  cash: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  standard_hours: XmlElem<number>;
  tenure: XmlElem<number>;
  work_hours: XmlElem<number>;
}

interface PaDocumentHierSnapshot {
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
}

interface PaDocumentCompetenceExercise {
  exercise_id: XmlElem<number, ExerciseCatalogDocumentTopElem>;
  mark: XmlElem<string>;
}

interface PaDocumentCompetenceIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id: XmlElem<number, IndicatorCatalogDocumentTopElem>;
  plan: XmlElem<string>;
  plan_text: XmlElem<string>;
  plan_value: XmlElem<number>;
  mark: XmlElem<string>;
  mark_text: XmlElem<string>;
  mark_value: XmlElem<number>;
  weight: XmlElem<number>;
  comment: XmlElem<string>;
}

interface PaDocumentCompetence extends WorkflowFieldsAssessmentBase {
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  plan: XmlElem<string>;
  plan_text: XmlElem<string>;
  plan_value: XmlElem<number>;
  mark: XmlElem<string>;
  mark_text: XmlElem<string>;
  mark_value: XmlElem<number>;
  weight: XmlElem<number>;
  comment: XmlElem<string>;
  type: XmlElem<string, typeof lists.competence_types>;
  exercises: XmlMultiElem<PaDocumentCompetenceExercise>;
  indicators: XmlMultiElem<PaDocumentCompetenceIndicator>;
}

interface PaDocumentKpi extends WorkflowFieldsAssessmentBase {
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  threshold: XmlElem<number>;
  plan: XmlElem<string>;
  challenge: XmlElem<number>;
  fact: XmlElem<string>;
  mark: XmlElem<string>;
  weight: XmlElem<number>;
  source_pa_id: XmlElem<number, PaCatalogDocumentTopElem>;
  kpi_value_id: XmlElem<number, KpiValueCatalogDocumentTopElem>;
  kpi_plan_id: XmlElem<number, KpiPlanCatalogDocumentTopElem>;
  position: XmlElem<number>;
  parent_kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
}

interface PaDocumentProject extends WorkflowFieldsAssessmentBase {
  project_id: XmlElem<string>;
  name: XmlElem<string>;
  threshold: XmlElem<number>;
  plan: XmlElem<string>;
  challenge: XmlElem<number>;
  fact: XmlElem<string>;
  mark: XmlElem<number>;
  weight: XmlElem<number>;
  standard_project_id: XmlElem<number, KpiCatalogDocumentTopElem>;
}

interface PaDocumentObjectiveSubobjective extends WorkflowFieldsAssessmentBase {
  name: XmlElem<string>;
  plan: XmlElem<string>;
  date: XmlElem<Date>;
  fact: XmlElem<string>;
  mark: XmlElem<number>;
  plan_budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  fact_budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
}

interface PaDocumentObjective extends WorkflowFieldsAssessmentBase {
  objective_id: XmlElem<string>;
  name: XmlElem<string>;
  weight: XmlElem<number>;
  mark: XmlElem<number>;
  plan_budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  fact_budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  subobjectives: XmlMultiElem<PaDocumentObjectiveSubobjective>;
}

interface PaDocumentTask {
  task_id: XmlElem<number, TaskCatalogDocumentTopElem>;
  weight: XmlElem<number>;
  position: XmlElem<number>;
  value_text: XmlElem<string>;
  value: XmlElem<number>;
  parent_task_id: XmlElem<number, TaskCatalogDocumentTopElem>;
}

interface PaDocumentCustomExpert {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_type: XmlElem<number>;
  is_done: XmlElem<boolean>;
  responsible: XmlElem<boolean>;
  expert_code: XmlElem<string>;
}

interface PaDocumentCustomComment {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string>;
  comment: XmlElem<string>;
  comment_date: XmlElem<Date>;
}

interface PaDocumentLastData {
  is_done: XmlElem<boolean>;
  workflow_state: XmlElem<string>;
}

interface PaDocumentStageCustomField {
  name: XmlElem<string>;
  title: XmlElem<string>;
  value: XmlElem<string>;
}

interface PaDocumentStage {
  id: XmlElem<string>;
  name: XmlElem<string>;
  career_transition_direction: XmlElem<string, typeof common.career_transition_direction_types>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  check_requirements: XmlElem<boolean>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  stipulation: XmlElem<string>;
  comment: XmlElem<string>;
  custom_fields: XmlMultiElem<PaDocumentStageCustomField>;
}

type PaDocumentTopElem = XmlTopElem &
WorkflowDataBase &
SupplementaryQuestionsBase &
CustomElemsBase &
AdminAccessBase &
FileListBase & {
  Doc: PaDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): string;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  expert_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  restrict_by_group: XmlElem<number, GroupCatalogDocumentTopElem>;
  department_id: XmlElem<number>;
  department_name: XmlElem<string>;
  flag_appraise_department: XmlElem<boolean>;
  assessment_object_type: XmlElem<string>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_plan_id: XmlElem<number, AssessmentPlanCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.assessment_appraise_participants>;
  is_done: XmlElem<boolean>;
  is_ready: XmlElem<boolean>;
  is_final: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  assessment_appraise_type: XmlElem<string, typeof common.assessment_appraise_types>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  competence_codes: XmlElem<string>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<PaDocumentKpiProfile>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  salary: XmlElem<number>;
  labour: XmlElem<PaDocumentLabour>;
  hier_snapshot: XmlElem<PaDocumentHierSnapshot>;
  boss_treat: XmlElem<string>;
  revised_value: XmlElem<number>;
  workflow_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  workflow_end_date: XmlElem<Date>;
  assessment_appraise_matrix_id: XmlElem<number, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  competences: XmlMultiElem<PaDocumentCompetence>;
  period_start: XmlElem<Date>;
  period_end: XmlElem<Date>;
  kpis: XmlMultiElem<PaDocumentKpi>;
  projects: XmlMultiElem<PaDocumentProject>;
  objectives: XmlMultiElem<PaDocumentObjective>;
  tasks: XmlMultiElem<PaDocumentTask>;
  custom_experts: XmlMultiElem<PaDocumentCustomExpert>;
  custom_comments: XmlMultiElem<PaDocumentCustomComment>;
  overall: XmlElem<number>;
  appraise_date: XmlElem<Date>;
  temp: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  file_name: XmlElem<string>;
  file_url: XmlElem<string>;
  index: XmlElem<number>;
  last_data: XmlElem<PaDocumentLastData>;
  career_plan_type: XmlElem<string>;
  career_plan_id: XmlElem<number, CareerPlanCatalogDocumentTopElem>;
  stages: XmlMultiElem<PaDocumentStage>;
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

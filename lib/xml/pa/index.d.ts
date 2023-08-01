interface PaDocumentCompetenceExercise {
  exercise_id: XmlElem<number>;
  mark: XmlElem<string>;
}

interface PaDocumentCompetenceIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id: XmlElem<number>;
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
  competence_id: XmlElem<number>;
  plan: XmlElem<string>;
  plan_text: XmlElem<string>;
  plan_value: XmlElem<number>;
  mark: XmlElem<string>;
  mark_text: XmlElem<string>;
  mark_value: XmlElem<number>;
  weight: XmlElem<number>;
  comment: XmlElem<string>;
  type: XmlElem<string>;
  exercises: XmlMultiElem<PaDocumentCompetenceExercise>;
  indicators: XmlMultiElem<PaDocumentCompetenceIndicator>;
}

interface PaDocumentKpi extends WorkflowFieldsAssessmentBase {
  kpi_id: XmlElem<number>;
  threshold: XmlElem<number>;
  plan: XmlElem<string>;
  challenge: XmlElem<number>;
  fact: XmlElem<string>;
  mark: XmlElem<string>;
  weight: XmlElem<number>;
  source_pa_id: XmlElem<number>;
  kpi_value_id: XmlElem<number>;
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
  standard_project_id: XmlElem<number>;
}

interface PaDocumentObjectiveSubobjective extends WorkflowFieldsAssessmentBase {
  name: XmlElem<string>;
  plan: XmlElem<string>;
  date: XmlElem<Date>;
  fact: XmlElem<string>;
  mark: XmlElem<number>;
  plan_budget_period_id: XmlElem<number>;
  fact_budget_period_id: XmlElem<number>;
}
interface PaDocumentObjective extends WorkflowFieldsAssessmentBase {
  objective_id: XmlElem<string>;
  name: XmlElem<string>;
  weight: XmlElem<number>;
  mark: XmlElem<number>;
  plan_budget_period_id: XmlElem<number>;
  fact_budget_period_id: XmlElem<number>;
  subobjectives: XmlMultiElem<PaDocumentObjectiveSubobjective>;
}

interface PaDocumentTask {
  task_id: XmlElem<number>;
  weight: XmlElem<number>;
  position: XmlElem<number>;
  parent_task_id: XmlElem<number>;
}

interface PaDocumentCustomExpert {
  person_id: XmlElem<number>;
  person_type: XmlElem<number>;
  is_done: XmlElem<boolean>;
  responsible: XmlElem<boolean>;
}

interface PaDocumentCustomComment {
  person_id: XmlElem<number>;
  workflow_state: XmlElem<string>;
  comment: XmlElem<string>;
  comment_date: XmlElem<Date>;
}

type PaDocumentTopElem = XmlTopElem & { Doc: PaDocument } &
WorkflowDataBase &
SupplementaryQuestionsBase &
CustomElemsBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name?(): string;
  person_id: XmlElem<number>;
  expert_person_id: XmlElem<number>;
  restrict_by_group: XmlElem<number>;
  department_id: XmlElem<number>;
  department_name: XmlElem<string>;
  flag_appraise_department: XmlElem<boolean>;
  assessment_object_type: XmlElem<string>;
  assessment_appraise_id: XmlElem<number>;
  assessment_plan_id: XmlElem<number>;
  status: XmlElem<string>;
  is_done: XmlElem<boolean>;
  is_ready: XmlElem<boolean>;
  is_final: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  assessment_appraise_type: XmlElem<string>;
  competence_profile_id: XmlElem<number>;
  competence_codes: XmlElem<string>;
  kpi_profile_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  salary: XmlElem<number>;
  boss_treat: XmlElem<string>;
  revised_value: XmlElem<number>;
  assessment_appraise_matrix_id: XmlElem<number>;
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
  experiment_foo(): unknown;
  calculate(): unknown;
  load_kpi_values(): unknown;
};

type PaDocument = XmlDocument & {
  TopElem: PaDocumentTopElem;
};

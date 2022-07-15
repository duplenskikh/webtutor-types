interface TaskExpert {
  expert_id?: XmlElem<number>;
}

interface TaskPreparation {
  person_id?: XmlElem<number>;
  role_id?: XmlElem<string>;
}

interface TaskWorkflowMatching {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  type?: XmlElem<string>;
  is_main?: XmlElem<boolean>;
}

interface TaskCustomField {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface TaskFile extends FileBase {
  visibility?: XmlElem<string>;
}

interface TaskHistory {
  status?: XmlElem<string>;
}

interface TaskView extends DescBase {
  initial_status?: XmlElem<string>;
  selector?: XmlElem<string>;
  workflow_state?: XmlElem<string>;
  workflow_action_result?: XmlElem<any>;
  workflow_create_break?: XmlElem<boolean>;
}

interface TaskTopElem extends XmlTopElem<TaskDocument>, ObjectCodeNameBase, WorkflowDataBase, AdminAccessBase, CustomElemsBase {
  task_type_id?: XmlElem<number>;
  parent_task_id?: XmlElem<number>;
  translated_task_id?: XmlElem<number>;
  translated_target_type?: XmlElem<string>;
  translated_target_id?: XmlElem<number>;
  assigner_id?: XmlElem<number>;
  executor_type?: XmlElem<string>;
  executor_id?: XmlElem<number>;
  source_object_type?: XmlElem<string>;
  source_object_id?: XmlElem<number>;
  pay_stage_id?: XmlElem<number>;
  target_object_type?: XmlElem<string>;
  target_object_id?: XmlElem<number>;
  fact_object_type?: XmlElem<string>;
  fact_object_id?: XmlElem<number>;
  date_period_type?: XmlElem<string>;
  date_plan?: XmlElem<Date>;
  date_fact?: XmlElem<Date>;
  plan_labor_costs?: XmlElem<number>;
  fact_labor_costs?: XmlElem<number>;
  plan_budget_period_id?: XmlElem<number>;
  fact_budget_period_id?: XmlElem<number>;
  priority?: XmlElem<number>;
  start_date_plan?: XmlElem<Date>;
  end_date_plan?: XmlElem<Date>;
  delayed_start?: XmlElem<number>;
  plan_duraion?: XmlElem<number>;
  plan?: XmlElem<string>;
  fact?: XmlElem<string>;
  status?: XmlElem<string>;
  value?: XmlElem<number>;
  readiness_percent?: XmlElem<number>;
  workflow_matching_type?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  experts?: XmlMultiElem<TaskExpert>;
  preparations?: XmlMultiElem<TaskPreparation>;
  workflow_matchings?: XmlMultiElem<TaskWorkflowMatching>;
  custom_fields?: XmlMultiElem<TaskCustomField>;
  files?: XmlMultiElem<TaskFile>;
  history?: XmlElem<TaskHistory>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<TaskView>;
  AddFile?(): any;
}

type TaskDocument = XmlDocument<TaskTopElem>;

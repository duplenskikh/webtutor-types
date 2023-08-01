interface TaskDocumentExpert {
  expert_id: XmlElem<number>;
}

interface TaskDocumentPreparation {
  person_id: XmlElem<number>;
  role_id: XmlElem<string>;
}

interface TaskDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number>;
  type: XmlElem<string>;
  is_main: XmlElem<boolean>;
}

interface TaskDocumentCustomField {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface TaskDocumentFile extends FileListBaseFile {
  visibility: XmlElem<string>;
}

type TaskDocumentTopElem = XmlTopElem & { Doc: TaskDocument } & 
ObjectCodeNameBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase & {
  task_type_id: XmlElem<number>;
  parent_task_id: XmlElem<number>;
  translated_task_id: XmlElem<number>;
  translated_target_type: XmlElem<string>;
  translated_target_id: XmlElem<number>;
  assigner_id: XmlElem<number>;
  executor_type: XmlElem<string>;
  executor_id: XmlElem<number>;
  experts: XmlMultiElem<TaskDocumentExpert>;
  preparations: XmlMultiElem<TaskDocumentPreparation>;
  source_object_type: XmlElem<string>;
  source_object_id: XmlElem<number>;
  pay_stage_id: XmlElem<number>;
  target_object_type: XmlElem<string>;
  target_object_id: XmlElem<number>;
  fact_object_type: XmlElem<string>;
  fact_object_id: XmlElem<number>;
  date_period_type: XmlElem<string>;
  date_plan: XmlElem<Date>;
  date_fact: XmlElem<Date>;
  plan_labor_costs: XmlElem<number>;
  fact_labor_costs: XmlElem<number>;
  plan_budget_period_id: XmlElem<number>;
  fact_budget_period_id: XmlElem<number>;
  priority: XmlElem<number>;
  start_date_plan: XmlElem<Date>;
  end_date_plan: XmlElem<Date>;
  delayed_start: XmlElem<number>;
  plan_duraion: XmlElem<number>;
  plan: XmlElem<string>;
  fact: XmlElem<string>;
  status: XmlElem<string>;
  value: XmlElem<number>;
  readiness_percent: XmlElem<number>;
  workflow_matchings: XmlMultiElem<TaskDocumentWorkflowMatching>;
  workflow_matching_type: XmlElem<string>;
  custom_fields: XmlMultiElem<TaskDocumentCustomField>;
  files: XmlMultiElem<TaskDocumentFile>;
  AddFile(): unknown;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
};

type TaskDocument = XmlDocument & {
  TopElem: TaskDocumentTopElem;
};

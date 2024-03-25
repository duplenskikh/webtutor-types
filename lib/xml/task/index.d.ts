interface TaskDocumentExpert {
  expert_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface TaskDocumentPreparation {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_plan: XmlElem<number>;
  role_id: XmlElem<string>;
}

interface TaskDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string>;
  is_main: XmlElem<boolean>;
}

interface TaskDocumentCustomField {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface TaskDocumentFile extends FileBase {
  visibility: XmlElem<string>;
}

interface TaskDocumentCustomComment {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string>;
  comment: XmlElem<string>;
  comment_date: XmlElem<Date>;
}

interface TaskDocumentHistory {
  status: XmlElem<string>;
  custom_state_id: XmlElem<string>;
}

type TaskDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TaskDocument;
  task_type_id: XmlElem<number, TaskTypeCatalogDocumentTopElem>;
  parent_task_id: XmlElem<number, TaskCatalogDocumentTopElem>;
  translated_task_id: XmlElem<number, TaskCatalogDocumentTopElem>;
  translated_target_type: XmlElem<string, typeof common.exchange_object_types>;
  translated_target_id: XmlElem<number>;
  assigner_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  executor_type: XmlElem<string, typeof common.exchange_object_types>;
  executor_id: XmlElem<number>;
  executor_plan: XmlElem<number>;
  experts: XmlMultiElem<TaskDocumentExpert>;
  preparations: XmlMultiElem<TaskDocumentPreparation>;
  source_object_type: XmlElem<string, typeof common.exchange_object_types>;
  source_object_id: XmlElem<number>;
  pay_stage_id: XmlElem<number, PayStageCatalogDocumentTopElem>;
  target_object_type: XmlElem<string, typeof common.exchange_object_types>;
  target_object_id: XmlElem<number>;
  fact_object_type: XmlElem<string, typeof common.exchange_object_types>;
  fact_object_id: XmlElem<number>;
  date_period_type: XmlElem<string, typeof common.perioditys>;
  date_plan: XmlElem<Date>;
  date_fact: XmlElem<Date>;
  plan_labor_costs: XmlElem<number>;
  fact_labor_costs: XmlElem<number>;
  plan_budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  fact_budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  priority: XmlElem<number>;
  start_date_plan: XmlElem<Date>;
  end_date_plan: XmlElem<Date>;
  delayed_start: XmlElem<number>;
  plan_duraion: XmlElem<number>;
  plan: XmlElem<string>;
  plan_value: XmlElem<number>;
  fact: XmlElem<string>;
  fact_value: XmlElem<number>;
  custom_state_id: XmlElem<string>;
  status: XmlElem<string, typeof common.task_statuses>;
  value: XmlElem<number>;
  readiness_percent: XmlElem<number>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  workflow_matchings: XmlMultiElem<TaskDocumentWorkflowMatching>;
  workflow_matching_type: XmlElem<string>;
  custom_fields: XmlMultiElem<TaskDocumentCustomField>;
  files: XmlMultiElem<TaskDocumentFile>;
  AddFile(fileId: number): void;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  custom_comments: XmlMultiElem<TaskDocumentCustomComment>;
  doc_info: XmlElem<DocInfoBase>;
  history: XmlElem<TaskDocumentHistory>;
  role_id: XmlMultiElemObject<number>;
};

type TaskDocument = XmlDocument & {
  TopElem: TaskDocumentTopElem;
  task: TaskDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

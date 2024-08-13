interface TaskDocumentExpert {
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TaskDocumentPreparation {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_plan: XmlElem<number | null>;
  role_id: XmlElem<string | null>;
}

interface TaskDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string | null>;
  is_main: XmlElem<boolean | null>;
}

interface TaskDocumentCustomField {
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface TaskDocumentFile extends FileBase {
  visibility: XmlElem<string>;
}

interface TaskDocumentCustomComment {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  comment_date: XmlElem<Date | null>;
}

interface TaskDocumentHistory {
  status: XmlElem<string | null>;
  custom_state_id: XmlElem<string | null>;
}

type TaskDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TaskDocument;
  task_type_id: XmlElem<number | null, TaskTypeCatalogDocumentTopElem>;
  parent_task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  translated_task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  translated_target_type: XmlElem<string | null, typeof common.exchange_object_types>;
  translated_target_id: XmlElem<number | null>;
  assigner_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  executor_type: XmlElem<string, typeof common.exchange_object_types>;
  executor_id: XmlElem<number | null>;
  executor_plan: XmlElem<number | null>;
  experts: XmlMultiElem<TaskDocumentExpert | null>;
  preparations: XmlMultiElem<TaskDocumentPreparation | null>;
  source_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  source_object_id: XmlElem<number | null>;
  pay_stage_id: XmlElem<number | null, PayStageCatalogDocumentTopElem>;
  target_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  target_object_id: XmlElem<number | null>;
  fact_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  fact_object_id: XmlElem<number | null>;
  date_period_type: XmlElem<string | null, typeof common.perioditys>;
  date_plan: XmlElem<Date | null>;
  date_fact: XmlElem<Date | null>;
  plan_labor_costs: XmlElem<number | null>;
  fact_labor_costs: XmlElem<number | null>;
  plan_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  fact_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  priority: XmlElem<number | null>;
  start_date_plan: XmlElem<Date | null>;
  end_date_plan: XmlElem<Date | null>;
  delayed_start: XmlElem<number | null>;
  plan_duraion: XmlElem<number | null>;
  plan: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  fact: XmlElem<string | null>;
  fact_value: XmlElem<number | null>;
  custom_state_id: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.task_statuses>;
  value: XmlElem<number | null>;
  readiness_percent: XmlElem<number | null>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  workflow_matchings: XmlMultiElem<TaskDocumentWorkflowMatching | null>;
  workflow_matching_type: XmlElem<string | null>;
  custom_fields: XmlMultiElem<TaskDocumentCustomField | null>;
  files: XmlMultiElem<TaskDocumentFile | null>;
  AddFile(fileId: number): void;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  custom_comments: XmlMultiElem<TaskDocumentCustomComment | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  history: XmlElem<TaskDocumentHistory | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type TaskDocument = XmlDocument & {
  TopElem: TaskDocumentTopElem;
  task: TaskDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

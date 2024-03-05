type TaskCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  task_type_id: XmlElem<number, TaskTypeCatalogDocumentTopElem>;
  parent_task_id: XmlElem<number, TaskCatalogDocumentTopElem>;
  translated_task_id: XmlElem<number, TaskCatalogDocumentTopElem>;
  translated_target_type: XmlElem<string, typeof common.exchange_object_types>;
  translated_target_id: XmlElem<number>;
  assigner_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  executor_type: XmlElem<string, typeof common.exchange_object_types>;
  executor_id: XmlElem<number>;
  status: XmlElem<string, typeof common.task_statuses>;
  custom_state_id: XmlElem<string>;
  plan: XmlElem<string>;
  fact: XmlElem<string>;
  plan_value: XmlElem<number>;
  fact_value: XmlElem<number>;
  value: XmlElem<number>;
  readiness_percent: XmlElem<number>;
  priority: XmlElem<number>;
  source_object_type: XmlElem<string, typeof common.exchange_object_types>;
  source_object_id: XmlElem<number>;
  pay_stage_id: XmlElem<number, PayStageCatalogDocumentTopElem>;
  target_object_type: XmlElem<string, typeof common.exchange_object_types>;
  target_object_id: XmlElem<number>;
  fact_object_type: XmlElem<string, typeof common.exchange_object_types>;
  fact_object_id: XmlElem<number>;
  expert_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  date_plan: XmlElem<Date>;
  date_fact: XmlElem<Date>;
  start_date_plan: XmlElem<Date>;
  end_date_plan: XmlElem<Date>;
  plan_budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  fact_budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  plan_labor_costs: XmlElem<number>;
  fact_labor_costs: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_person_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  workflow_matching_type: XmlElem<string>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  preparation_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  OnBuild(): unknown;
};

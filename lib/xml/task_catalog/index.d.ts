type TaskCatalogDocumentTopElem = XmlTopElem & { Doc: TaskCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  task_type_id: XmlElem<number>;
  parent_task_id: XmlElem<number>;
  translated_task_id: XmlElem<number>;
  translated_target_type: XmlElem<string>;
  translated_target_id: XmlElem<number>;
  assigner_id: XmlElem<number>;
  executor_type: XmlElem<string>;
  executor_id: XmlElem<number>;
  status: XmlElem<string>;
  value: XmlElem<number>;
  readiness_percent: XmlElem<number>;
  priority: XmlElem<number>;
  source_object_type: XmlElem<string>;
  source_object_id: XmlElem<number>;
  pay_stage_id: XmlElem<number>;
  target_object_type: XmlElem<string>;
  target_object_id: XmlElem<number>;
  fact_object_type: XmlElem<string>;
  fact_object_id: XmlElem<number>;
  expert_id: XmlMultiElem<number>;
  date_plan: XmlElem<Date>;
  date_fact: XmlElem<Date>;
  start_date_plan: XmlElem<Date>;
  end_date_plan: XmlElem<Date>;
  plan_labor_costs: XmlElem<number>;
  fact_labor_costs: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  workflow_id: XmlElem<number>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_person_id: XmlMultiElem<number>;
  workflow_matching_type: XmlElem<string>;
  preparation_id: XmlMultiElem<number>;
}

type TaskCatalogDocument = XmlDocument & { TopElem: TaskCatalogDocumentTopElem; };

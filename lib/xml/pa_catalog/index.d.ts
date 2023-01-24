type PaCatalogDocumentTopElem = XmlTopElem & { Doc: PaCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  assessment_appraise_id: XmlElem<number>;
  assessment_plan_id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  expert_person_id: XmlElem<number>;
  expert_person_fullname: XmlElem<string>;
  expert_person_position_name: XmlElem<string>;
  custom_experts: XmlElem<string>;
  custom_experts_array: XmlMultiElem<number>;
  is_custom_experts: XmlElem<boolean>;
  department_id: XmlElem<number>;
  department_name: XmlElem<string>;
  flag_appraise_department: XmlElem<boolean>;
  competence_profile_id: XmlElem<number>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  period_start: XmlElem<Date>;
  period_end: XmlElem<Date>;
  assessment_appraise_type: XmlElem<string>;
  is_done: XmlElem<boolean>;
  is_ready: XmlElem<boolean>;
  is_final: XmlElem<boolean>;
  status: XmlElem<string>;
  overall: XmlElem<number>;
  appraise_date: XmlElem<Date>;
  index: XmlElem<number>;
  workflow_id: XmlElem<number>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_state_last_date: XmlElem<Date>;
  is_workflow_init: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PaCatalogDocument = XmlDocument & { TopElem: PaCatalogDocumentTopElem; };

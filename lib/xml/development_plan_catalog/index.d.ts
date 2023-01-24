type DevelopmentPlanCatalogDocumentTopElem = XmlTopElem & { Doc: DevelopmentPlanCatalogDocument } & 
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
  department_id: XmlElem<number>;
  department_name: XmlElem<string>;
  custom_experts: XmlElem<string>;
  custom_experts_array: XmlMultiElem<number>;
  is_custom_experts: XmlElem<boolean>;
  flag_appraise_department: XmlElem<boolean>;
  status: XmlElem<string>;
  assessment_appraise_type: XmlElem<string>;
  is_done: XmlElem<boolean>;
  is_ready: XmlElem<boolean>;
  is_final: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  workflow_id: XmlElem<number>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_state_last_date: XmlElem<Date>;
  is_workflow_init: XmlElem<boolean>;
  career_reserve_id: XmlElem<number>;
  appraise_date: XmlElem<Date>;
  index: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DevelopmentPlanCatalogDocument = XmlDocument & { TopElem: DevelopmentPlanCatalogDocumentTopElem; };

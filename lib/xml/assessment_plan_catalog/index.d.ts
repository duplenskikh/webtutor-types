type AssessmentPlanCatalogDocumentTopElem = XmlTopElem & { Doc: AssessmentPlanCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  assessment_appraise_id: XmlElem<number>;
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
  is_done: XmlElem<boolean>;
  assessment_appraise_type: XmlElem<string>;
  status: XmlElem<string>;
  boss_id: XmlElem<number>;
  integral_mark: XmlElem<number>;
  workflow_id: XmlElem<number>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_state_last_date: XmlElem<Date>;
  is_workflow_init: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  index: XmlElem<number>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  budget_period_id: XmlElem<number>;
  period_start: XmlElem<Date>;
  period_end: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type AssessmentPlanCatalogDocument = XmlDocument & { TopElem: AssessmentPlanCatalogDocumentTopElem; };

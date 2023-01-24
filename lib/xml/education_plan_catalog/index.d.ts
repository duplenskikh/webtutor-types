type EducationPlanCatalogDocumentTopElem = XmlTopElem & { Doc: EducationPlanCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  group_id: XmlElem<number>;
  compound_program_id: XmlElem<number>;
  type: XmlElem<string>;
  person_id: XmlElem<number>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  event_id: XmlElem<number>;
  update_status_and_activity: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  plan_date: XmlElem<Date>;
  last_activity_date: XmlElem<Date>;
  mark: XmlElem<number>;
  state_id: XmlElem<number>;
  readiness_percent: XmlElem<number>;
  development_plan_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  assessment_appraise_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type EducationPlanCatalogDocument = XmlDocument & { TopElem: EducationPlanCatalogDocumentTopElem; };

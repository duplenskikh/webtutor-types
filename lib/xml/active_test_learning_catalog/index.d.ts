type ActiveTestLearningCatalogDocumentTopElem = XmlTopElem & { Doc: ActiveTestLearningCatalogDocument } & 
AnnalsNumsBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  assessment_id: XmlElem<number>;
  assessment_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_instance_id: XmlElem<string>;
  person_current_state: XmlElem<string>;
  event_id: XmlElem<number>;
  group_id: XmlElem<number>;
  proctor_prefer_id: XmlElem<number>;
  start_usage_date: XmlElem<Date>;
  start_learning_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
  max_end_date: XmlElem<Date>;
  score: XmlElem<number>;
  state_id: XmlElem<number>;
  time: XmlElem<number>;
  use_proctoring: XmlElem<boolean>;
  is_self_enrolled: XmlElem<boolean>;
  max_score: XmlElem<number>;
  assessment_appraise_id: XmlElem<number>;
  education_plan_id: XmlElem<number>;
  creation_date: XmlElem<Date>;
  creation_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  modification_user_id: XmlElem<number>;
  app_instance_id: XmlElem<string>;
}

type ActiveTestLearningCatalogDocument = XmlDocument & { TopElem: ActiveTestLearningCatalogDocumentTopElem; };

type LearningCatalogDocumentTopElem = XmlTopElem & { Doc: LearningCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  course_id: XmlElem<number>;
  course_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_instance_id: XmlElem<string>;
  person_current_state: XmlElem<string>;
  event_id: XmlElem<number>;
  event_name: XmlElem<string>;
  event_start_date: XmlElem<Date>;
  group_id: XmlElem<number>;
  start_usage_date: XmlElem<Date>;
  start_learning_date: XmlElem<Date>;
  is_self_enrolled: XmlElem<boolean>;
  last_usage_date: XmlElem<Date>;
  max_end_date: XmlElem<Date>;
  max_score: XmlElem<number>;
  score: XmlElem<number>;
  text_result: XmlElem<string>;
  state_id: XmlElem<number>;
  time: XmlElem<number>;
  education_plan_id: XmlElem<number>;
  active_learning_id: XmlElem<number>;
  creation_date: XmlElem<Date>;
  creation_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  modification_user_id: XmlElem<number>;
  app_instance_id: XmlElem<string>;
  use_proctoring: XmlElem<boolean>;
}

type LearningCatalogDocument = XmlDocument & { TopElem: LearningCatalogDocumentTopElem; };

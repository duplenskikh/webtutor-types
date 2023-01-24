type LearningTaskResultCatalogDocumentTopElem = XmlTopElem & { Doc: LearningTaskResultCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  learning_task_id: XmlElem<number>;
  learning_task_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  expert_id: XmlElem<number>;
  event_id: XmlElem<number>;
  status_id: XmlElem<string>;
  mark: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  start_execution_date: XmlElem<Date>;
  finish_execution_date: XmlElem<Date>;
  plan_start_date: XmlElem<Date>;
  plan_end_date: XmlElem<Date>;
  duration: XmlElem<number>;
  expired: XmlElem<boolean>;
  education_plan_id: XmlElem<number>;
  active_learning_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LearningTaskResultCatalogDocument = XmlDocument & { TopElem: LearningTaskResultCatalogDocumentTopElem; };

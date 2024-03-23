type LearningTaskResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  learning_task_id: XmlElem<number, LearningTaskCatalogDocumentTopElem>;
  learning_task_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  expert_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.learning_task_status_types>;
  mark: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  start_execution_date: XmlElem<Date>;
  finish_execution_date: XmlElem<Date>;
  plan_start_date: XmlElem<Date>;
  plan_end_date: XmlElem<Date>;
  duration: XmlElem<number>;
  expired: XmlElem<boolean>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  active_learning_id: XmlElem<number, ActiveLearningCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

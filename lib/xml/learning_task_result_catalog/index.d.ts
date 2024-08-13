type LearningTaskResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
  learning_task_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.learning_task_status_types>;
  mark: XmlElem<number | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  start_execution_date: XmlElem<Date | null>;
  finish_execution_date: XmlElem<Date | null>;
  plan_start_date: XmlElem<Date | null>;
  plan_end_date: XmlElem<Date | null>;
  duration: XmlElem<number | null>;
  expired: XmlElem<boolean>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

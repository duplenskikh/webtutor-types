interface LearningTaskResultDocumentFile extends FileBase {
  is_expert: XmlElem<boolean>;
}

type LearningTaskResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LearningTaskResultDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  learning_task_id: XmlElem<number, LearningTaskCatalogDocumentTopElem>;
  learning_task_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.learning_task_status_types>;
  answer: XmlElem<string>;
  expert_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  expert_comment: XmlElem<string>;
  mark: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  plan_start_date: XmlElem<Date>;
  plan_end_date: XmlElem<Date>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  active_learning_id: XmlElem<number, ActiveLearningCatalogDocumentTopElem>;
  duration: XmlElem<number>;
  expired: XmlElem<boolean>;
  start_execution_date: XmlElem<Date>;
  finish_execution_date: XmlElem<Date>;
  files: XmlMultiElem<LearningTaskResultDocumentFile>;
  AddFile(_file_id: number, docResourceParam: Date): unknown;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type LearningTaskResultDocument = XmlDocument & {
  TopElem: LearningTaskResultDocumentTopElem;
  learning_task_result: LearningTaskResultDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};

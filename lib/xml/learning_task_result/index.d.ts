interface LearningTaskResultDocumentFile extends FileBase {
  is_expert: XmlElem<boolean>;
}

type LearningTaskResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LearningTaskResultDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
  learning_task_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.learning_task_status_types>;
  answer: XmlElem<string | null>;
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  expert_comment: XmlElem<string | null>;
  mark: XmlElem<number | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  plan_start_date: XmlElem<Date | null>;
  plan_end_date: XmlElem<Date | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  duration: XmlElem<number | null>;
  expired: XmlElem<boolean>;
  start_execution_date: XmlElem<Date | null>;
  finish_execution_date: XmlElem<Date | null>;
  files: XmlMultiElem<LearningTaskResultDocumentFile | null>;
  AddFile(fileId: number, docResource: unknown): void;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LearningTaskResultDocument = XmlDocument & {
  TopElem: LearningTaskResultDocumentTopElem;
  learning_task_result: LearningTaskResultDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

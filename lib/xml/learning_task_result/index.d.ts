interface LearningTaskResultDocumentFile extends FileBase {
  is_expert: XmlElem<boolean>;
}

type LearningTaskResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LearningTaskResultDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
  learning_task_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Статус */
  status_id: XmlElem<string | null, typeof common.learning_task_status_types>;
  /** Ответ */
  answer: XmlElem<string | null>;
  /** Эксперт */
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Комментарий эксперта */
  expert_comment: XmlElem<string | null>;
  /** Оценка */
  mark: XmlElem<number | null>;
  /** Дата назначения */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Планируемая дата начала */
  plan_start_date: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  plan_end_date: XmlElem<Date | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  duration: XmlElem<number | null>;
  expired: XmlElem<boolean>;
  start_execution_date: XmlElem<Date | null>;
  finish_execution_date: XmlElem<Date | null>;
  files: XmlMultiElem<LearningTaskResultDocumentFile | null>;
  AddFile(fileId: number, docResource: unknown): void;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type LearningTaskResultDocument = XmlDocument & {
  TopElem: LearningTaskResultDocumentTopElem;
  learning_task_result: LearningTaskResultDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

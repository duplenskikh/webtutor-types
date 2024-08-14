interface LearningTaskDocumentExpert extends PersonFillingBase {
  id: XmlElem<string | null>;
  /** Эксперт курса */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type LearningTaskDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsKpBase & {
  Doc: LearningTaskDocument;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  yourself_start: XmlElem<boolean>;
  use_in_event: XmlElem<boolean>;
  duration: XmlElem<number | null>;
  experts: XmlMultiElem<LearningTaskDocumentExpert | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type LearningTaskDocument = XmlDocument & {
  TopElem: LearningTaskDocumentTopElem;
  learning_task: LearningTaskDocumentTopElem;
  DocDesc(): string;
};

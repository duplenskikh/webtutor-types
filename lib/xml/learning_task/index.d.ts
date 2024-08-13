interface LearningTaskDocumentExpert extends PersonFillingBase {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type LearningTaskDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsKpBase & {
  Doc: LearningTaskDocument;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  yourself_start: XmlElem<boolean>;
  use_in_event: XmlElem<boolean>;
  duration: XmlElem<number | null>;
  experts: XmlMultiElem<LearningTaskDocumentExpert | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type LearningTaskDocument = XmlDocument & {
  TopElem: LearningTaskDocumentTopElem;
  learning_task: LearningTaskDocumentTopElem;
  DocDesc(): string;
};

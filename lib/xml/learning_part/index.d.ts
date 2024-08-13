type LearningPartDocumentTopElem = XmlTopElem &
CoreLessonBase &
AnnalsObjectsBase & {
  Doc: LearningPartDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  learning_id: XmlElem<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LearningPartDocument = XmlDocument & {
  TopElem: LearningPartDocumentTopElem;
  learning_part: LearningPartDocumentTopElem;
  DocDesc(): string;
};

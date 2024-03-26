type LearningPartDocumentTopElem = XmlTopElem &
CoreLessonBase &
AnnalsObjectsBase & {
  Doc: LearningPartDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  learning_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type LearningPartDocument = XmlDocument & {
  TopElem: LearningPartDocumentTopElem;
  learning_part: LearningPartDocumentTopElem;
  DocDesc(): string;
};

type LearningPartDocumentTopElem = XmlTopElem & { Doc: LearningPartDocument } & 
CoreLessonBase &
AnnalsObjectsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  learning_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
}

type LearningPartDocument = XmlDocument & { TopElem: LearningPartDocumentTopElem; };

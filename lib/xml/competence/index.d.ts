interface CompetenceDocumentExercise {
  exercise_id: XmlElem<number>;
}

type CompetenceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CompetenceScaleBase &
CompetenceLevelBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: CompetenceDocument;
  competence_block_id: XmlElem<number>;
  exercises: XmlMultiElem<CompetenceDocumentExercise>;
  positive_comment: XmlElem<string>;
  negative_comment: XmlElem<string>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type CompetenceDocument = XmlDocument & {
  TopElem: CompetenceDocumentTopElem;
};

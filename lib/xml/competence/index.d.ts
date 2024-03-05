interface CompetenceDocumentExercise {
  exercise_id: XmlElem<number, ExerciseCatalogDocumentTopElem>;
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
  competence_block_id: XmlElem<number, CompetenceBlockCatalogDocumentTopElem>;
  exercises: XmlMultiElem<CompetenceDocumentExercise>;
  positive_comment: XmlElem<string>;
  negative_comment: XmlElem<string>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type CompetenceDocument = XmlDocument & {
  TopElem: CompetenceDocumentTopElem;
};

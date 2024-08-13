interface CompetenceDocumentExercise {
  exercise_id: XmlElem<number | null, ExerciseCatalogDocumentTopElem>;
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
  competence_block_id: XmlElem<number | null, CompetenceBlockCatalogDocumentTopElem>;
  exercises: XmlMultiElem<CompetenceDocumentExercise | null>;
  positive_comment: XmlElem<string | null>;
  negative_comment: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type CompetenceDocument = XmlDocument & {
  TopElem: CompetenceDocumentTopElem;
  competence: CompetenceDocumentTopElem;
  DocDesc(): string;
};

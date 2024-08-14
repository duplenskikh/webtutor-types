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
  /** Блок */
  competence_block_id: XmlElem<number | null, CompetenceBlockCatalogDocumentTopElem>;
  /** Упражнения */
  exercises: XmlMultiElem<CompetenceDocumentExercise | null>;
  /** Позитивное проявление */
  positive_comment: XmlElem<string | null>;
  /** Негативное проявление */
  negative_comment: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type CompetenceDocument = XmlDocument & {
  TopElem: CompetenceDocumentTopElem;
  competence: CompetenceDocumentTopElem;
  DocDesc(): string;
};
